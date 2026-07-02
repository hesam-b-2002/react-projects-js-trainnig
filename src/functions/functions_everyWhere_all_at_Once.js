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
    //     if (number > maxValue) {
    //       maxValue = number;
    //     }
    //   }
    //   return maxValue;
    // }
    // let arr = [1, 2, 1241241, 124125132513, 547536, 245867969];
  };
