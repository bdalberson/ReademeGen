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
        const filename = `README_${data.name.toLowerCase().split(' ').join('')}.md`;
    
        fs.writeFile(filename, `
    ${name}
    ${title}
    | Technology Used         | 
    ${stack}
    ## Description 
    \`\`\`  
    \`\`\`
    ## Usage 
    Enter a city you want to go to and click the search button to begin. If it's an actual city, it will return 5-day forecast for the selected city and the search will be saved as a button for future use.
    ## Learning Points
    ## Usage 
    \`\`\`     ${usage}
    ## install
    ${install}
    ## Contrabutions 
    ${contrib}

    ## Tests
    ${tests}
    ![](https://img.shields.io/badge/%3CLicense%3E-%3CMIT%3E-%3CBLUE%3E)
    `, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    }, (err) => {
        if (err) throw err;
        console.log('The file could not be saved!');
    });


