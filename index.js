// import modules -> Employee subclasses, fs, inquirer, path, page-template, questions
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const inquirer = require('inquirer');
var path = require('path');

// use path module to define the path to the output directory ????????????
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

// create an array to hold all of our team members
let team = [];

// init function
function init() {
	// function to create a Manager
	function manager() { 
		return inquirer
		// prompt user with questions needed to satisfy the input for a manager object
		.prompt([
			{
				type: 'input',
				message: 'What is your full name?',
				name: 'name',
				},
				{
				type: 'input',
				message: 'What is your employee ID?',
				name: 'id',
				},
				{
				type: 'input',
				message: 'What is your email?',
				name: 'email',
				},
				{
				type: 'input',
				message: 'What is your office number?',
				name: 'officeNum',
				},
		])
		// .then statement ????????
		.then(new Manager(response.name, response.id, response.email, response.officeNum)) => {
			team.push(Manager);
		  });
			// create a new instance of the Manager class
			// push the new manager object to the team members array
	
			// call the function to create the rest of the team
		team();
	}
  
	// function to create the rest of the team
	function team() {
		// prompt user to select which type of employee they would like to add
		.prompt([
			{
				type: 'input',
				message: 'What type of employee would you like to add?',
				name: 'employee type',
				choices: ['Engineer', 'Intern', 'Finish Team'],
				},])

		.then(
			if (response.choices === 'Engineer'){
				engineer();
			} else if (response.choices === 'Intern'){
				intern();
			} else {
				output();
			}
		)
		// options include engineer, intern, or an option to not add any more team members
		// .then statement
			// if a type of employee was selected, call function to add that type of employee
			// if the other option was selected, call the function to create the output
	}
	
	// function to add an engineer
	function engineer() {
		.prompt([
			{
				type: 'input',
				message: 'What is your full name?',
				name: 'name',
				},
				{
				type: 'input',
				message: 'What is your employee ID?',
				name: 'id',
				},
				{
				type: 'input',
				message: 'What is your email?',
				name: 'email',
				},
				{
				type: 'input',
				message: 'What is your github profile link?',
				name: 'gitHub',
				},
		])

	};
		// same idea as create manager
  
	// function to add an intern
	function intern() {
		.prompt([
			{
				type: 'input',
				message: 'What is your full name?',
				name: 'name',
				},
				{
				type: 'input',
				message: 'What is your employee ID?',
				name: 'id',
				},
				{
				type: 'input',
				message: 'What is your email?',
				name: 'email',
				},
				{
				type: 'input',
				message: 'What is your school?',
				name: 'school',
				},
		])

	}
		// same idea as create manager

	// function to create the output
	function output() {

	}
		// call the function from page-template module and pass in the team members array and save to a data variable
		// use fs module to write the a file -> pass in the fs.write(outputPath, the data, and "utf-8")

  manager();

}


init()