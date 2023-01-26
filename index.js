const fs = require('fs')
const inquirer = require('inquirer')

const mgrQuestions = [
    {
        type: 'input',
        message: 'Hello Manager what is your name?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'What is your ID number?',
        name: 'id'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is your office number?',
        name: 'office'
    },

    {
        type: 'list',
        message: 'Do you want to add any of the following employee?',
        name: 'addPosition',
        choices: ['Engineer', 'Intern', 'No, finish my webpage'],
    },
]


// Prompt function for question and answer
inquirer
    .prompt(mgrQuestions)

    //generating data based on the answers/response
    .then((mgrData) => {

        console.log(mgrData);

    })
