# README Generator

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| Git | [https://git-scm.com/](https://git-scm.com/)     |    
| JavaScript | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)     
| Node.JS| [https://developer.mozilla.org/en-US/docs/Glossary/Node.js?utm_source=wordpress%20blog&utm_medium=content%20link&utm_campaign=promote%20mdn](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)    


## Code Refactor Example


Below is the Api function, it must query a city name to get the lattitue and longitude and then make another call using the lat/lon to get the forecast for the city. 

```node.js


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
```


```


## Usage 

Go to terminal and fill out and prompts to be delivered an expertly styled README in .md format.

## Learning Points 


Learning how to use NODE.JS, learning how to use template literals.  


## Author Info

QA professional turning into coder 

* [Portfolio](https://bdalberson.github.io/Course2Biopage/)
* [LinkedIn](https://www.linkedin.com/in/brian-alberson-464b2271/)
* [Github](https://github.com/bdalberson)
```

## Credits

Gotta thanks the wife and family for giving me time and space to complete this it was quite an amount of work.     

---

   [![Licence](https://img.shields.io/badge/%3CLicense%3E-%3CMIT%3E-%3CBLUE%3E)](./LICENSE)



## Tests
Tested and works on mobile. test buttons and layout on varrying screens and sizes.  
