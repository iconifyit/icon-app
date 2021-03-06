#!/usr/bin/env node

/*
 * Capture CLI arguments.
 */
const [,, ...args] = process.argv

/*
 * Make sure we have at least one argument.
 */
if (args.length === 0) {
    console.log(
        "\nUsage : \n" +
        "    @param {string} input   Path to JSON definition file \n" +
        "    @param {string} output  The path to the output folder (do not include file name)" +
        "\n" +
        "(Coming soon) See `link` for full documentation.\n"
    );
    process.exit(0);
}


const input  = args[0],
    output = args[1];

console.log(
    new jsonToJsModel(input, output).getOutput()
);
