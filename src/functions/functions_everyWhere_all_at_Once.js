export const Functoins_what_do_they_know_do_they_know_things_lets_find_out =
  () => {
    // // function expression --- >
    // let squer = function( x ) {return x * x}
    // console.log(squer(2))
    // // nested functions --- >
    // function bluh(){
    //     let a = 'a' , b = 'b'
    //         function bluhBluh(){
    //             console.log(`a : ${a}`)
    //             function bluhBluhBluh(){
    //                 console.log(`b : ${b}`)
    //             }
    //             bluhBluhBluh();
    //         }
    //         bluhBluh() ;
    // }
    // bluh();}
    ////methode invocations --- >
    // let object = {
    //   name: "shit",
    //   methode(another_name) {
    //     return (this.name = another_name);
    //   },
    // };
    // let another_name = object.methode("another");
    // let object = {};
    // object.methode = function (name) {
    //   return (this.name = name);
    // };
    // let another_object = object.methode("another name ");
    // console.log(another_object);
    // let object = {};
    // object["methode"] = function (name) {
    //   return (this.name = name);
    // };
    // let another_object = object.methode("name");
    // nested functions in a methode
    // let object = {
    //   value: "key",
    //   methode: function (anotherValue) {
    //     this.value = anotherValue;
    //     nestedFunction();
    //     function nestedFunction() {
    //       console.log(anotherValue);
    //     }
    //   },
    // };
    // //  nested funtions in a methpodes accesess --- >
    // let object = {
    //   value: "value ",
    //   methode: function () {
    //     console.log(this === object);
    //     let self = this;
    //     nestedFunction();
    //     function nestedFunction() {
    //       console.log(this === object);
    //       console.log(self === object);
    //     }
    //   },
    // };
    // object.methode();
    // // funtions invoked with more or fewer parameters ---- >
    // function getPropertyName(arg, optionalArg) {
    //   optionalArg = optionalArg || [];
    //   if (!optionalArg)
    //     for (let property in arg) {
    //       optionalArg.push(property);
    //     }
    //   console.log(`nqme : ${arg}, surname : ${optionalArg}`);
    //   return arg;
    // }
    // let argName = [" name"];
    // getPropertyName(argName);
    // veriadic functions --- >
    // function max(firstArg, ...rest) {
    //   let maxValue = firstArg;
    //   for (let number of rest) {
    //     if (number > maxValue)
    //       maxValue = number;
    //     }
    //   }
    //   return maxValue;
    // }
    // let arr = [1, 2, 1241241, 124125132513, 547536, 245867969];
    // //function as arguments --->
    // function add(arg1, arg2) {
    //   return arg1 + arg2;
    // }
    // function subtract(arg1, arg2) {
    //   return arg1 - arg2;
    // }
    // function multiply(arg1, arg2) {
    //   return arg1 * arg2;
    // }
    // function divide(arg1, arg2) {
    //   return arg1 / arg2;
    // }
    // function caculater(opertor, operand1, operand2) {
    //   return opertor(operand1, operand2);
    // }
    // let added = caculater(add, 1, 2);
    // let subtracted = caculater(subtract, 1, 2);
    // let divided = caculater(divide, 1, 2);
    // let multiplied = caculater(multiply, 1, 2);
    // console.log(added, divided, multiplied, subtracted);
    // //higher order Funtion --->
    // function higher_order_Funtion(wrapped_function) {
    //   return function (...arg) {
    //     return wrapped_function(...arg);
    //   };
    // }
    // function add(arg1, arg2) {
    //   return arg1 + arg2;
    // }
    // let higher_order_Funtion_invocation = higher_order_Funtion(add)(1, 2);
    // // the first part evaluates to a function and second paranthesis acts as arg
    // // togather they are a invocation
    //closures --->
    // let uniqeInteger = (function () {
    //   let count = 0;
    //   return function () {
    //     console.log(count);
    //     return count++;
    //   };
    // })();
    // uniqeInteger(); // => 0
    // uniqeInteger(); // => 1
    // uniqeInteger(); // => 2
    // uniqeInteger(); // => 3
    // uniqeInteger(); // => 4
    // uniqeInteger(); // => 5
    // uniqeInteger(); // => 6
    // uniqeInteger(); // => 7
    // how does it keep the value of the counter consistenly ?
    //the outer function is difined and invoked immediatly and its not invoked again
    //but the value 'counter' it difined in it , is needed for the nested function to run
    //so js keeps it alive
    //why doesn't it make a new counter ?
    //bc the nested function has no right too , it's defined in it's countaining function
    //so the value counter++ which is the whole value of the immedietly
    // function counter() {
    //   let count = 0;
    //   return {
    //     add: function () {
    //       console.log(count);
    //       return count++;
    //     },
    //     sub: function () {
    //       console.log(count);
    //       return count--;
    //     },
    //   };
    // } // trick is to call the outer function once and then nested ones
  }
