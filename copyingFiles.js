import { glob } from "glob";
import fs from "fs-extra";
import path from "path";

async function copyFiles() {
  const [srcRoot, dstRoot] = process.argv.slice(2);

  if (!srcRoot || !dstRoot) {
    console.error("Usage: node copyingFiles.js <source> <destination>");
    //enables the program to stop running
    process.exit(1);
  }
  try {
    const files = await glob(`${srcRoot}/**/*.html*`);

    for (const srcName of files) {
      const dstName = srcName.replace(srcRoot, dstRoot);
      const dstDir = path.dirname(dstName);

      //ensure the directory exists then copy
      await fs.ensureDir(dstDir);
      await fs.copy(srcName, dstName);

      console.log(`Copied ${srcName} -> ${dstName}`);
    }
  } catch (err) {
    console.error(err);
  }
}

copyFiles();
