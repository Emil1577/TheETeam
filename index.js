const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const employeeArray = [];
const internArray = [];
const engrArray = [];

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
        name: 'name'
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


const addEmpQuestions = [

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

            // console.log(mgrData.name);

            const mgrArr = new Manager(mgrData.name, mgrData.id, mgrData.email, mgrData.office);

            employeeArray.push(mgrArr);

            //  console.log(mgrArr);
            // console.log(employeeArray);

            execAddEmployee()
        })
}

function execEngrQuestions() {
    inquirer
        .prompt(engrQuestions)

        //generating data based on the answers/response
        .then((engrData) => {

            //   console.log(engrData);

            const engrArr = new Engineer(engrData.name, engrData.id, engrData.email, engrData.github);

            engrArray.push(engrArr);

            // console.log(engrData.Name)

            //  console.log(JSON.stringify(employeeArray));

            execAddEmployee()
        })
}

function execInternQuestions() {
    inquirer
        .prompt(internQuestions)

        //generating data based on the answers/response
        .then((internData) => {

            //  console.log(internData);

            const internArr = new Intern(internData.name, internData.id, internData.email, internData.school);

            internArray.push(internArr);

            execAddEmployee()
        })
}

function execAddEmployee() {
    inquirer
        .prompt(yesNoaddEmpQuestions)

        //generating data based on the answers/response
        .then((yesNoData) => {

            //  console.log(yesNoData.addEmp)

            if (yesNoData.addEmp === 'yes') {
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
        .prompt(addEmpQuestions)

        //generating data based on the answers/response
        .then((addEmpData) => {


            if (addEmpData.addPosition === "Intern") {

                execInternQuestions(internQuestions);
            }
            else { execEngrQuestions() }

        })
}
function renderHtml() {

    var html = `
<!DOCTYPE html>
<html lang="en" class="vh-100">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        crossorigin="anonymous" />
    <link rel="stylesheet" href="./css/main.css" />
</head>

<body>

    <header>
        <div class="col-12 col-md-8 col-lg-12 font-white bg-dark text-light ">
            <h1>My Team</h1>

        </div>

    </header>

    <main class="section-container d-flex align-items-center">


        <main class="col-12 col-md-12 col-lg-12">
            <div class="container text-center bg-light py-2 rounded-2">

                    <div id="list"></div>


                    <div class="row ">
                        <div  class="box col-10 col-md-6 col-lg-2">
                        <p id="Manager">Manager
                            <p> ${employeeArray[0].name}</p>
                            <p> ${employeeArray[0].id}</p>
                            <p> ${employeeArray[0].email}</p>
                            <p> ${employeeArray[0].office}</p>
                        </div>`

    fs.writeFile('./dist/index.html', html, (err) =>
        err ? console.error(err) : console.log('Success!'))

    if (internArray.length > 0) {
        for (let i = 0; i < internArray.length; i++) {

            var internHtml =
`
                        <div class="box col-10 col-md-6 col-lg-2">
                        <p id="Intern">Intern
                        <p> ${internArray[0].name}</p>
                        <p> ${internArray[0].id}</p>
                        <p> ${internArray[0].email}</p>
                        <p> ${internArray[0].school}</p>
                            </div>`

       
        fs.appendFile('./dist/index.html', internHtml, (err) =>
            err ? console.error(err) : console.log('Success!')) }


    }

    if (engrArray.length > 0) {
        for (let i = 0; i < engrArray.length; i++) {

            var engrHtml =
                `
                <div class="box col-10 col-md-6 col-lg-2">
                  <p id="Engineer">Engineer
                  <p> ${engrArray[0].name}</p>
                  <p> ${engrArray[0].id}</p>
                  <p> ${engrArray[0].email}</p>
                  <p> ${engrArray[0].github}</p>
                   </div>`
                                                  ;

      
        fs.appendFile('./dist/index.html', engrHtml, (err) =>
            err ? console.error(err) : console.log('Success!'))  }


    }



console.log(engrArray)
}


execMgrQuestions()


