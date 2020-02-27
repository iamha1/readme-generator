const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")


const questions = [
    {
    type: "input",
    message: "What is the name of the project?",
    name: "title"
    },
    {
    type: "input",
    message: "Please describe the project?",
    name: "describe"
    },
    {
    type: "list",
    message: "What is the content of the project?",
    name: "table of content"
    },
    {
    type: "input",
    message: "Please describe your project?",
    name: "describe"
    },
    {
    type: "input",
    message: "Is there any installation needed?",
    name: "installation"
    },
    {
    type: "input",
    message: "Please describe the project?",
    name: "describe"
    },
    {
    type: "input",
    message: "Please explain how to use the project?",
    name: "usage"
    },
    {
    type: "input",
    message: "Is there lisence for the project?",
    name: "lisence"
    },
    {
    type: "input",
    message: "Who can contribute to the project?",
    name: "contribution"
    },
    {
    type: "input",
    message: "How was the project tested?",
    name: "tests"
    },
    {
    type: "list",
    message: "Are there questions to the project?",
    name: "questions"
    },
    {
    type: "input",
    message: "Please give a link to the project?",
    name: "link to readme-generator"
    },
];

function writeToFile(fileName, data) {
    fs.appendFile("genReadMe.md", `This is my good read me. Project name: ${variable} \n Description ${projectdescription}`)

    "Title: " + title + "\n Description: " + descriptionVar + 
}

function init() {

    inquirer
    .prompt(questions);
}

init();
