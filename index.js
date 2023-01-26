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
        name:'name'
    },
    {
        type: 'input',
        message: 'What is your Engineer ID number?',
        name: 'id'
    },
    {
        type: 'input',
        message: 'What is your Engineer email address?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is your Engineer office number?',
        name: 'office'
    },

    {
        type: 'input',
        message: 'What is your Engineer Github username?',
        name: 'github'
    },

]

const internQuestions = [

    {
        type: 'input',
        message: 'What is your Intern name?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'What is your Intern  ID number?',
        name: 'id'
    },
    {
        type: 'input',
        message: 'What is your Intern  email address?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is your Intern school?',
        name: 'school'
    },

]

const yesNoaddEmpQuestions = [

    {
        type: 'list',
        message: 'Do you want to add another employee?',
        name: 'addEmp',
        choices: ['yes', 'no'],
    },

]


const execAddQuestions = [

    {
        type: 'list',
        message: 'Do you want to add another employee?',
        name: 'addPosition',
        choices: ['Engineer', 'Intern'],
    },

]

// Prompt function for question and answer

function execMgrQuestions() {
    inquirer
        .prompt(mgrQuestions)

        //generating data based on the answers/response
        .then((mgrData) => {

            console.log(mgrData.name);

            const mgrArr = new Manager(mgrData.name, mgrData.id, mgrData.email, mgrData.office);

            employeeArray.push(mgrArr);

            console.log(mgrArr);
            console.log(employeeArray);

            execAddEmployee()
        })
}

function execEngrQuestions() {
    inquirer
        .prompt(engrQuestions)

        //generating data based on the answers/response
        .then((engrData) => {

            console.log(engrData);

            const engrArr = new Engineer (engrData.name, engrData.id, engrData.email, engrData.office);

            employeeArray.push(engrArr);

console.log(engrData.Name)
    


            console.log(JSON.stringify(employeeArray));

            execAddEmployee()
        })
}

function execInternQuestions() {
    inquirer
        .prompt(internQuestions)

        //generating data based on the answers/response
        .then((internData) => {

            console.log(internData);

            const internArr = new Intern (internData.name, internData.id, internData.email, internData.school);

            employeeArray.push(internArr);

            execAddEmployee()
        })
}

function execAddEmployee() {
    inquirer
        .prompt(yesNoaddEmpQuestions)

        //generating data based on the answers/response
        .then((yesNoData) => {

console.log(yesNoData.addEmp)
            if (yesNoData.addEmp=== 'yes') {
                execAddEmpQuestions()
            }

            else {
                renderHtml();

            }
        }
        )
}


function execAddEmpQuestions() {
    inquirer
        .prompt(execAddQuestions)

        //generating data based on the answers/response
        .then((execAddData) => {


            if (execAddData.addPosition === "Intern") {

                execInternQuestions(internQuestions);
            }
            else { execEngrQuestions() }

        })
}
function renderHtml(){
console.log(employeeArray );

fs.writeFile('userReadMe.JSON', JSON.stringify(employeeArray), (err) =>
err ? console.error(err) : console.log('Success!')
);


}

execMgrQuestions()


