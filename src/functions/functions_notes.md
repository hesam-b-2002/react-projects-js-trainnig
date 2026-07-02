```javascript
functoins declerations --->

    functoin bluhBluh(argument){
        body
            return ( value ) // code stops executing here 
    }

>     functions with return statement in their body stop executing and return the return the value to their caller

>     functions with no return value , have a  value of undefined

function expresion --->

    const f = function( argument ){ return value }

>     function expression are  , functoins declered inside a larger statement or expression

>     function expression can be an argument to another function

>     name is optional for a function expression

        let sorted_arr = arr.sort(function( a , b ) => retuen a - b );

diffrence between the two --->

>           function decleration decleres a varible and assign the function to it ,        

>          function expression is up to me to assign to a const , var or another function

>           function declerations are hoisted and can be invoked before they're declered , expressoins can't

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


>       nested functions in an objects methode , dont inherit the (this) that refers to the owner of methode  

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

>             functions

>             methodes

>             constructors

>             indirectly with apply() , call() methode

>             implicitaly



// // function wrapper(5) {}
// // function wrapper(x + y) {}
// // function wrapper(console.log) {}  
//      these funckers are illigal ,  u can pass a function as an argumnet to another function but u cant 
//       but in difination function expexts a expression as a parameter not another function 





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

>    property acces invocation that use sqaure braket can also call methodes  : 

        let object = {};

    object["methode"] = function (arg) {
      return (this.arg = arg);
    };

    let another_object = object.methode(arg);

>    u can use an invocation return value , as   value for the next methode 

>    thats why this is possible in async statements : 


    doStep1().then(doStep2).catch(handle erorr)

>   this shit is called methode chaining



when u invoke a funtion implicitlly ---- > 

>        if setter or getter sets the value of its property 

>        converting an object to string or numeric value , .toString() and valueOf() methodes

>        looping and iterating over an iterable object 

>        taged and template literals

>        proxy objects 


what happens when you invoke ur function with more or fewer arguments than defined parameters initially  ---- > 

>        if  a function was invoked withe more arguments they are set to a defult value which is often undifined ;

>       optional arguments : 
>           u declere ur function with optional arguments :

                function getPropertyName( arg , optionalArg ){
                    optionalArg = optionalArg || [] ; // this tests if the optinal argument is undefined or not 
                    //  undefined  , we assign  an empty arrey to it which we can use later 
                } 

>                u can check the if the arg exists simply with 

>               || operator , if it does the leftside value  will be used otherwise the right hand side of the operator is used

>               let exists = exists || 'replacement value'



>            make sure to put the optional argument at the end ;

>             or u can just define a parameter with default values since it actually defined when the function is invoked 

            function getPropertyName(arg , optionalArg = [] 'default value'){

            }
>

veriadic functions --- > 

>         functions that u define that can be invoked with any number of arguments  

         function veradic(firstArgument , ...rest){

        }

>       when this function is invoked  arguments that u pass first are assigned to non rest parameters;

>       and the rest arguments are stored to an arrey , a rest arg can be an empty arrey but not undifined;



higher oredr function INVOCATION ----  > 

>       hoc are function that take another function as parameter and operate on them and return a new one 


            function higherOrder(wrappedFunction){
                return function(...args){

                    wrappedFunction(...args) 

                }
            }


>        we invoke them like this : 

                higgherOrder(wrappedFunction)(...args) // the leftSide evaluates to a funcyion and takes the second parenthesis as arguments 


functions are not syntaxt bullshit , they are values :

>       u can assign them to variables 

>       declere it as objects properies 

>       passs it as an arrey element 


        let f = function bullShit(){}

        f( 'bullshit argument')


        somthing cool --->

> since functions are values u can pull this shit off( i dont know whats it called ( probably HOC ?)) --->

    
            function add( num1 ,num2 ) { return (num1 + num2)}
    
            function subtract( num1 ,num2 ) { return (num1 - num2)}
    
            function multiply( num1 ,num2 ) { return (num1 + num2)}
    
            function divide( num1 ,num2 ) { return (num1 + num2)}
    
    
    function caculate( operator , operand1 , operand2 ){ // u pass a function and it's parameters as arguments 
    
        return operator( operand1 , operand2 ) ; // u cal the function and it's arguments 
    }

    //invocation :
            caculate(add , 1 , 2) 
    





                
 


























         

```