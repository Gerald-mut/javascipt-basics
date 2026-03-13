import fs from 'fs-extra';

async function readLines() {
    const targetFile = process.argv[2];
    if (!targetFile) {
        console.log("Please enter a file to read");
        process.exit(1);
    }
    try {
        // by default readFile returns a buffer(raw computer memory) so we usue utf-8 to convert it to javascript string
        const content = await fs.readFile(targetFile, 'utf-8');
        //the content is a big string now we split it wheever there's a newline character
        const lines = content.split('\n');
        const result = lines.length
        console.log(result);

    } catch (err) {
        console.error(err);
    }
    
}

readLines()