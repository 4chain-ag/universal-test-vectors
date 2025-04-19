import {generateWireFramesFor} from "./generator/wire-frames-generator";

export const listActions: Record<string, ReturnType<typeof generateWireFramesFor>> = {
    'listActions-simple': generateWireFramesFor(
        'listActions',
        {
            totalActions: 2,
            actions: [{
                txid: "1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
                satoshis: 1000,
                status: "completed",
                isOutgoing: true,
                description: "Test transaction 1",
                version: 1,
                lockTime: 10,
                outputs: [{
                    outputIndex: 1,
                    outputDescription: "Test output",
                    basket: "basket1",
                    spendable: true,
                    tags: ["tag1", "tag2"],
                    satoshis: 1000,
                    lockingScript: "76a9143cf53c49c322d9d811728182939aee2dca087f9888ac",
                }]
            }, {
                txid: "",
                satoshis: 0,
                status: "unsigned",
                isOutgoing: false,
                description: "",
                version: 0,
                lockTime: 0,
                outputs: [{
                    outputIndex: 0,
                    outputDescription: "",
                    basket: "",
                    spendable: false,
                    tags: [],
                    satoshis: 0,
                    lockingScript: "",
                }]
            }]
        },
        {
            labels: ["test-label"],
            limit: 10,
            includeOutputs: true,
        }
    ),
    // Add more cases if needed
}
