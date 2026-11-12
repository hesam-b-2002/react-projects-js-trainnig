# Timers :

### setTimeout() =>

        takes a function as first argument , takes time for the second argument ( in ms ) , runs the function after specified time in
    setTimeOut(checkForUpdates(),3000ms) //checks for updates after 30 seconds

returns an id , which u can use to set off the timer preventing the function to run via clearTimeout()

    let timeoutId = setTimeout(()=>function(),3000)

    clearTimeout(timeoutId) //stops the timer

### setInterval() =>

    takes function or code snippet as first argument and delay as second in millieseconds , keeps runing the function / code after delay millieseconds , returns an id which u can pass to clearIntervals(Id)
    setIntervals(function(),delay)

### Promises =>

    A promise represents a value that isn't ready yet , is an object representing the result of a computation ,
    the future result of a single asynchronous computation

#### new Promis() :

takes one executer function that takes two args =>
new Promis(`function Executer(function resolve ,function reject)=>{}`)

- resolve(value); // the result you want user to receive
- reject(reason); // why it failed, conventionally throwing an Error object

#### Nesting :

the rule is promises are flatend :
new Promis((resolve,reject)==>resolve(new promis(reolve(new Promis(resolve)=>,,,,))))
if i go 10 promises deep , p10 travels upwards , so p1 is setteled with the same value as p10

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

1. .all() : takes an iterable as input (arrey of promises) , returns a single promis, rejects when the first Promis rejects (stops the operation and rejects ) , fulfills only when all of them fulfill , fulfills with an empty arrey , ignores non promis arrey elemnts returns them as they are

2. .allKeyed() : takes an object as input , returns a single promis, , the promises are values associated with defined keys , rejects when the first one rejects , fulfills when all of them fulfills , key value pair ordering is preserved
   `const {a,b,c} = await Promis.allKeyed({ a : a.get() , b : b.get() , c : c.get()})`

3. .allSettled() : takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises settle , wheather fulfilled or rejected the fullfilment promis value is an iterable of objects regarding each promis:
   `   {
value : the value each Promis was fulfilled with (only if fulfilled),
status : string (fullfilled , rejected) on fulfillment or rejection,
reason : the reason the promis was  rejected with  
}`

4. .allSettledKeyed() : `.allKeyed()` , `.allSettled()` combo , takes an object as input in contrast to allKeyed() doesnt care if a promis value rejects keeps going and marks all promis values associated with each key

5. .any() : takes an iterable , fulfills on the first one fulfilled then returns this value , rejects when all promises in the iterable reject returns AggregateError(containing an array of rejection reasons in its errors property.) , always rejects on an empty arrey

6. .race() : takes an iterable , settles on the first one to settle (reject or fullfilled) , rejects on the first one to reject and fulfills on the first one fulfilled , an empty arrey passed to keeps pending forever

7. .reject() : Takes a single value as an arg returns a promise that will be rejected with that value

8. .resolve() : Takes a single value as an arg returns a promise that will be resolved with that value , (**.resolve()/.reject\*() both return promises so are both thenable , however this methodes will immediatly be fulfilled or rejected after the synchornus chunk has finished runnin**) their value is computed synchronously but assigned asynchronously

9. .withResolvers()

10. .try()

### await expression :

takes a promise and turns it back into a return value or a thrown exception , we use it before invoking a function that returns a promise , is used onlu in function bodies declerd with async
**think of the await keyword as a marker that breaks a function body up into separate, synchronous chunks.**

**blocking** :
`async function log(){
    console.log('a')
    let p = await fetch('')
    console.log('b')
  }
  log()
  console.log('c')` => function suspends when it reaches the 'await' line but the rest of the code outside of the async function runs normally
// output : a , c , b

### async function :

return value of this function will be a promise even if no promises apear in the body , if returns normaly the promise will be fulfilled with that value and if it throws an exception or error it rejects with that value

so u can write promise chains like this :
`  let response = await fetch()
  let jsonData = await response.json()`
**this is a sequential code , bc the second varible depends on the first varible's promise to fulfill**
`let res1 = await fetch(url1)
let res2 = await fetch(url2)`
in this case the second promise doesnt depend on the first one so :

`let res = await Promise.all([res1,res2])`

**we can fetch those varbles at the same time**
