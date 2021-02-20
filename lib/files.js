const fs = require("fs");
const path = require("path");

module.exports = {
  getCurrentDirectoryBase: () => {
    return path.basename(process.cwd());
  },

  writeComponent: async ({ path, componentName }) => {
    fs.mkdirSync(path);
    fs.writeFileSync(
      `${path}/${componentName}.js`,
      `import * as React from 'react';\n\nconst ${componentName} = () => null\n\n export default ${componentName}`
    );
    fs.writeFileSync(
      `${path}/index.js`,
      `import ${componentName} from './${componentName}.js';\n\n export default ${componentName}`
    );
  },
  directoryExists: (filePath) => {
    return fs.existsSync(filePath);
  },
};
