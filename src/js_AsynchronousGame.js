import { resume } from "react-dom/server";

export const AsyncronusJS = () => {
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
  function withTimeout(promise, ms) {
    let p = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("times up")), ms),
    );
    return Promise.race([promise, p]);
  } // promise fulfilled or is rejected after ms
  function firstSuccess(params) {
    return Promise.any(params.map((param) => param()));
  } // fulfills with the first param to fulfill
  async function loadAll(params) {} // returns a promise that fulfills with the object {ok:[],failed:[]}
  async function sequential(params) {
    let results = [];
    for (let fn of params) {
      let res = await fn();
      results.push(res);
    }
    return results;
  } // runs couple of functions(they return promises) sequentially
  async function paralell(params) {
    let p = await Promise.all(params.forEach((param) => param()));
    return p;
  } // runs couple of functions(they return promises) sequentially

  //  write them ur self :

  function retry() {}

  const arr = [failAfter(20, "a"), failAfter(15, "b"), failAfter(25, "c")];
  const onResolve = (p) => Promise.resolve(p);
  const onReject = (p) => Promise.reject(p);
  // fulfills with the fulfilled value of the arrey async tasks passed tpo it , rejects with one element rejecting
  function myAll(asyncTasks) {
    let p = Promise.resolve(),
      res = [];
    for (let promise of asyncTasks) {
      p = p.then(
        () =>
          onResolve(promise)
            .then((r) => res.push(r))
            .then(() => onResolve(res)),
        (err) => onReject(err),
      );
    }
    return p;
  }
  // returns a promise that settles wiht the first promise (param) to settle(fulfill/reject)
  // what if i call all the promises sequntially , see which one fulfills or rejects faster and return that one  , trace their completion time?
  function myRace(promises) {
    let p = Promise.resolve(),
      err = [],
      res = [];

    for (let promise of promises) {
      p = onResolve(promise).then(
        (r) => res.push(r),
        (rej) => {
          err.push(rej);
          return onReject(err[0]);
        },
      );
    }

    return p.then(() => onResolve(res));
  }
  // returns a promise that fulfills with the first promise one to fulfill , rejects if all the async params reject
  // rejection output :
  // AggregateError: All promises were rejected
  // errors
  // : (3) ['a', 'b', 'c']
  // message :"All promises were rejected"
  // stack:"AggregateError: All promises were rejected"
  const onAggError = (errors, stack, message) => {
    stack = "AggregateError: All promises were rejected";
    message = "All promises were rejected";
    let aggErr = new AggregateError([errors], message, stack);
    throw aggErr;
  };
  function myAny(promises) {
    let p = Promise.resolve(),
      res = [],
      err = [];

    for (let promise of promises) {
      p = onResolve(promise).then(
        (r) => res.push(r),
        (rej) => {
          err.push(rej);
          if (err.length === promises.length) {
            console.log(err.length);
            return onReject(onAggError(err));
          }
        },
      );
    }

    return p.then(() => onResolve(res[0]));
  }
  function myAllSettled(promises) {
    let p = Promise.resolve(),
      res = [];
    for (let promise of promises) {
      p = onResolve(promise).then(
        (r) => res.push({ [`status`]: "fulfilled", [`value`]: r }),
        (rej) => res.push({ [`status`]: "rejected", [`reason`]: rej }),
      );
    }
    return p.then(() => onResolve(res));
  }
};
