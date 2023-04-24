const fs = require('fs');
const inquirer = require('inquirer')

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
      type: 'input',
      message: 'What languages do you know?',
      name: 'stack',
      validate: function (input) { 
        return input.length > 3
    }
    },
    {
      type: 'input',
      message: 'What is the title?',
      name: 'title',
      validate: function (input) { 
        return input.length > 3
      }
    },
    {
        type: 'input',
        message: 'How do you install?',
        name: 'install',
        validate: function (input) { 
          return input.length > 3
        }
      },
      {
        type: 'input',
        message: 'What is the Usage?',
        name: 'usage',
        validate: function (input) { 
          return input.length > 3
        }
      },
      {
        type: 'input',
        message: 'How to contribute?',
        name: 'contrib',
        validate: function (input) { 
          return input.length > 3
        }
      },
      {
        type: 'input',
        message: 'What tests did you run',
        name: 'tests',
        validate: function (input) { 
          return input.length > 3
        }
      },
  ])
  .then((data) => {
    console.log(data);
    const { name, stack, title, install, usage, contrib, tests } = data;
    const filename = `${data.title.trim().toLowerCase().split(' ').join('-')}-README.md`;
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
    fs.writeFile(filename, content, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
})
.catch((err) => {
    console.log(err);
});


