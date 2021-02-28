const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

const currentDirectoryBase = path.basename(process.cwd());

module.exports = {
  getCurrentDirectoryBase: () => {
    return currentDirectoryBase;
  },

  writeComponent: async ({ pathName, componentName }) => {
    console.log(chalk.yellow("Creating path"));

    fs.mkdirSync(pathName, {
      recursive: true,
    });

    console.log(chalk.green("Created path"));

    fs.writeFileSync(
      `${pathName}/${componentName}.js`,
      `import * as React from 'react';\n\nconst ${componentName} = () => null\n\n export default ${componentName};`
    );

    fs.writeFileSync(
      `${pathName}/index.js`,
      `import ${componentName} from './${componentName}.js';\n\n export default ${componentName};`
    );

    console.log(`\n\n`, chalk.green("Generated files successufully"));
  },
  directoryExists: (filepathName) => {
    return fs.existsSync(filepathName);
  },
};
