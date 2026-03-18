import fs from 'fs-extra';

const fileName = process.argv[2];

fs.readFile(fileName, {encoding: 'utf-8'})
    .then(data => {
        const length = data.split('\n').length - 1;
        console.log(`${fileName}: ${length}`);
    })
    .catch(err => {
        console.error(err);
    })
