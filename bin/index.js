const inquirer = require("../lib/inquirer");
const fs = require("fs");
const run = async () => {
  const { path, component } = await inquirer.askCompoentQuestions();
  if (path && component) {
    fs.mkdirSync(path);
    fs.writeFileSync(
      `${path}/${component}.js`,
      `import * as React from 'react';\n\nconst ${component} = () => null\n\n export default ${component}`
    );
    fs.writeFileSync(
      `${path}/index.js`,
      `import ${component} from './${component}.js';\n\n export default ${component}`
    );
  }
};
run();
