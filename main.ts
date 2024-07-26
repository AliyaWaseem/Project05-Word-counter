#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

//Title Description
console.log(chalk.bold.blueBright("\n \t\t CLI-Word Counter Application"));
console.log("*".repeat(50));

// Prompt for Entering Sentence
let enterSentence = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentence:",
    }
]);

// Sentence trim and split it into words based on spaces
let Words = enterSentence.sentence.trim().split(" ");

// Analysis of user input sentences
console.log("*".repeat(50));
console.log(chalk.bold("- Sentence words:"));
console.log(Words);
console.log(chalk.bold(`\n - Words Count: ${chalk.bold.greenBright(Words.length)}`));
console.log("+".repeat(50));





