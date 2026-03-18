import fs from "fs-extra";

async function renamingFiles() {
  // 1. Use ...files (Rest pattern) to capture all remaining arguments as an array
  const [extMatch, extReplace, ...files] = process.argv.slice(2);

  if (!extMatch || !extReplace || files.length === 0) {
    console.error(
      "Usage: node renamingFiles.js <old-extension> <new-extension> <file1> <file2> ...",
    );
    process.exit(1);
  }

  // 2. Iterate through each file provided
  for(oldFile of files) {
    //cehck if the file ends with the extension we're looking for(the one we want to replace)
    if (oldFile.endsWith(extMatch)) {
      const newFile = file.replace(extMatch, extReplace);

      const fileExists = await fs.pathExists(newFile);
      if (fileExists == true) {
        console.log(`${newFile} already exists. Skipping`)
      } else {
        try {
          await fs.rename(file, newFile);
          console.log(`Renamed ${file} to ${newFile}`);
        } catch(err) {
          console.error(err);
        }
      }
    } else {
      console.log(`Skipping ${file} as it doesn't end with ${extMatch}`);
    }
  }
}

renamingFiles();
