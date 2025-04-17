package interpreter

import (
	primitives "github.com/bsv-blockchain/go-sdk/primitives/ec"
	sdk "github.com/bsv-blockchain/go-sdk/transaction"
	sighash "github.com/bsv-blockchain/go-sdk/transaction/sighash"
	"github.com/bsv-blockchain/go-sdk/transaction/template/p2pkh"
	"github.com/bsv-blockchain/universal-test-vectors/pkg/internal/type42"
)

func NewUnlockingScriptInterpreter() *Interpreter[*UnlockingTemplateResolver, primitives.PrivateKey] {
	return NewInterpreter(&UnlockingTemplateResolver{})
}

type UnlockingTemplateResolver struct {
	Template sdk.UnlockingScriptTemplate
	privKey  *primitives.PrivateKey
}

func (un *UnlockingTemplateResolver) Initialize(privKey *primitives.PrivateKey) error {
	un.privKey = privKey
	return nil
}

func (un *UnlockingTemplateResolver) Type42(instruction string) (bool, error) {
	priv, err := type42.DerivePrivateKey(un.privKey, instruction)
	if err != nil {
		panic("Invalid setup of user fixture, cannot restore type42 instruction: " + err.Error())
	}
	un.privKey = priv
	return true, nil
}

func (un *UnlockingTemplateResolver) Sign(_ string) (bool, error) {
	sigHashFlag := sighash.AllForkID
	template, err := p2pkh.Unlock(un.privKey, &sigHashFlag)
	if err != nil {
		panic("Invalid setup of user fixture, cannot restore unlocking script: " + err.Error())
	}
	un.Template = template
	return false, nil
}

func (un *UnlockingTemplateResolver) Finalize() error {
	if un.Template == nil {
		// this is implicit "Sign" if there was no "Sign" instruction in provided custom instructions
		_, _ = un.Sign("P2PKH")
	}
	return nil
}
