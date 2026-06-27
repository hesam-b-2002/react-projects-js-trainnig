functoins declerations --->

    functoin bluhBluh(argument){
        body
            return ( value )
    }

>     functions with retuen statement in their body stop executing and return the return the value to their caller

>     functions with no return value , their value is undefined

function expresion --->

    const f = function( argument ){ return value }

>     function expression are  , functoins declered inside a larger statement or expression

>     function expression can be an argument to another function

>     name is optional for a function expression

        let sorted_arr = arr.sort(function( a , b ) => retuen a - b );

diffrence between the two --->

>           function decleration declerates a varible and assign the function to it ,

>              whereas

>          function expression is up to me to assighn to a const , var or another function

>           function declerations are hoisted and can be called before they're declered , expressoins can't

arrow functions --- >

>         arrow functions are expressions

>         if their body is a single return statement , and a single arg  u can omit everything

                let arrowFunctoins =  arg  => retrun arg
            
>         which means u can do shit like this 

                let filterdArr = arr,filter( x => x  === true )

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

function invocation ---- > 

>     function's bodies  are executed whne they are invoked 

>     functions are called in this ways :

>             function

>             methode 

>             constructor 

>             indirectly with apply() , call() methode 

>             implicitaly 






