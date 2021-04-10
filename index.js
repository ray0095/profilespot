// import modules -> Employee subclasses, fs, inquirer, path, page-template, questions
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const inquirer = require('inquirer');
var path = require('path');
const managerquestions = require('./src/manager-questions');
const engineerquestions = require('./src/engineer-question');
const internquestions = require('./src/intern-questions');
const options = require('./src/options');

// use path module to define the path to the output directory ????????????
// const OUTPUT_DIR = path.resolve(__dirname, "output")
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// create an array to hold all of our team members
let team = [];

// init function
function init() {
	// function to create a Manager
	function managerFunc() {
		// prompt user with questions needed to satisfy the input for a manager object 
		inquirer.prompt(managerquestions).then((managerInput) => {
			let manager = new Manager(
				managerInput.name, 
				managerInput.id, 
				managerInput.email, 
				managerInput.officeNum
				);
			team.push(manager);
			console.log(team);
			employee()
		});
		
	}

	function employee() {
		inquirer.prompt(options).then((answer) => {
		  if (answer.what == "Engineer") {
			engineerFunc();
		  } else if (answer.what == "Intern") {
			internFunc();
		  } else {
			
			console.log("create team")
		  }
		});
	  }

	function engineerFunc() {
		console.log("engineer sucess");
		inquirer.prompt(engineerquestions).then((engineerInput) => {
			let engineer = new Engineer(
				engineerInput.name, 
				engineerInput.id, 
				engineerInput.email, 
				engineerInput.gitHub
				);
			team.push(engineer);
			console.log(team);
			employee()
		});
	}

	function internFunc() {
		console.log("intern sucess");
		inquirer.prompt(internquestions).then((internInput) => {
			let intern = new Intern(
				internInput.name, 
				internInput.id, 
				internInput.email, 
				internInput.officeNum
				);
			team.push(intern);
			console.log(team);
			employee()
		});
	}

	function createTeam() {
		//generate html
	}

  managerFunc();

}


init()