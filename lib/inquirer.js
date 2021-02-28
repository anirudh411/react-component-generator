const inquirer = require("inquirer");
const files = require("./files");

module.exports = {
  askComponentQuestions: () => {
    const questions = [
      {
        name: "path",
        type: "input",
        message: "Enter component path:",
        validate: function (value) {
          if (value.length) {
            if (files.directoryExists(value)) {
              return "This path already exists.";
            }
            return true;
          } else {
            return "Please enter a valid path:";
          }
        },
      },
      {
        name: "component",
        type: "input",
        message: "Enter react component name:",
        validate: function (value) {
          if (value.length) {
            return true;
          } else {
            return "Please enter component name:";
          }
        },
      },
    ];
    return inquirer.prompt(questions);
  },
};
