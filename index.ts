#! /usr/bin/env node


import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {message: "Enter first number", type:"number", name: "FirstNumber"},
    {message : "Enter second number", type:"number", name: "SecondNumber"},
    { message: " select one of the operators to perform operation",
    type:"list",
    name:"operator",
    choices:["addition", "subtraction", "multiplication", "divisions"],
    },
]);
 
    if (answer.operator==="addition")  {
            console.log(answer.FirstNumber + answer.SecondNumber);  }
        else if (answer.operator==="subtraction") {
            console.log(answer.FirstNumber - answer.SecondNumber); 
        } else if (answer.operator==="multiplication") {
            console.log(answer.FirstNumber * answer.SecondNumber);
        } else if (answer.operator==="divisions") {
            console.log(answer.FirstNumber / answer.SecondNumber);
        } else { console.log ("enter valid value")}