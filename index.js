const fs = require('fs');
const inquirer = require('inquirer')


title = process.argv[2]
desc = process.argv[3]
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
    const filename = `${"README_" + data.name.toLowerCase().split(' ').join('')}.md`;
    
    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });






//   # weatherforcase

// | Technology Used         | Resource URL           | 
// | ------------- |:-------------:| 
// | HTML    | [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) | 
// | CSS     | [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)      |   
// | Git | [https://git-scm.com/](https://git-scm.com/)     |    
// | JavaScript | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)     
// | Fetch Api | [https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)    


// ## Description 
// [Visit the Deployed Site](https://bdalberson.github.io/weatherforcase/)

// ![plot](./Assets/Screen%20Shot%202023-04-10%20at%208.57.43%20AM.png)

// ## Code Refactor Example


// Below is the Api function, it must query a city name to get the lattitue and longitude and then make another call using the lat/lon to get the forecast for the city. 

// ```javascript

//   fetch(apiUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       buildPage(data); // pass the response parameter as an argument to buildPage function
//     })
// });

//   function buildPage(data) {
//     let queriedLat = data[0].lat;
//     let queriedLon = data[0].lon;
  
//     // Second API call to get weather forecast using latitude and longitude
//     return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${queriedLat}&lon=${queriedLon}&units=imperial&appid=947f373954b974834bc6986dec7c1dd0`)
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (data) { //sets up all the variables from the api calls and stores them
//         let queriedCity = data.city.name;
//         let queriedTemp = data.list[0].main.temp;
//         let queriedWind = data.list[0].wind.speed;
//         let queriedHum = data.list[0].main.humidity;
//         let queriedTime = data.list[0].dt;
//         let queriedWeather = 'https://openweathermap.org/img/wn/' + data.list[0].weather[0].icon + '@2x.png'
  
// ```

// Added some CSS to make it look better on smaller devices

// ```css


// @media screen and (max-width: 500px) {
//     .searchBox{
//         font-size: large;
//         width: 45%;
//         height: 60%;
//         display: inline-block;
//         margin: auto;
        
//     }
//     .forcastBox{
//         font-size: x-small;
//         width: 100%;
//         float: right;
//         height: 40%;
//         flex: auto;
//         margin: auto;
//         display: flex;
//         flex-direction: column;
//        flex-wrap: wrap;   
//     }
//     .forcastBox ul {
//         display: flex;
//         flex-direction: column;
//        flex-wrap: wrap;  
//        color: black; 
//     }
//     footer{
//         display : none; 
//         visibility : hidden; 
//     }

//   }
// ```

// This is my save button,  it uses local storage to store a button of the recent save and then sets a button to search that city if pressed again. Also builds a list of searches from local storage on load 

// ```javascript


        
// ```


// ## Usage 

// Enter a city you want to go to and click the search button to begin.  If its an actual city it will return 5 dady forcast for selected city and the search will be saved as a button for future use. 

// ## Learning Points 


// Api week so most of learning was in how to handle api calls and work with the data. The code should use a loop to go through some unneccesary bits of code and that will  be my main point of focus for the next project. 


// ## Author Info

// QA professional turning into coder 

// * [Portfolio](https://bdalberson.github.io/Course2Biopage/)
// * [LinkedIn](https://www.linkedin.com/in/brian-alberson-464b2271/)
// * [Github](https://github.com/bdalberson)
// ```

// ## Credits

// Gotta thanks the wife and family for giving me time and space to complete this it was quite an amount of work.     

// ---

// ## Tests
// Tested and works on mobile. test buttons and layout on varrying screens and sizes.  

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