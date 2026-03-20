import fs from 'fs-extra';

const args = process.argv.slice(2);
const numLines = parseInt(args[0], 10);

const files = args.slice(1);

async function printHead(linesToPrint, fileList) {
    for (const file of fileList) {
        try {
            const content = await fs.readFile(file, { encoding: 'utf-8'})
            const lines = content.split('\n');

            const selectedLines = lines.slice(-linesToPrint);

            console.log(`--- ${file} ---`);
            console.log(selectedLines.join('\n'));
        } catch (errpr) {
            console.error(`Error reading ${file}: ${error.message}`);
        }
    }
}

printHead(numLines, files);