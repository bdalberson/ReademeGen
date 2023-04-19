const fs = require('fs');
const inquirer = require('inquirer')


title = process.argv[2]
desc = process.argv[3]
toC = process.argv[4]
install = process.argv[4]
Usage = process.argv[6]
contrib = process.argv[7]
tests = process.argv[8]
questions = process.argv[9]
license = process.argv[10]
username = process.argv[11]
email = process.argv[12]



inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
      validate: function (input) { 
        return input.length > 3
      }
    },
    {
      type: 'checkbox',
      message: 'What languages do you know?',
      name: 'stack',
      choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    },
    {
      type: 'list',
      message: 'What is your preferred method of communication?',
      name: 'contact',
      choices: ['email', 'phone', 'telekinesis'],
    },
  ])
  .then((data) => {
    console.log(data);
    const filename = `${"README_" + data.name.toLowerCase().split(' ').join('')}.md`;
    //Farley Wittles 
    //farleywittles.json
    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });

// fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) => {
//     // Ternary operator takes in a condition followed by a question mark (?)
//     // then an expression to execute if the condition is truthy followed by a colon (:)
//     // and finally the expression to execute if the condition is falsy.
//     // This operator is frequently used as a shortcut for the if statement.
//     err ? console.error(err) : console.log('Commit logged!')
  
//       fs.readFile('log.txt','utf8', (error, data) => {
//         error ? console.error(error) : console.log(data)
//       });
//   });