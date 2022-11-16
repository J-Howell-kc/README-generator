// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your GitHub Username?',
            name: 'name',
        }
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?',
        },
        {
            type: 'input',
            message: 'What is your project description?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Enter installation instructions.',
            name: 'installationInstructions',

        },
        {
            type: 'input',
            message: 'Enter usage information here:',
            name: 'usageInfo',

        },
        {
            type: 'input',
            message: 'Enter contribution guidelines:',
            name: 'contributionGuidelines',

        },
        {
            type: 'input',
            message: 'Enter Test instructions:',
            name: 'test',
        }
        {
            type: 'input',
            message: 'Enter contact info for questions:',
            name: 'questions',
        }
    ])
// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
