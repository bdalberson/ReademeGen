const fs = require('fs');     //This is need to write to file
const inquirer = require('inquirer') //this is npm package for beautiful prompts

inquirer
  .prompt([     //starts the inquier prompts which are a series of questions you can store the input as variables
    {
      type: 'input',
      name: 'name',      //grabs the name and stores as name
      message: 'What is your name?',
      validate: function (input) { 
        return input.length > 3   //makes sure adequete length
      }
    },
    {
      type: 'input',
      message: 'What languages do you know?',
      name: 'stack',    //grabs the languages input
      validate: function (input) { 
        return input.length > 3
    }
    },
    {
      type: 'input',
      message: 'What is the title?', //grabs the title input
      name: 'title',
      validate: function (input) { 
        return input.length > 3
      }
    },
    {
        type: 'input',
        message: 'How do you install?',
        name: 'install',
        validate: function (input) {  //grabs the install input
          return input.length > 3
        }
      },
      {
        type: 'input',
        message: 'What is the Usage?',
        name: 'usage',   //grabs the usage input
        validate: function (input) { 
          return input.length > 3
        }
      },
      {
        type: 'input',
        message: 'How to contribute?',
        name: 'contrib',
        validate: function (input) {  //grabs the contributions input
          return input.length > 3
        }
      },
      {
        type: 'input',
        message: 'What tests did you run', //grabs the tests input
        name: 'tests',
        validate: function (input) {  
          return input.length > 3
        }
      },
  ])
  .then((data) => {
    console.log(data);   //takes all the inquirer inputs and makes them variables that can be called with string literals
    const { name, stack, title, install, usage, contrib, tests } = data;
    const filename = `${data.title.trim().toLowerCase().split(' ').join('-')}-README.md`;   //writes to the file the input and the title as the filename
    const content = 
    `# ${data.title}
    ## Table of Contents
    - [Languages](#languages)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    ## Languages
    ${data.stack}
    ## Installation
    ${data.install}
    ## Usage
    ${data.usage}
    ## Contributing
    ${data.contrib}
    ## Tests
    ${data.tests}
    ## Licence
    [![Licence](https://img.shields.io/badge/%3CLicense%3E-%3CMIT%3E-%3CBLUE%3E)](./LICENSE) 
    `
    //above is the README file and the badge
  
    fs.writeFile(filename, content, (err) => { //the file writing with the callback function in case of error
        if (err) throw err;  
        console.log('The file has been saved!');
    });
})
.catch((err) => {
    console.log(err);
});


