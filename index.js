// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Give a description of your project.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What was the motivation, or reason, for this project?',
        name: 'motivation'
    },
    {  
        type: 'input',
        message: 'How is this project installed?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Who made this project?',
        name: 'contributors'
    },
    {
        type: 'input',
        message: 'Enter GitHub username',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Enter email address ',
        name: 'email'
    },
    { 
        type: 'list',
        message: 'Select license',
        name: 'license',
        choices: ['none', 'Apache', 'GNU', 'MIT']
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`${fileName} was created successfully.`);
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const readme = generateMarkdown(answers);
            writeToFile('README.md', readme);
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
}

// Function call to initialize app
init();

