// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'Please enter the title of your project.'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide any installation instructions.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide any usage information .'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidlines.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide any test instructions.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for your application',
        choices: ['MIT', 'Apache 2.0', 'GNU GPLv3', 'ISC', 'None'],
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Please enter your GitHub username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address:'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>{
        if (err) {
            console.err(err);
        } else {
            console.log(`${fileName} file successfully generated.`);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        const readmeContent = generateMarkdown(answers);
        writeToFile('README.md', readmeContent);
    });
}

// Function call to initialize app
init();
