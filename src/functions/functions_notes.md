```javascript
functoins declerations --->

    functoin bluhBluh(argument){
        body
            return ( value ) // code stops executing here
    }

>     functions with return statement in their body stop executing and return  the value to their caller

>     functions with no return value , have a  value of undefined

function expresion --->

    const f = function( argument ){ return value }

self invocationg function --- >


>      is invoked immediatly after being defined

        const func = (function(){})()

>     function expression are  , functoins declered inside a larger statement or expression

>     function expression can be an argument to another function

>     name is optional for a function expression

        let sorted_arr = arr.sort(function( a , b ) => retuen a - b );

>     u can use this ability to define a typeCheck function which is pretty cool

function bluh( value , typeCheckFunction ){
    if(!typeCheckFunction(value)){ // if the function is evaluated to false in execution
        throw Error
    }else{
        return value
    }

}
bluh(value , (type) => type === myType )

diffrence between the two --->

>          function declerations , declere a varible and assign the function to it ,

>          function expression is up to me to assign to a const , var or another function

>          function declerations are hoisted and can be invoked before they're declered , expressoins can't

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


>       nested functions in an objects methode , dont inherit the (this) that refers to the object

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

      let object = {
        value : 'value',
        methode : function(){
            this === object //true
            const arrowFunction=()=> this === object //true arrow functions inherit this
        }
      }



function invocation ---- >

>           function's bodies  are executed whne they are invoked

>           functions are called in this ways :

>           function()

>           methodes

>           constructors

>           indirectly with apply() , call() methode

>           implicitly



//      function wrapper(5) {}

//      function wrapper(x + y) {}

//      function wrapper(console.log) {}

//      these fuckers are illigal ,  u can pass a function as an argumnet to another function ,

//      but in difination function expexts a expression as a parameter not another function





function invocation in strictMode ---- >

>    they call this shit (this methode ) invocation context


>    in strict mode their invocation context is undefined


>    in non strict mode  invocatoin context is assigned to the  global object ( window )

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

            O.M( arg )


>    methode invocation are called with dot notation , or bracket notation

>    property access invocation that use  braket notation can also call methodes  :

>    u can use an invocation return value , as   value for the next invocation

>    thats why this is possible in async expressions :


    doStep1().then(doStep2).catch(handle erorr) //first function is invoked and evaluated to a value
    //then is passed to the next function

>   this shit is called methode chaining



when u invoke a funtion implicitlly ---- >

>        if setter or getter sets the value of its property

>        converting an object to string or numeric value , .toString() and valueOf() methodes

>        looping and iterating over an iterable object

>        taged and template literals

>        proxy objects


what happens when you invoke ur function with more or fewer arguments than defined parameters initially  ---- >

>        if  a function was invoked with more arguments they are set to a defult value which is often undifined ;

>       optional arguments :
>           u declere ur function with optional arguments :

                function getPropertyName( arg , optionalArg ){
                    optionalArg = optionalArg || [] ; // this tests if the optinal argument is undefined or not
                    //  if undefined  , we assign  an empty arrey to it which we can use later
                }

>                u can check the if the arg exists simply with

>               || operator , if it does the leftside value  will be used otherwise the right hand side of the operator is used

>               let exists = exists || 'replacement value'



>            make sure to put the optional argument at the end ;

>             or u can just define a parameter with default values since it is actually defined when the function is invoked

            function getPropertyName ( arg ,  'default value' , optionalArg ){

            }
>

veriadic functions --- >

>         functions that u define that can be invoked with any number of arguments

         function veradic(firstArgument , ...rest){

        }

>       when this function is invoked  arguments that u pass first are assigned to non rest parameters;

>       and the rest arguments are stored to an arrey , a rest arg can be an empty arrey but not undifined;



higher oredr function INVOCATION ----  >

>       hoc are functions that take another function as parameter and operate on them and return a new one


            function higherOrder(wrappedFunction){
                return function(...args){

                    wrappedFunction(...args)

                }
            }


>        we invoke them like this :

                higherOrder(wrappedFunction)(...args) // the leftSide evaluates to a function and takes the second parenthesis as arguments


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
        // which is pretty cool
    }

    //invocation :
            caculate(add , 1 , 2)


closures ---- >
    scope === visability / accessbility

>       variable defined inside a function are not accessable outside the function

>       to avoid cluttering the global nameSpace , we define varibles inside the function and they become local to it

>       this function is used only as a temperary nameSpace

>        the main idea is providing a scope to avoid mix ups between varibles with the same name


    let car = {
        start : function(){
            consol.log('start')
        }
        stop : function(){
            consol.log('stop')
        }
    }


    let bike = {

          start : function(){
            consol.log('start')
        }
        stop : function(){
            consol.log('stop')
        }

    }

>       if even one varible name is too much in global nameSpace :


        (function()=>{  //function expression definition

             const car = { // use const to avoid leaking
        start : function(){
            consol.log('start')
        }
        stop : function(){
            consol.log('stop')
        }
    }


            const bike = {

          start : function(){
            consol.log('start')
        }
        stop : function(){
            consol.log('stop')
        }

    }

        }()) //the  parenthesis pair after curly braces calls this function immedietly

>             no matter where u invoke the function (or nested function) ,

              they execute the varible scope they were difined in ,this is important mostly with nested function


            let scope = 'global scope'

              function checkScope(){

                let scope = 'local scope'

                retrun function f(){
                    return scope // returns 'local scope'
                    };
              }

              checkScope(); //returns 'local scope'
              checkScope()(); //returns function f() but since f was defined in a scope
              //that let scope === 'local scope' it retuens 'local scope'
>            before i go to the next bullshit lets take an important note :

>            local Variable Lifetime:
>                                    They are created when the function is invoked, and deleted when the function is finished.
>                                    in javaScript a variable is gone if nothing can reach it --->

            let counter = (function(){
                let count = 0
                return ++count // => returnes count = 1
            }())
>           no matter how many time i invoke this , the count is always gonna be 1 ,
>           bc count gets redefined every time

>           now this shit is fucking magic --->
>               nested function have access to their parent varibles , even after the parent is fucking done
>               cool thing is since the varible in the nested func wont be redefined by the nested function
>               we can use this to give private access to a variable

            let counter = (function(){
                let count = 0
                return function(){
                    return count++
                }
            }())

            let add = counter(); // now the return value of the outer funtion is assigned to add var

Private property accessor methods using closures --->

let object_retuner = function(){
    let value;

    retrun{
        set: function(arg){
            return arg = value;

        },
        get: function(arg){
            return value;
        }
    }// pretty simple , funtion returnes an objects with two methodes gives them both access to the varible
}
>           lets assign and invoke it :

            let a = object_returner() , let b = object_retuner()
            // now they both have access to the property
            a.set() / a.get()  and b.set() / b.get() // refere and operate to diffrent varibles
            // as if they initiate their own values to do stuff on

>           but since we assigned them to diffrent vars they both have seperate scopes(magic bullshit)

>           it is as if we created two new objects with  diffrent methodes
>           we access them properties with plain old dot methode invocation

a.set(v) , b.get() // remember we assign the returned obj once , then call the methodes as many times as we fucking want
>                 // so property gets defined and accessed then do wierd shit do it
>
>
>           we can mix the shit above to dynamically set , get , or what ever the fuck we want with an object
>           and give it private access to value defined in the function and couple of methodes to change or observe it

            function gives_private_property(the_object ,  the_Name){
                let private_Value ;

                //we can use bracket notation to dynamically   change the methodes names based on diffrent context
                // this allows our code to be reusable
                the_object[`get${the_Name}`]  = function(){
                    return value
                        //observ value
                }
                the_object[`set${the_Name}`] = function(v){
                    value = v // change the value whatever the fuck it is
                }
            }

            //now invoke the function once to initiate

            let o ={};

            gives_private_Property(o , 'Color') // is the object and color is the varible we want to change or set

            o.setColor('blue') // sets the color to blue
            o.getColor() // sees the change

            an or :

            let b = {}

            give_private_property(b , 'Number')

            b.setNumber() / b.getNumber()

>          **two clusers defined in the same scope and share access to the same varible  , thats it the whole shit , thats fucking it**


predict function as argument , usefull to typecheck--- >

>           we inititally pass Predict as a parameter , then in invocation use it as function

function typeCheck(value,predict){
    if(!predict(value)){
        return false
    }else{
        return value
    }
}


typeCheck(value , x => type of x === 'string')





call() / apply() / bind() methodes --->



call() --->

>       the first argumnet to this methode is the object we want to invoke a function on

        let object = {} , function(){}

        function.call(object)

>       the invocation context of the function becomes the argument to the call methode

        function(){ this === object } // => true

>       the rest of arguments to call methode is the argumetns u pass to the function itself

        function(arg1,arg2)  , function.call(object,arg1,arg2)

apply() --->

>      is the same , but gives arreys to the function as arguments

function.apply(object, [...args])

bind () --->

>      bind methode binds a methode to an object

function.bind(object)

>     returnes a new function that invokes the orginal as a methode of object we bound it to



functional programing ideas --->



Processing Arrays with Functions --->

>           before moving on let me show u somthing cool

>           arrey methods work like this arrey.methode(callBackFunction(value,index,arrey_itself))

>           which means u can define the callBack beforehand and just pass it to methode like :

            function callBack( value , index , arrey ){  return value , index , arrey  }; 

            arrey.methode(callBack) // and this works 


>            so insted of using arrey.methode() , we can write the functional version of it : 


            let sum = (x , y) = > {
                return x + y
                }

            function reduce( arrey , callBack_Function ){
                return arrey.reduce( callBack_Function ) // here reduce is standard arrey methode  
            }

// if we combine this with ...rest operator we can pass infinit amount of callBack functions 


            function reduce(arrey , ...shit_Ton_Of_CallBcaks){
                
                return arrey.reduce(...shit_Ton_Of_CallBcaks)
            }


                


Higher-Order Functions --- >


Partial Application of Functions --->



Memoization --->






































```
