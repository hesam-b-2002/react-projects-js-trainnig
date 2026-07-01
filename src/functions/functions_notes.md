```javascript
functoins declerations --->

    functoin bluhBluh(argument){
        body
            return ( value ) // code stops executing here 
    }

>     functions with retuen statement in their body stop executing and return the return the value to their caller

>     functions with no return value , has a  value of undefined

function expresion --->

    const f = function( argument ){ return value }

>     function expression are  , functoins declered inside a larger statement or expression

>     function expression can be an argument to another function

>     name is optional for a function expression

        let sorted_arr = arr.sort(function( a , b ) => retuen a - b );

diffrence between the two --->

>           function decleration decleres a varible and assign the function to it ,

>              whereas

>          function expression is up to me to assign to a const , var or another function

>           function declerations are hoisted and can be called before they're declered , expressoins can't

arrow functions --- >

>         arrow functions are expressions

>         if their body is a single return statement , and a single arg  u can omit everything

                let arrowFunctoins =  arg  => retrun arg

>         which means u can do shit like this

                let filterdArr = arr.filter( x => x  === true )

nested functions --- >

>             nested functoins can access varibles assigned whithin function declerd in


                function bluh(){
                    let a , b

                        function bluhBluh(){
                            return a

                                function bluhBluhBluh(){
                                    return b
                                }

                                bluhBluhBluh();
                        }

                        bluhBluh();
                }


>       nested functions in an objects methode , dont inherit the objects 

>       properties , fortunally there are tricks :

      let object = {
        value : value ,
                methode : function(){
                    this === object  // true methode can access this
                    // here is the trick :
                    this = methode_value 
                    
                    nestedFunction();
                        function nestedFunction(){
                            this === object     // false it does not inherit this value 

                                // but nested functions have access to their functions value (defined in their scope) so :

                        methode_value === object    // true , our trick workes
                        }

                }

      };

function invocation ---- >

>     function's bodies  are executed whne they are invoked

>     functions are called in this ways :

>             function

>             methode

>             constructor

>             indirectly with apply() , call() methode

>             implicitaly




function invocation in strictMode ---- > 

>    they call this shit (this methode ) invocation context

>    in strict mode this is undifined 

>    in non strict mthode function invocation is a global object ( window )

        if ur in strict mode :

            let strict = (function () { return !this }) // returnes true 

recursive function ---- > 


    let function bluh(){
        return someShit

            bluh();
    }


methodes ---- > 

>    if u have object O and a methode M


    let O = {} , O.M = function(){}

>    u call it this way : 

            O.M( opt arg )


>    methode invocation are called with dot notation  property access 

>    property acces invocation that use sqeer braket can also call methodes  : 

        let object = {};

    object["methode"] = function (arg) {
      return (this.arg = arg);
    };

    let another_object = object.methode(arg);

>    u can use an invocation retun value as a an invokation value for the next methode 

>    thats why this is possible in async expressions : 


    doStep1().then(doStep2).catch(handle erorr)

>   this shit is called methode chaining



when u invoke a funtion implicitlly ---- > 

>        if setter or getter sets the value of its property 

>        converting an object to string or numeric value , .toString() and valueOf() methodes

>        looping and iterating over an iterable object 

>        taged and template literals

>        proxy objects 

























         

```