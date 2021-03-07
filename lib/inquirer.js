const inquirer = require("inquirer");
const files = require("./files");
const chalk = require("chalk");

module.exports = {
  askComponentQuestions: () => {
    const questions = [
      {
        name: "path",
        type: "input",
        message: "Enter component path (Eg. component/Card) :",
        validate: function (value) {
          if (value.length) {
            if (files.directoryExists(value)) {
              return chalk.red("This path already exists.");
            }
            return true;
          } else {
            return chalk.yellow("Please enter a valid path");
          }
        },
      },
      {
        name: "component",
        type: "input",
        message: "Enter react component name (Eg. Card) :",
        validate: function (value) {
          if (value.length) {
            return true;
          } else {
            return "Please enter component name:";
          }
        },
      },
      {
        name: "includeCss",
        type: "confirm",
        message: "Add css file?",
      },
      {
        name: "cssFile",
        type: "input",
        message: "Enter Css File name with extensiton (Eg. style.scss)",
        when: (answers) => answers.includeCss,
        validate: function (value) {
          if (value.length) {
            return true;
          } else {
            return "Please enter File  name:";
          }
        },
      },
    ];
    return inquirer.prompt(questions);
  },
};
