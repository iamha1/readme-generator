const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")
const api = require("./utils/api")


const questions = [
    {
    type: "input",
    message: "What is your GitHub username?",
    name: "username"
    }
    // },
    // {
    // type: "input",
    // message: "Please describe the project?",
    // name: "description"
    // },
    // {
    // type: "input",
    // message: "Is there any installation needed?",
    // name: "installation"
    // },
    // {
    // type: "input",
    // message: "Please explain how to use the project?",
    // name: "usage"
    // },
    // {
    // type: "input",
    // message: "Is there lisence for the project?",
    // name: "lisence"
    // },
    // {
    // type: "input",
    // message: "Who can contribute to the project?",
    // name: "contribution"
    // },
    // {
    // type: "input",
    // message: "How was the project tested?",
    // name: "tests"
    // },
    //    //github username
    // {
    // type: "input",
    // message: "Please give a link to the project?",
    // name: "readme-generator"
    // },
];


function writeToFile(fileName, data) {
    fs.writeFile
console.log(data);    
}

function init() {

    inquirer
    .prompt(questions).then(function(answers) {
        // console.log(answers);

        api
        .getUser(answers.username) 
        .then(({data})=>{
          writeToFile("README.md", generateMarkdown(data))
          
        })

    
    });
}

init();
