// glob module provides helpers to match file paths
// in v13 the main `glob` export is an async function that returns a promise
const { glob } = require("glob");

(async () => {
  try {
    // the second argument is an options object; you can pass
    // `ignore` with a glob pattern or array of patterns to exclude
    // matching paths.  here we skip all `.js` files:
    const files = await glob("**/*.*", { ignore: "*.js" });
    for (const file of files) {
      console.log(file);
    }
  } catch (err) {
    console.error(err);
  }
})();

(async () => {
  try {
    const srcDir = process.argv[2];
    const directories = await glob(`${srcDir}/**/*.*`, { ignore: "*.html"});
      for(const directory of directories) {
        console.log(directory);
      }
    
  } catch (err) {
    console.error(err);
  }
})();