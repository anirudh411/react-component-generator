const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const ejs = require("ejs");
const currentDirectoryBase = path.basename(process.cwd());
const log = console.log;

module.exports = {
  getCurrentDirectoryBase: () => {
    return currentDirectoryBase;
  },

  writeComponent: async ({ pathName, componentName, includeCss, cssFile }) => {
    const componentContent = fs.readFileSync(
      path.resolve(__dirname, "../template/component.ejs"),
      "utf8"
    );
    const componentPath = `${pathName}/${componentName}.js`;
    const indexContent = fs.readFileSync(
      path.resolve(__dirname, "../template/index.ejs"),
      "utf8"
    );
    const indexPath = `${pathName}/index.js`;

    const componentFileContent = ejs.render(componentContent, {
      componentName,
	  includeCss,
	  cssFile
    });
    const indexFileContent = ejs.render(indexContent, { componentName });

    log(chalk.yellow("Creating path relative to " + currentDirectoryBase));

    fs.mkdirSync(pathName, {
      recursive: true,
    });

    log(chalk.green("✔ Successfully created path."));

    if (includeCss) {
      log(chalk.yellow("Creating css file"));

      fs.writeFileSync(`${pathName}/${cssFile}`, "");
    }

    log(chalk.yellow("Creating component " + componentName));

    fs.writeFileSync(componentPath, componentFileContent);

    fs.writeFileSync(indexPath, indexFileContent);

    log(chalk.green("✔ All files generated successfully."));
  },
  directoryExists: (filepathName) => {
    return fs.existsSync(filepathName);
  },
};
