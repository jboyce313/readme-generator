const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require("./utils/generateMarkdown.js");

const questions = [
  {
    type: "input",
    message: "What is your project title?",
    name: "title",
  },
  {
    type: "input",
    message: "Enter a description of your of project:",
    name: "description",
  },
  {
    type: "input",
    message: "Enter installation instructions for your project:",
    name: "installation",
  },
  {
    type: "input",
    message: "Enter usage information for your project:",
    name: "usage",
  },
  {
    type: "input",
    message: "Enter contribution guidelines for your project:",
    name: "contributing",
  },
  {
    type: "input",
    message: "Enter test instructions for your project:",
    name: "tests",
  },
  {
    type: "list",
    message: "Choose a license for your project",
    choices: [
      "None",
      "Apache License 2.0",
      "GNU General Public License v3.0",
      "MIT License",
      "Boost Software License 1.0",
      "Mozilla Public License 2.0",
      "The Unlicense",
    ],
    name: "license",
  },
  {
    type: "input",
    message: "Enter your github username:",
    name: "github",
  },
  {
    type: "input",
    message: "Enter your email address:",
    name: "email",
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, markdown.generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

function init() {
  inquirer.prompt(questions).then((response) => {
    writeToFile("README.md", response);
  });
}

init();

// add license options and badges
