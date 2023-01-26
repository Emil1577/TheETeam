const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./__tests__/Employee.test');
const Manager = require ('./__tests__/Manager.test');
const Engineer = require ('./__tests__/Engineer.test');
const Intern = require ('./__tests__/Intern.test');


const employeeArray =[];


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

const engrQuestions = [

    {
        type: 'input',
        message: 'What is your Engineer name?',
        name: 'engrName'
    },
    {
        type: 'input',
        message: 'What is your Engineer ID number?',
        name: 'engrId'
    },
    {
        type: 'input',
        message: 'What is your Engineer email address?',
        name: 'engrEmail'
    },
    {
        type: 'input',
        message: 'What is your Engineer office number?',
        name: 'engrOffice'
    },

    {
        type: 'input',
        message: 'What is your Engineer Github username?',
        name: 'engrGithub'
    },
    {
        type: 'list',
        message: 'Do you want to add another employee?',
        name: 'addPosition',
        choices: ['Engineer', 'Intern', 'No, finish my webpage'],
    },

]

const internQuestions = [

    {
        type: 'input',
        message: 'What is your Intern name?',
        name: 'internName'
    },
    {
        type: 'input',
        message: 'What is your Intern  ID number?',
        name: 'internId'
    },
    {
        type: 'input',
        message: 'What is your Intern  email address?',
        name: 'internEmail'
    },
    {
        type: 'input',
        message: 'What is your Intern school?',
        name: 'internGithub'
    },
    {
        type: 'list',
        message: 'Do you want to add another employee?',
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

        let mgrArr = new Manager(mgrQuestions.name, mgrQuestions.id, mgrQuestions.email, mgrQuestions.office);

        console.log(mgrData);
        employeeArray.push(mgrArr)  ;
        console.log(employeeArray);


    })


