export const Functoins_what_do_they_know_do_they_know_things_lets_find_out = () => {

// ===========================================================================
// Function Expression
// ===========================================================================

let sqr = function (x) {
return x * x;
};

console.log(sqr(2));

// ===========================================================================
// Nested Functions
// ===========================================================================

function bluh() {
let a = "a",
b = "b";

    function bluhBluh() {
      console.log(`a : ${a}`);

      function bluhBluhBluh() {
        console.log(`b : ${b}`);
      }

      bluhBluhBluh();
    }

    bluhBluh();

}

bluh();

// ===========================================================================
// Method Invocations
// ===========================================================================

let object = {
name: "shit",

    methode : function(another_name) {
      return (this.name = another_name);
    },

};

let another_name = object.methode("another");

let object = {};

object.methode = function (name) {
return (this.name = name);
};

let another_object = object.methode("another name ");

console.log(another_object);

let object = {};

object["methode"] = function (name) {
return (this.name = name);
};

let another_object = object.methode("name");

// ===========================================================================
// Nested Functions in a Method
// ===========================================================================

let object = {
value: "key",

    methode: function (anotherValue) {
      this.value = anotherValue;

      nestedFunction();

      function nestedFunction() {
        console.log(anotherValue);
      }
    },

};

// ===========================================================================
// Nested Functions in a Method Accesses
// ===========================================================================

let object = {
value: "value ",

    methode: function () {
      console.log(this === object);

      let self = this;

      nestedFunction();

      function nestedFunction() {
        console.log(this === object);
        console.log(self === object);
      }
    },

};

object.methode();

// ===========================================================================
// Functions Invoked With More or Fewer Parameters
// ===========================================================================

function getPropertyName(arg, optionalArg) {
optionalArg = optionalArg || [];

    if (!optionalArg)
      for (let property in arg) {
        optionalArg.push(property);
      }

    console.log(`nqme : ${arg}, surname : ${optionalArg}`);

    return arg;

}

let argName = [" name"];

getPropertyName(argName);

// ===========================================================================
// Variadic Functions
// ===========================================================================

function max(firstArg, ...rest) {
let maxValue = firstArg;

    for (let number of rest) {
      if (number > maxValue) maxValue = number;
    }

    return maxValue;

}

let arr = [1, 2, 1241241, 124125132513, 547536, 245867969];

// ===========================================================================
// Functions as Arguments
// ===========================================================================

function add(arg1, arg2) {
return arg1 + arg2;
}

function subtract(arg1, arg2) {
return arg1 - arg2;
}

function multiply(arg1, arg2) {
return arg1 * arg2;
}

function divide(arg1, arg2) {
return arg1 / arg2;
}

function caculater(opertor, operand1, operand2) {
return opertor(operand1, operand2);
}

let added = caculater(add, 1, 2);
let subtracted = caculater(subtract, 1, 2);
let divided = caculater(divide, 1, 2);
let multiplied = caculater(multiply, 1, 2);

console.log(added, divided, multiplied, subtracted);

// ===========================================================================
// Higher Order Function
// ===========================================================================

function higher_order_Funtion(wrapped_function) {
return function (...arg) {
return wrapped_function(...arg);
};
}

function add(arg1, arg2) {
return arg1 + arg2;
}

let higher_order_Funtion_invocation =
higher_order_Funtion(add)(1, 2);

// the first part evaluates to a function and second paranthesis acts as arg
// togather they are a invocation

// ===========================================================================
// Closures
// ===========================================================================

let uniqeInteger = (function () {
let count = 0;

    return function () {
      console.log(count);
      return count++;
    };

})();

uniqeInteger(); // => 0
uniqeInteger(); // => 1
uniqeInteger(); // => 2
uniqeInteger(); // => 3
uniqeInteger(); // => 4
uniqeInteger(); // => 5
uniqeInteger(); // => 6
uniqeInteger(); // => 7

// how does it keep the value of the counter consistenly ?
// the outer function is difined and invoked immediatly and its not invoked again
// but the value 'counter' it difined in it , is needed for the nested function to run
// so js keeps it alive

// why doesn't it make a new counter ?
// bc the nested function has no right too , it's defined in it's countaining function
// so the value counter++ which is the whole value of the immedietly

function counter() {
let count = 0;

    return {
      add: function () {
        console.log(count);
        return count++;
      },

      sub: function () {
        console.log(count);
        return count--;
      },
    };

}

// trick is to call the outer function once and then nested ones

// ===========================================================================
// Private Access
// ===========================================================================

function addPrivateAccess(object, name, predictFunction) {
let value;

    object[`get${name}`] = function () {
      console.log(value);
      return value;
    };

    object[`set${name}`] = function (v) {
      if (predictFunction && !predictFunction(v)) {

        // predict function is an optional argument
        // u can pass it as a function that has the return value of true / false
        // if is passed in the invocation and is not true then throw an error

        throw new TypeError(`${v} does not match the type of `);

      } else {
        value = v;
      }
    };

}

let obj = {};

// herre predict funtion is a arrow function expression and returnes bollean
// we used this predict shit alot in array methodes

addPrivateAccess(obj, "Color", (x) => typeof x === "string");

obj.setColor("blue");
obj.getColor();

// ===========================================================================
// call() / apply()
// ===========================================================================

// " whats the diffrence between the two ?";

// ===========================================================================
// Wrapper Factory
// ===========================================================================

let caculate = {
add: function (operand1, operand2) {
return operand1 + operand2;
},
};

function trace(object, methode) {
let orginal_methode = object[methode];

    return function (...args) {
      try {
        orginal_methode(args);
        console.log(`methode initiated`);
      } finally {
        console.log(`methode is done `);
      }
    };

}

trace(caculate, `add`)(1, 2);

// takes a function wrapps it in another function
// the orginal function / methode is unchainged
// is called with wrapper function
// (wrapped function)(wrapped function args)

// ===========================================================================
// Monkey Patching / Methode Decorator
// ===========================================================================

function traceMethode(object, methode) {
let original_methode = object[methode];

    object[methode] = function (...args) {
      console.log(`methode initiated`);

      let res = original_methode.apply(this, args);

      console.log(`methode is done`);

      return res;
    };

}

traceMethode(caculate, `add`);

caculate.add(1, 2);

// take the orginal methode and object containing it remmeber it,
// then modify / nuke it with assigning a new function to it
// that logs initiation and finalization

// ===========================================================================
// Standard Deviation With Functional JS
// ===========================================================================

let arr = [1, 1, 9, 10, 10, 1];

function reduce(arrey, callBack) {
return arrey.reduce(callBack);
}

function map(arrey, callBack) {
return arrey.map(callBack);
}

let stdv = Math.sqrt(
reduce(
map(
map(
arr,
(x) => x - reduce(arr, (x, y) => x + y) / arr.length
),
(x) => x * x
),
(x, y) => x + y
) / arr.length
);

// ===========================================================================
// Exercises
// ===========================================================================

// write a function not()

// write a function that takes two functions
// and computes function(nested_function(args))

};
