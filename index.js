// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
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
            type: 'list',
            message: 'What license are you using',
            name: 'license',
            choices: ['MIT', 'BSD', 'ISC', 'Apache', 'GNU', "other", "none"],
        },

        {
            type: 'input',
            message: 'Enter installation instructions.',
            name: 'installation',

        },

        {
            type: 'input',
            message: 'Enter the path for a screenshot of the project:',
            name: 'screenshot',
        },

        {
            type: 'input',
            message: 'Enter usage information here:',
            name: 'usageInfo',

        },

        {
            type: 'input',
            message: 'Enter contribution guidelines:',
            name: 'contributingnode',

        },

        {
            type: 'input',
            message: 'Enter Test instructions:',
            name: 'test',
        },

        {
            type: 'input',
            message: 'What is your GitHub Username?',
            name: 'github',
        },

        {
        
            type: 'input',
            message: 'Enter contact info for questions:',
            name: 'email',
        },
    ]
// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log(' README generated!');
    });
}

// TODO: Create a function to initialize app
function init() { 
    inquirer
    .prompt(questions).then((answers) => {
        const data =generateMarkdown(answers);
        writeToFile('./README.md', data)
    })
}

// Function call to initialize app
init();
