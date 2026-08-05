export const Functoins_what_do_they_know_do_they_know_things_lets_find_out =
  () => {
    function myFilter(arrey, callBack) {
      let i = 0,
        j = 0,
        resultArr = [];

      while (i < arrey.length) {
        let callRes = callBack(arrey[i], i, arrey);
        if (callRes === true) {
          resultArr[j++] = arrey[i];
        }
        i++;
      }
      return resultArr;
    }
    function myMap(arrey, callBack) {
      let i = 0,
        resArr = [];
      while (i < arrey.length) {
        resArr[i] = callBack(arrey[i], i, arrey);
        i++;
      }
      return resArr;
    }
    function myReduce(arrey, callBack, initialAcc) {
      let res,
        i = 0;
      while (i < arrey.length) {
        if (initialAcc === undefined) {
          res = callBack(arrey[i], arrey[i], i, arrey);
        } else if (initialAcc) {
          res = callBack(arrey[i], arrey[i], i, arrey);
          res = callBack(initialAcc, res);
        }

        i++;
      }
      return res;
    }
    function can_be_called_n_times(f, n) {
      let callCount = 0;
      return function (...args) {
        if (callCount < n) {
          return f.call(this, ...args);
        } else {
          console.log("cant be invoked more");
        }
        ++callCount;
      };
    }
    function can_be_called_after_n_times(f, n) {
      let callCount = 0;
      return function (...args) {
        if (callCount < n) {
          console.log(`this function should be called ${n} times`);
        } else {
          return f.call(this, ...args);
        }
        callCount++;
      };
    }
    function findFirst(arr, predict) {
      let i = 0,
        res;
      while (i < arr.length) {
        let predict_verdict = predict(arr[i]);
        if (predict_verdict === true) {
          res = arr[i];
          break;
        } else if (predict_verdict !== false) {
          return null;
        }
        i++;
      }
      return res;
    }
    function myEvery(arr, predict) {
      let i = 0,
        predictVerdict = true;
      while (i < arr.length) {
        if (predict(arr[i]) === false) {
          predictVerdict = false;
          break;
        }
        i++;
      }
      return predictVerdict;
    }

    function mySome(arr, predict) {
      let i = 0,
        predictVerdict = false;
      while (i < arr.length) {
        if (predict(arr[i]) === true) {
          predictVerdict = true;
          break;
        }
        i++;
      }
      return predictVerdict;
    }
    function counter() {
      let count = 0;
      return function () {
        return count++;
      };
    }
    function bankAcount() {
      let balance = 0;
      return {
        depo: function (cash) {
          balance += cash;
          return balance;
        },
        withdraw: function (cash) {
          balance -= cash;
          return balance;
        },
        seeBalance: function () {
          return balance;
        },
      };
    }
    function logger(f) {
      return function (...args) {
        try {
          f.call(this, ...args);
          console.log(`called function ${f.name} with ${args}`);
        } finally {
          console.log(`call ended `);
        }
      };
    }
    function traceMethode(o, m) {
      let org = o[m];
      o[m] = function (...args) {
        console.log(`called methode : `, org.name);
        let res = org.call(this, ...args);
        console.log(res, `is returned `);
        return res;
      };
    }
    function callCounter(f) {
      let callCount = 0;
      return function (...args) {
        ++callCount;
        console.log(callCount);
        return f.call(this, ...args);
      };
    }
    function partial(f, ...outerArgs) {
      // the outer args are the one that presisit over multiple invocations
      return function (...innerArgs) {
        // the inner args is the interchangeable varible
        const finalArgs = [...outerArgs, ...innerArgs];
        return originalFunction.apply(this, finalArgs);
      };
    }
    //Practice: Create specialized price calculators
    function discount(price, percentage) {
      return price - price * (percentage / 100);
    }
    function tax(price, percentage) {
      return price + price * (percentage / 100);
    }
    function calculateFinalPrice(tax_discount, ...tax_dicount) {
      return function (...price) {
        let args = [...price, ...tax_dicount];
        return tax_discount.apply(this, args);
      };
    }

    console.log();
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
