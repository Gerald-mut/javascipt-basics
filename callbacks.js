// loads the library filesystem('fs') and assigns its content to fs
// we can then use fs.component to refer to things in the library
//  the fs library contains functions to create directories, read or delete files
import fs from "fs";

//defines a callback function
const listContents = (err, files) => {
  console.log("running callback function");
  if (err) {
    console.error(err);
  } else {
    for (const name of files) {
      console.log(name);
    }
  }
};

// process.argv is an array that stores command line arguments
// the third entry (index 2) should be the directory to list
const srcDir = process.argv[2];

// if the user didn't pass an argument, show usage and exit gracefully
if (!srcDir) {
  console.error("Usage: node callbacks.js <directory>");
  process.exit(1);
}

// calls fsreaddir starts the asynchronous directory reading operation, first arg is the directory path second arg is the call back function
fs.readdir(srcDir, listContents);
