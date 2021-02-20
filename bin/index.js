#!/usr/bin/env node
const inquirer = require("../lib/inquirer");
const files = require("../lib/files");

const fs = require("fs");
const run = async () => {
  const { path, component } = await inquirer.askCompoentQuestions();
  if (path && component) {
    files.writeComponent({componentName:component,path})
  }
};
run();
