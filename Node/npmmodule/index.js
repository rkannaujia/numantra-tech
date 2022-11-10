// npm init -y => in will create package.json file
// npm install chalk validator => installed two package chalk & validator
import chalk from 'chalk';
import validator from 'validator';


const res = validator.isEmail("Rahul@gmail.com");
console.log(res);
console.log(res ? chalk.green("email is valid") : chalk.red("email is not valid"));