import { useEffect, useState } from "react";

export const Functoins_what_do_they_know_do_they_know_things_lets_find_out =
  () => {
    function myFilter(arr, predict) {
      let i = 0,
        resultultArrey = [],
        j = 0;
      while (i < arr.length) {
        let verdict = predict(arr[i]);
        if (verdict === true) {
          resultultArrey[j++] = arr[i];
        }
        i++;
      }
      return resultultArrey;
    }
    function myMap(arr, callBack) {
      let i = 0,
        resultultArrey = [];
      while (i < arr.length) {
        resultultArrey[i] = callBack(arr[i]);
        i++;
      }
      return resultultArrey;
    }
    // *my reducer

    function can_be_called_n_times(n, f) {
      let callCounter = 0;
      return function (...args) {
        callCounter++;
        if (callCounter > n) {
          return;
        } else {
          return f.call(this, ...args);
        }
      };
    }
    function can_be_called_after_n_times(n, f) {
      let callCounter = 0;
      return function (...args) {
        ++callCounter;
        if (callCounter <= n) {
        } else {
          return;
          f.call(this, args);
        }
      };
    }
    function negate(f) {
      return function (...args) {
        let result = f.call(this, ...args);
        return !result;
      };
    }
    function compose(f, g) {
      return function (...args) {
        return f.call(this, g.call(this, ...args));
      };
    }
    function findFirst(arr, predict) {
      let i = 0,
        result = false;
      while (i < arr.length) {
        if (predict(arr[i]) === true) {
          result = true;
          return;
        }
        i++;
      }

      return result;
    }
    function makeMultiplier(fn) {
      return function (...args) {
        return fn.call(this, ...args);
      };
    }
    function myMap(arr, callBack) {
      let resultArr = [];
      for (let i = 0; i < arr.length; i++) {
        resultArr[i] = callBack(arr[i], i, arr);
      }
      return resultArr;
    }
    function wrapper(fn) {
      return function (...args) {
        console.log("");
        let res = fn.call(this, ...args);
        console.log(res);
        return res;
      };
    }
    function partialLeft(fn, ...outerArgs) {
      return function (...innerArgs) {
        let args = [outerArgs, innerArgs];
        return fn.apply(this, args);
      };
    }
    function memoize(fn) {
      let cache = new Map();
      return function (...args) {
        if (cache.has(args.toString())) {
          return cache.get(args.toString());
        }
        let key = args.toString();
        let result = fn.call(this, ...args);
        cache.set(key, result);
        return result;
      };
    }
    function add(arg0) {
      return function (arg1) {
        let res = arg0 + arg1;
        return function (arg2) {
          return res + arg2;
        };
      };
    }
    const calculator = {
      add(x, y) {
        return x + y;
      },
    };
    function tracemethode(o, m) {
      let orginal_methode = o[m];
      o[m] = function (...args) {
        let res = orginal_methode.call(this, ...args);
        console.log(args, "added");
        return res;
      };
    }
    function compose(f, g, h) {
      return function (...args) {
        return f.call(this, g.call(this, h.call(this, ...args)));
      };
    }
  };

//write this fuckers to practice function ideas so far
("myFilter");
("myMap");
`myReduce`;
`can_be_called_n_times`;
`can_be_called_after_n_times`;
`negate`;
`compose`;
`pipe`;
`findFirst`;
`groupBy`;
`myEvery`;
`mySome`;
`Counter`;
`Bank Account`;
` Logger`;
`Trace Method`;
`Call Counter`;
