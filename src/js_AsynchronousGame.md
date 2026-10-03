# Timers :

### setTimeout() =>
        takes a function as first argument , takes time for the second argument runs the function after specified time in millieseconds 
    setTimeOut(checkForUpdates(),3000)

    it returnes an id , which u can use to set off the timer preventing the function to run 

    let a = setTimeout(()=>function(),3000)

    clearTimeout(a) //stops the timer 

### setInterval() =>
    takes function or code snippet as first argument and delay as second in millieseconds , runs the function / code after delay millieseconds returnes an id which u can pass to clearIntervals(Id)
    setIntervals(function(),delay)


### Promises =>
    A promise represents a value that isn't ready yet , is an object representing the result of a computation ,
     it represents the future result of a single asynchronous computation 
* .then(callBackFunc()) :
    when promise finishes successfully callbackFunc() runs  
    u can pass another callBackFunc() to .then() , if a promise throws , the second callBack runs , 
* .catch() :
    is shorthand for .then(null,callBackFunc())
    

    fetch(url) // task1 : returns promis 1  
        .then(callBack1) // task2 : returns promis 2
        .then(callBack2) // task3 : returns promis 3



* 1 : `fetch()` initiates a` HTTP Get` request , and returns promis 1

* 2 : `then()` stores our callBack somwhere and returnes promis 2
 
* 3 : second `then()` remembers our callBack and returns promis 3

* 4 : these three  steps  are executed syncronously when expression is first executed , then there is a asyncronous pause while http request is initiated 
 
* 5 : http request arrives , fetch wraps http status and it's headers into a `response-object` , fulfills promis 1 with `response-object` as value  
 
* 6 : when promis 1 fulfills , it's value is passed to callBack1 and task 2 is initiated 
  
* 7 : if task 2 is able to parse the HTTP response body and produce JSON , it's used to fulfill promis 2

* 8 : the value that fulfills promis 2 is input to task 3  , callback2 runs and promis 3 is fulfilled

