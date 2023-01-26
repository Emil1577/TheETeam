const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const employeeArray = [];

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

]

const addMoreEmpQuestions = [
    {
        type: 'list',
        message: 'Do you want to add another employee?',
        name: 'addPosition',
        choices: ['Engineer', 'Intern', 'No, finish my webpage'],
    },

]


// Prompt function for question and answer

function execMgrQuestions() {
    inquirer
        .prompt(mgrQuestions)

        //generating data based on the answers/response
        .then((mgrData) => {

            console.log(mgrData);

            const mgrArr = new Engineer(mgrData.name, mgrData.id, mgrData.email, mgrData.office);

            employeeArray.push(mgrArr);

            execAddQuestions()
        })
}

function execEngrQuestions() {
    inquirer
        .prompt(engrQuestions)

        //generating data based on the answers/response
        .then((engrData) => {

            console.log(engrData);

            const engrArr = new Manager(engrData.name, engrData.id, engrData.email, engrData.office);

            employeeArray.push(engrArr);

            execAddQuestions()
        })
}

function execInternQuestions() {
    inquirer
        .prompt(internQuestions)

        //generating data based on the answers/response
        .then((internData) => {

            console.log(internData);

            const internArr = new Manager(internData.name, internData.id, internData.email, internData.office);

            employeeArray.push(internArr);

            execAddQuestions()
        })
}

function execAddQuestions() {
    inquirer
        .prompt(addMoreEmpQuestions)

        //generating data based on the answers/response
        .then((execAddData) => {


            if (execAddData.choices = 'Engineer') { 
                execEngrQuestions();
            }
            else if (execAddData.choices = 'No, finish my webpage') { execInternQuestions() }

            else ( renderHtml());


        }
)
}
        



execMgrQuestions()


