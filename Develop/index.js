// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown.js');
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
            choices: ['MIT', 'BSD', 'ISC', 'Apache', 'GNU', "other", "none"], 
        },

        {
            type: 'list',
            message: 'What license are you using',
            name: 'licenseType',
        }

        {
            type: 'input',
            message: 'Enter installation instructions.',
            name: 'installationInstructions',

        },

        {
            type: 'input',
            message: 'Enter the path for a screenshot of the project:',
            name: 'screenShot',
        }

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
            message: 'What is your GitHub Username?',
            name: 'name',
        }

        {
        
            type: 'input',
            message: 'Enter contact info for questions:',
            name: 'questions',
        }
    ])
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
        const data = markdown(answers);
        writeToFile('./readme/README.md', data)
    })
}

// Function call to initialize app
init();
