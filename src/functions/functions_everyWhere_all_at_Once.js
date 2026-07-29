export const Functoins_what_do_they_know_do_they_know_things_lets_find_out =
  () => {
    //   function expression --- >
    //   let squer = function( x ) {return x * x}
    //   console.log(squer(2))
    //   nested functions --- >
    //   function bluh(){
    //       let a = 'a' , b = 'b'
    //           function bluhBluh(){
    //               console.log(`a : ${a}`)
    //               function bluhBluhBluh(){
    //                   console.log(`b : ${b}`)
    //               }
    //               bluhBluhBluh();
    //           }
    //           bluhBluh() ;
    //   }
    //   bluh();}
    //   methode invocations --- >
    //   let object = {
    //     name: "shit",
    //     methode(another_name) {
    //       return (this.name = another_name);
    //     },
    //   };
    //   let another_name = object.methode("another");
    //   let object = {};
    //   object.methode = function (name) {
    //     return (this.name = name);
    //   };
    //   let another_object = object.methode("another name ");
    //   console.log(another_object);
    //   let object = {};
    //   object["methode"] = function (name) {
    //     return (this.name = name);
    //   };
    //   let another_object = object.methode("name");
    //   nested functions in a methode
    //   let object = {
    //     value: "key",
    //     methode: function (anotherValue) {
    //       this.value = anotherValue;
    //       nestedFunction();
    //       function nestedFunction() {
    //         console.log(anotherValue);
    //       }
    //     },
    //   };
    //    nested funtions in a methpodes accesess --- >
    //   let object = {
    //     value: "value ",
    //     methode: function () {
    //       console.log(this === object);
    //       let self = this;
    //       nestedFunction();
    //       function nestedFunction() {
    //         console.log(this === object);
    //         console.log(self === object);
    //       }
    //     },
    //   };
    //   object.methode();
    //   funtions invoked with more or fewer parameters ---- >
    //   function getPropertyName(arg, optionalArg) {
    //     optionalArg = optionalArg || [];
    //     if (!optionalArg)
    //       for (let property in arg) {
    //         optionalArg.push(property);
    //       }
    //     console.log(`nqme : ${arg}, surname : ${optionalArg}`);
    //     return arg;
    //   }
    //   let argName = [" name"];
    //   getPropertyName(argName);
    //   veriadic functions --- >
    //   function max(firstArg, ...rest) {
    //     let maxValue = firstArg;
    //     for (let number of rest) {
    //       if (number > maxValue)
    //         maxValue = number;
    //       }
    //     }
    //     return maxValue;
    //   }
    //   let arr = [1, 2, 1241241, 124125132513, 547536, 245867969];
    //   function as arguments --->
    //   function add(arg1, arg2) {
    //     return arg1 + arg2;
    //   }
    //   function subtract(arg1, arg2) {
    //     return arg1 - arg2;
    //   }
    //   function multiply(arg1, arg2) {
    //     return arg1 * arg2;
    //   }
    //   function divide(arg1, arg2) {
    //     return arg1 / arg2;
    //   }
    //   function caculater(opertor, operand1, operand2) {
    //     return opertor(operand1, operand2);
    //   }
    //   let added = caculater(add, 1, 2);
    //   let subtracted = caculater(subtract, 1, 2);
    //   let divided = caculater(divide, 1, 2);
    //   let multiplied = caculater(multiply, 1, 2);
    //   console.log(added, divided, multiplied, subtracted);
    //   higher order Funtion --->
    //   function higher_order_Funtion(wrapped_function) {
    //     return function (...arg) {
    //       return wrapped_function(...arg);
    //     };
    //   }
    //   function add(arg1, arg2) {
    //     return arg1 + arg2;
    //   }
    //   let higher_order_Funtion_invocation = higher_order_Funtion(add)(1, 2);
    //   the first part evaluates to a function and second paranthesis acts as arg
    //   togather they are a invocation
    //   closures --->
    //   let uniqeInteger = (function () {
    //     let count = 0;
    //     return function () {
    //       console.log(count);
    //       return count++;
    //     };
    //   })();
    //   uniqeInteger(); // => 0
    //   uniqeInteger(); // => 1
    //   uniqeInteger(); // => 2
    //   uniqeInteger(); // => 3
    //   uniqeInteger(); // => 4
    //   uniqeInteger(); // => 5
    //   uniqeInteger(); // => 6
    //   uniqeInteger(); // => 7
    //   how does it keep the value of the counter consistenly ?
    //   the outer function is difined and invoked immediatly and its not invoked again
    //   but the value 'counter' it difined in it , is needed for the nested function to run
    //   so js keeps it alive
    //   why doesn't it make a new counter ?
    //   bc the nested function has no right too , it's defined in it's countaining function
    //   so the value counter++ which is the whole value of the immedietly
    //   function counter() {
    //     let count = 0;
    //     return {
    //       add: function () {
    //         console.log(count);
    //         return count++;
    //       },
    //       sub: function () {
    //         console.log(count);
    //         return count--;
    //       },
    //     };
    //   } // trick is to call the outer function once and then nested ones
    //   function addPrivateAccess(object, name, predictFunction) {
    //     let value;
    //     object[`get${name}`] = function () {
    //       console.log(value);
    //       return value;
    //     };
    //     object[`set${name}`] = function (v) {
    //       if (predictFunction && !predictFunction(v)) {
    //         predict function is an optional argument
    //         u can pass it as a function that has the return value of true / false
    //         if is passed in the invocation and is not true then throw an error
    //         throw new TypeError(`${v} does not match the type of `);
    //       } else {
    //         value = v;
    //       }
    //     };
    //   }
    //   let obj = {};
    //   addPrivateAccess(obj, "Color", (x) => typeof x === "string"); // herre predict funtion is a arrow function expression and returnes bollean
    //   we used this predict shit alot in array methodes
    //   obj.setColor("blue");
    //   obj.getColor();
    //   call() // apply()
    //   " whats the diffrence between the two ?";
    //   let caculate = {
    //     add: function (operand1, operand2) {
    //       return operand1 + operand2;
    //     },
    //   };
    //   `wrapper factory`;
    //   function trace(object, methode) {
    //     let orginal_methode = object[methode];
    //     return function (...args) {
    //       try {
    //         orginal_methode(args);
    //         console.log(`methode initiated`);
    //       } finally {
    //         console.log(`methode is done `);
    //       }
    //     };
    //   }
    //   trace(caculate, `add`)(1, 2);
    //   `takes a function wrapps it in another function the orginal function / methode is unchainged is called with wrapper function
    //   (wrapped function)(wrapped function args)``monkey patching / methode decorator `;
    //   function traceMethode(object, methode) {
    //     let original_methode = object[methode];
    //     object[methode] = function (...args) {
    //       console.log(`methode initiated`);
    //       let res = original_methode.apply(this, args);
    //       console.log(`methode is done`);
    //       return res;
    //     };
    //   }
    //   traceMethode(caculate, `add`);
    //   caculate.add(1, 2);
    //   `take the orginal methode and object containing it  remmeber  it , then modify / nuke it
    //   with assigning a new function to it that logs initiation and finalization`;
    //   `this is how u caculate standard deviation with functional js`;
    //   let arr = [1, 1, 9, 10, 10, 1];
    //   function reduce(arrey, callBack) {
    //     return arrey.reduce(callBack);
    //   }
    //   function map(arrey, callBack) {
    //     return arrey.map(callBack);
    //   }
    //   let stdv = Math.sqrt(
    //     reduce(
    //       map(
    //         map(arr, (x) => x - reduce(arr, (x, y) => x + y) / arr.length),
    //         (x) => x * x,
    //       ),
    //       (x, y) => x + y,
    //     ) / arr.length,
    //   );
    //   `write a function not()`;
    //   `write a function that takes two functions and computes function(nested_function(args))`;
    // ("write arrey methodes in functional js");
    // // let arr = [1, 2, 3, 4, 5, 6, 7];
    // function myMap(arrey, callBack) {
    //   return arrey.map(callBack);
    // }
    // function my_Map_Without_map(arrey = [], callBack) {
    //   let newArr = [];
    //   for (let i = 0; i < arrey.length; i++) {
    //     newArr[i] = callBack(arrey[i], i, arrey);
    //   }
    //   return newArr;
    // }
    // function myFilter(arrey, predictFunction) {
    //   let newArr = [],
    //     newArrrIndex = 0;
    //   for (let i = 0; i < arrey.length; i++) {
    //     if (predictFunction(arrey[i], i, arrey)) {
    //       newArr[newArrrIndex++] = arrey[i];
    //     } else {
    //       continue;
    //     }
    //   }
    //   return newArr;
    // }
    // function myReduce(arrey, callBack, initialvalue) {}
    // `hoc functions `;
    // function counter() {
    //   let count = 0;
    //   return function increment() {
    //     return count++;
    //   };
    // }
    // function private_Bank_Account() {
    //   let balance = 0;
    //   return {
    //     deposit: function (cash) {
    //       return balance + cash;
    //     },
    //     withdraw: function (cash) {
    //       return balance - cash;
    //     },
    //     checkBalance: function () {
    //       return balance;
    //     },
    //   };
    // }
    // let usr1 = private_Bank_Account(),
    //   usr2 = private_Bank_Account();
    // let add = (x, y) => {
    //   return x + y;
    // };
    // function logger(wrapped) {
    //   return function (...args) {
    //     let res = wrapped.call(this, ...args);
    //     console.log(`called function ${wrapped.name} with arguments ${args}`);
    //     console.log(`output : ${res}`);
    //     return res;
    //   };
    // }
    // function traceMethode(object, methode) {
    //   let orginal_methode = object[methode];
    //   object[methode] = function (...args) {
    //     console.log(`enterd ${methode}`);
    //     let res = orginal_methode.apply(this, ...args);
    //     console.log(`exited ${methode}`);
    //     return res;
    //   };
    // }
    // function uniqInt(f) {
    //   let call_count = 0;
    //   return function (...args) {
    //     let res = f.call(this, ...args);
    //     uniqInt[`call_count`] = ++call_count;
    //     return res;
    //     // i dont want to write consol log bullshit over and over again
    //   };
    // }
  };

// sudo apt update
// sudo apt --fix-missing upgrade
