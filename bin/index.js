#!/usr/bin/env node
const inquirer = require("../lib/inquirer");
const files = require("../lib/files");

const run = async () => {
  const { path, component } = await inquirer.askComponentQuestions();
  if (path && component) {
    files.writeComponent({ componentName: component, pathName: path });
  }
};
run();
