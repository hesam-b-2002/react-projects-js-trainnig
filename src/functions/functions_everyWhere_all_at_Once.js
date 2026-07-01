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
  };
