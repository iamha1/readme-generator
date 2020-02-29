const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")
const getUser = require("./utils/api")

const questions = [
    {
        type: "input",
        message: "What is the project's title?",
        name: "title"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "Is there any installation needed?",
        name: "installation"
    },
    {
        type: "input",
        message: "Please describe the project?",
        name: "description"
    },
    {
        type: "input",
        message: "What is the usage of the project?",
        name: "usage"
    },
    {
        type: "input",
        message: "What is the lisence of the project?",
        name: "lisence"
    },
    {
        type: "input",
        message: "Who can contribute to the project?",
        name: "contributing"
    },
    {
        type: "input",
        message: "How was the project tested?",
        name: "test"
    },
    {
        type: "input",
        message: " Please add a badge url",
        name: "badge"
    }
];

function init() {

    inquirer
        .prompt(questions)
        .then(async function (answers) {
            // console.log(answers);

            var git = await getUser(answers.username)
            fs.writeFile("genREADME.md", generateMarkdown(answers, git), err => {
                if (err) console.log(err)
            })
        }
        )
}

init();


