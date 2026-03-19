import fs from 'fs-extra'

//Grab what the user times in the terminal
const args = process.argv.slice(2)

//convert the string to int
const numLines = parseInt(args[0], 10)

//get the files 
const files = args.slice(1)

async function printHead(linesToPrint, fileList) {
    for (const file of fileList) {
        try {

            const content = await fs.readFile(file, { encoding: 'utf-8' })
            const lines = content.split('\n');

            const selectedLines = lines.slice(0, linesToPrint)

            console.log(`\n--- ${file} ---`);
            console.log(selectedLines.join('\n'));
        } catch (error) {
            console.error(`\nError reading ${file}: ${error.message}`);
        }
    }
}

printHead(numLines, files)