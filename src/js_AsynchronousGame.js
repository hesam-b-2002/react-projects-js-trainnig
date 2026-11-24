import { resume } from "react-dom/server";

export const AsyncronusJS = () => {
  const onAggError = (errors, stack, message) => {
    let aggErr = new AggregateError(errors, message, stack);
    throw aggErr;
  };
  const delay = (ms, value) =>
    new Promise((resolve) => setTimeout(() => resolve(value), ms));
  const failAfter = (ms, reason) =>
    new Promise((_, rej) => setTimeout(() => rej(reason), ms));
  function run(label, promsie) {
    const start = Date.now();
    promsie.then(
      (value) =>
        console.log(
          label,
          " => was fulfilled with ",
          value,
          " after",
          Date.now() - start,
          "ms",
        ),
      (reason) =>
        console.log(
          label,
          " => was rejected with ",
          reason,
          " after",
          Date.now() - start,
          "ms",
        ),
    );
  }
  const onResolve = (p) => Promise.resolve(p);
  const onReject = (p) => Promise.reject(p);
  function withTimeout(promise, ms) {
    let fail = new Promise((___, reject) => {
      setTimeout(() => reject(promise), ms);
    });
    return Promise.race([promise, fail]);
  } // promise fulfilled or is rejected after ms
  async function firstSuccess(params) {
    let promiseArr = await params.map((param) => param());
    return Promise.race(promiseArr);
  } // fulfills with the first param to fulfill

  async function loadAll(params) {} // returns a promise that fulfills with the object {ok:[],failed:[]}
  async function sequentiall(params) {} // runs couple of functions(they return promises) sequentially

  async function paralell(params) {} // runs couple of functions(they return promises) sequentially
  //  write them ur self :

  function retry() {}

  // fulfills with the fulfilled value of the arrey async tasks passed tpo it , rejects with one element rejecting
  function myAll(asyncTasks) {
    let p = Promise.resolve(),
      results = [];
    for (let promise of asyncTasks) {
      p = p
        .then(() =>
          onResolve(promise)
            .then((r) => results.push(r))
            .then(() => onResolve(results)),
        )
        .catch((r) => onReject(r));
    }
    return p;
  }

  // returns a promise that settles wiht the first promise (param) to settle(fulfill/reject)
  // what if i call all the promises sequntially , see which one fulfills or rejects faster and return that one  , trace their completion time?
  function myRace(promises) {
    let result = [];
    let p = Promise.resolve();
    // im gonna go through the promises and resolve them one by one in order of completion not the order they are orginally in
    for (let promise of promises) {
      p = onResolve(promise)
        .then(
          (success) => result.push(onResolve(success)),
          (failed) => result.push(onReject(failed)), //this way they get added into a arrey as resolved or rejected promises
        )
        .then(() => onResolve(result[0]));
    }
    return p; // i spent three days trying to solve this , all i needed was to assign the resolved promise to p ,
    //  then return p , so p would return as an undefined pendong promise then after my async operation is over would get assigned a settled promise
  }
  // myAny() :
  // returns a promise that fulfills with the first promise one to fulfill , rejects if all the async params reject
  // rejection output :
  // AggregateError: All promises were rejected
  // errors
  // : (3) ['a', 'b', 'c']
  // message :"All promises were rejected"
  // stack:"AggregateError: All promises were rejected"

  function myAny(promises) {
    let success = [],
      fail = [],
      p = Promise.resolve();

    for (let promise of promises) {
      p = onResolve(promise).then(
        (s) => {
          success.push(onResolve(s));
          return onResolve(success[0]);
        },
        (f) => {
          fail.push(f);
          if (fail.length === promises.length) {
            return onAggError(fail, "All promises were rejected");
          }
        },
      );
    }

    return p;
  }
  async function myAllSettled(promises) {
    let result = [];
    let p = Promise.resolve();
    for (let promise of promises) {
      await onResolve(promise).then(
        (value) => result.push({ [`status`]: `fulfilled`, [`value`]: value }),
        (reason) => result.push({ ["status"]: `rejected`, [`reason`]: reason }),
      );
    }
    return p.then(() => onResolve(result));
  }
};
