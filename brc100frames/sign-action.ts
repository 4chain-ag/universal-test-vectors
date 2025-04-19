import {generateWireFramesFor} from "./generator/wire-frames-generator";
import {Utils} from "@bsv/sdk";

export const signAction: Record<string, ReturnType<typeof generateWireFramesFor>> = {
    'signAction-simple': generateWireFramesFor(
        'signAction',
        {
            txid: "03895fb984362a4196bc9931629318fcbb2aeba7c6293638119ea653fa31d119",
            tx: Utils.toArray("01000000017cd347a6a099f82cde68faec941e888ebc3489b25403e3ffedd3280f3fa4cc03000000006b483045022100f269c3f340a9cfae580b057429f91e1fcb2d0afccb5a3b9d194d705b4decfbda0220725a74244d4618654335f3e14b9fceb50ada1f679bb8a00c087571643eb974714121034d2d6d23fbcb6eefe3e80c47044e36797dcb80d0ac5e96e732ef03c3c550a116ffffffff01e7030000000000001976a9143cf53c49c322d9d811728182939aee2dca087f9888ac00000000", "hex"),
        },
        {
            reference: "dGVzdA==",
            spends: {
                0: {
                    unlockingScript: "76a91489abcdefabbaabbaabbaabbaabbaabbaabbaabba88ac",
                },
            },
        }
    ),
    // Add more cases if needed
}
