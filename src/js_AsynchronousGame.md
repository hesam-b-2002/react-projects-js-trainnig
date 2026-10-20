# Timers :

### setTimeout() =>

        takes a function as first argument , takes time for the second argument in (ms) , runs the function after specified time in millieseconds
    setTimeOut(checkForUpdates(),3000ms)

    it returns an id , which u can use to set off the timer preventing the function to run

    let timeoutId = setTimeout(()=>function(),3000)

    clearTimeout(timeoutId) //stops the timer

### setInterval() =>

    takes function or code snippet as first argument and delay as second in millieseconds , runs the function / code after delay millieseconds , returns an id which u can pass to clearIntervals(Id)
    setIntervals(function(),delay)

### Promises =>

    A promise represents a value that isn't ready yet , is an object representing the result of a computation ,
     it represents the future result of a single asynchronous computation

#### new Promis() :

takes one executer function that takes two args =>
new Promis(`function Executer(function resolve ,function reject)=>{}`)

- resolve(value); // the result you want user to receive
- reject(reason); // why it failed, conventionally an Error object

#### Nesting :

the rule is promises are flatend :
new Promis((resolve,reject)==>resolve(new promis(reolve(new Promis(resolve)=>,,,,))))
of i go 10 promises deep , p10 travels upwards , so p1 is setteled with the same value as p10

- .then(callBackFunc()) :
- .then() returns a new promise. That is what makes chaining work.
- Whatever the callback returns becomes the next promise’s input. A plain value passes
  when promise finishes successfully callbackFunc() runs  
   u can pass another callBackFunc() to .then() , if a promise fails / rejects , the second callBack runs ,
- .catch() :
  is shorthand for .then(null,callBackFunc())

`fetch(url) ` // task1 : returns promis 1
`.then((r)=>r.Json() / r.text())` // task2 : returns promis 2
`.then(c2)` //task3 : returns promis 3

- resolved vs fulfilled : a promis is an object with state and value :
  - state : a promis is either pending / resolved / rejected
  - value : plain value when promis resolves and a reason when it rejects
- when the value returned by a callBack is not a promis , that promis is considerd fulfilled

1. `fetch(url)` initiates HTTP Get request , returns `p1` , a pending promis
2. `c1` is registerd on `p1` retunrs `p2` , pending promis
3. `c2` is registed on p2 retunrs `p3` (this three steps happen synchronously) . pend
   ing promis
   some asynchronous time later response object(status and headers) arrives

4. `p1` is `fulfilled` with status and headers (sinc it's returning an actual object ), wraps them into a response `c1` is called on it
5. `c1` is invoked , the `json() / text() / ...` is called , parsing response body is asynchrouns , these methodes always return a promis , so json() returns `p4` so `c1` retunres a pending promis , `p2` and `p4` now they are locked to each-other , p2 waiting on p4 to be fulfilled

- (this follows the rules of promis nesting , stating , promis callbacks that also return the promis get queid )
  some asynchronous time later response body arrives

6. `p4` is fulfilled with respons body , `c1` is invoked with parsed body so `p2` is fulfilled since it returns a value that is not a pending promis
7. `c2` is invoked on `p2` fulfilled promis , returns some shit and is fulfilled

### Promise static methodes :

1. .all()
2. .allKeyed()
3. .allSettled()
4. .allSettledKeyed()
5. .any()
6. .race()
7. .reject()
8. .resolve()
