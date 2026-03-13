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
  for (const oldFile of files) {
    // 3. Check if the file has the matching extension
    if (oldFile.endsWith(extMatch)) {
      const newFile = oldFile.replace(extMatch, extReplace);

      // 4. Check if the destination already exists (to prevent overwriting)
      const exists = await fs.pathExists(newFile);

      if (exists) {
        console.log(`Skipping ${oldFile}: ${newFile} already exists.`);
      } else {
        // 5. Perform the rename
        try {
          await fs.rename(oldFile, newFile);
          console.log(`Renamed ${oldFile} -> ${newFile}`);
        } catch (err) {
          console.error(`Error renaming ${oldFile}:`, err.message);
        }
      }
    } else {
      console.log(
        `Skipping ${oldFile}: Extension does not match '${extMatch}'`,
      );
    }
  }
}

renamingFiles();
