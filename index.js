const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const DIST_DIR = path.resolve(__dirname, "dist");
const htmlPath = path.join(DIST_DIR, "index.html");
const generateTeam = require("./src/template.js")

teamArray = [];



function runApp () {

  function createTeam () {
    inquirer.prompt([{
      type: "list",
      message: "Choose an employee to add to your team.",
      name: "addEmployeePrompt",
      choices: ["Manager", "Engineer", "Intern", "No more team members are needed."]
    }]).then(function (userInput) {
      switch(userInput.addEmployeePrompt) {
        case "Manager":
          addManager();
          break;
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;

        default:
          htmlBuilder();
      }
    })
  }
// OOP Functions

function addManager() {
  inquirer.prompt ([
    
    {
      type: "input",
      name: "managerName",
      message: "Enter the manager's full name:"
    },

    {
      type: "input",
      name: "managerId",
      message: "Enter the manager's employee ID number:"
    },

    {
      type: "input",
      name: "managerEmail",
      message: "Enter the manager's email address:"
    },

    {
      type: "input",
      name: "managerOfficeNumber",
      message: "Enter the manager's office number:"
    }

  ]).then(answers => {
    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
    teamArray.push(manager);
    createTeam();
  });

}


function addEngineer() {
    inquirer.prompt([
      
      {
        type: "input",
        name: "engineerName",
        message: "Enter the engineer's full name:"
      },

      {
        type: "input",
        name: "engineerId",
        message: "Enter the engineer's employee ID number:" 
      },

      {
        type: "input",
        name: "engineerEmail",
        message: "Enter the engineer's email address:"
      },

      {
        type: "input",
        name: "engineerGithub",
        message: "Enter the engineer's GitHub username:"
      }

    ]).then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
      teamArray.push(engineer);
      createTeam();
    });

  }

  function addIntern() {
    inquirer.prompt([
      
      {
        type: "input",
        name: "internName",
        message: "Enter the intern's name:"
      },

      {
        type: "input",
        name: "internId",
        message: "Enter the intern's employee ID number:" 
      },

      {
        type: "input",
        name: "internEmail",
        message: "Enter the intern's email address:"
      },

      {
        type: "input",
        name: "internSchool",
        message: "Enter the name of the interns school/educational institution:"
      }

    ]).then(answers => {
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      teamArray.push(intern);
      createTeam();
    });

  }

  // return to menu with option to add another team member create team

  // Would you like to add a team member?
  // Yes || No
  // If Yes --> Then select an employee role for your new team member: Manager, Engineer, Intern
  // If No --> Create Team


function htmlBuilder () {
    console.log("Your team has been created!")

    fs.writeFileSync(htmlPath, generateTeam(teamArray), "UTF-8")

}

createTeam();

}

runApp();