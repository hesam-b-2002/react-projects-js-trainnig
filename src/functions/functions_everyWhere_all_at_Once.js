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
    let uniqueInteger = (function () {
      let counter = 0;
      return function () {
        console.log(counter);
        return counter++;
      };
    })();

    let a = uniqueInteger(); // => 0
    let b = uniqueInteger(); // => 1
    let c = uniqueInteger(); // => 2
    let d = uniqueInteger(); // => 3
    let e = uniqueInteger(); // => 4
    let f = uniqueInteger(); // => 5
    let g = uniqueInteger(); // => 6
    let h = uniqueInteger(); // => 7

    // how does it keep the value of the counter consistenly ?
  };
