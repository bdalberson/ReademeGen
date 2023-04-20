const fs = require('fs');
const inquirer = require('inquirer')


// title = process.argv[2]
// desc = process.argv[3]
// install = process.argv[4]
// Usage = process.argv[6]
// contrib = process.argv[7]
// tests = process.argv[8]
// questions = process.argv[9]
// license = process.argv[10]
// username = process.argv[11]
// email = process.argv[12]



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
    | Technology Used         | Resource URL |
    |-------------------------|-----------------------|
    ## Description 
    \`\`\`  
    \`\`\`
    ## Usage 
    Enter a city you want to go to and click the search button to begin. If it's an actual city, it will return 5-day forecast for the selected city and the search will be saved as a button for future use.
    ## Learning Points 
    ## Author Info
    * [Portfolio](https://bdalberson.github.io/)
    * [LinkedIn](https://www.linkedin.com/in/)
    * [Github](https://github.com/)
    \`\`\`
    ## Credits
    ---
    ## Tests`, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    }, (err) => {
        if (err) throw err;
        console.log('The file could not be saved!');
    });


