# TheETeam

## Decription

TheETeam is a project that wll automatically generate a webpage for a manager wanting to have a list of his employees information.  When you run the application it will ask you multiple questions, such as your ID#, employee title, name, id, email address, GitHub and school.  Based on the questions, your answers will be written generate a webpage. Email address and Github are written as shortcuts, so the manager can easily click on them and it will direct the program to the site or send an email. 

Here is the link to my website.  Feel free to share with your friends and family.

https://github.com/Emil1577/TheETeam

## Installation Instructions

First you need to clone my repository. Go to https://github.com/Emil1577/GitReadMeGo.  Then run your terminal on the folder of the cloned repository.  You'll also need to install the npm by writing "npm install'.  This will generate "node_modules" folder.  You also need to run "npm init", this will then create "package.json". After which is you are ready to use the application.

## Table Of Contents

1. [Webpage Screenshot](#webpage-screenshots)
2. [Code Snippets](#code-snippets)
3. [How to use:](#how-to-use)
4. [Test Instruction](#test-instruction)
5. [My Contact Information](#my-contact-information)

## Webpage Screenshots:

![Screen Shot 2023-01-27 at 1 17 23 AM](https://user-images.githubusercontent.com/119825000/215050845-2894856e-b835-417a-b291-685c3254f222.png)

![Screen Shot 2023-01-27 at 1 10 38 AM](https://user-images.githubusercontent.com/119825000/215050561-be0db8df-31ad-4dba-b321-8e6cb529c453.png)

## Code Snippets: 

### Here are some of the const used and sample questionaires.

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



    
### Function to execute the inquire questions prompt.

      function execMgrQuestions() {
          inquirer
              .prompt(mgrQuestions)

              .then((mgrData) => {

                  const mgrArr = new Manager(mgrData.name, mgrData.id, mgrData.email, mgrData.office);

                  employeeArray.push(mgrArr);

                  execAddEmployee()
              })
      }


### Function for multiple choiecs if the manager wish to add employees or not, and what position of the employee.

      function execAddEmployee() {
          inquirer
              .prompt(yesNoaddEmpQuestions)

              .then((yesNoData) => {

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

              .then((addEmpData) => {

                  if (addEmpData.addPosition === "Intern") {

                      execInternQuestions(internQuestions);
                  }
                  else { execEngrQuestions() }

              })
      }

## Function to create the HTML.

      fs.writeFile('./dist/index.html', html, (err) =>
          err ? console.error(err) : console.log('Success!'))

      if (internArray.length > 0) {
          for (let i = 0; i < internArray.length; i++) {

              var internHtml =
                  `
                          <div class="box2 col-12 col-md-6 col-lg-4">
                          <p id="title">Intern
                          <p id ="name"  > ${internArray[i].name}</p>
                          <p> ID#: ${internArray[i].id}</p>
                          <a href="mailto:${internArray[i].email}"> ${internArray[i].email}</a>
                          <p></p> <p> School: ${internArray[i].school}</p>
                      </div>`


              fs.appendFile('./dist/index.html', internHtml, (err) =>
                  err ? console.error(err) : console.log('Success!'))
          }
      }
      
## How to use:

After completing the installation instruction, on the same terminal just type in "node index.js" then enter. The terminal will then ask you multiple questions.  After completing each questions, it will then create a new file called "index.html". This is located in the "dist" folder.  This file is a webpage that will display all the information the manager wrote.

Here's a short video on how to use. [https://drive.google.com/file/d/14vYBx3EbTVbQUL8TV-Yj-ptR9qHmb5Jk/view](https://drive.google.com/file/d/1t9c-4FKC9rAO8eRAgIdvzT8g-6CVMgik/view)


## My Contact Information:

* [My LinkedIn](https://www.linkedin.com/in/emil-ronquillo-76832a32/)
* [My Github](https://github.com/Emil1577)
* [My Email](mailto:emilronquillo@gmail.com)

## Thank you for stopping by. 

Special thanks to all my Instructor, tutors and my colleagues
