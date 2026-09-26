# Re-rendering
* how does react efficiently update the `DOM tree` when state changes?

## What Can Trigger a Re-render?

* State Updates
* Parent Re-renders
* Context Changes
* External Store Updates
* Force Updates
* Other Sources of Updates

## Parent Re-renders and Child Components

* Do Children Re-render When Their Parent Re-renders?
* Why Unchanged Props Don’t Automatically Prevent Re-renders
* What Actually Prevents a Child Re-render?

## Reconciliation
* reconciliation vs diffing : 
  * diffing is the concept of comparing two DOM trees 
    * information that goes to the browser: which DOM elements need to be
      updated, removed, or added. This is known as the "reconciliation"
      algorithm.
* How React Decides What to Update :
  * elements of the same type : 
    * if they have the same type only updates the attr / properties that changed 
  * elements with diffrent type : 
    * tears down the whole tree and rebuild a new one 
* Updating a Fiber in Place
  * after an update (before commit phase during render phase ) react updates the  work in progress tree by reconciling between the currnet fiber tree and the new elements fibers  ,  react flags the relevent fiber that needs work 

## Keys and Component Identity

* How `key` Affects Reconciliation
 
 <ul>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>

<ul>
  <li key="2014">Connecticut</li>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul> it can help preserve children identity across re-renders 

* Why Array Indexes Make Bad Keys
  * react may associate wrong data with wrong elements 
* Reordering, Inserting, and Removing with Index Keys
  * if index is used as keys insertion , deletion ... causes keys to be changed which deafets the idea of stablity that comes with using keys 

## Changing Keys and Forced Remounts

* Why Changing a `key` Causes Unmount + Remount
  * react diffing process relies on fibers type / key properties for updates changing keys guarantees full rebiuld 
* Using Keys to Reset Component State
  * with a full rebuild states are rebuilt too  

## How React Skips Work

* Skipping Work After an Update Is Triggered
* Memoization and Bailouts
* Two Ways React Can Avoid Re-rendering

## `useMemo` and `useCallback`

* What `useMemo` Actually Prevents
* What `useCallback` Actually Prevents
* Why They Don’t Automatically Stop Re-renders
* When Memoization Actually Matters

## Batching State Updates

* What Batching Means
* Batching in React 17
* Automatic Batching in React 18
* `setState` Inside `setTimeout`
* `setState` Inside Promises
* Native Event Listeners and Batching

## Context and Re-renders

* Why Context Changes Re-render Consumers
* Why Reading Only Part of a Context Doesn’t Help
* Strategies for Avoiding Unnecessary Context Re-renders

## Why Render Logic Must Be Pure

* React Can Render and Discard the Result
* StrictMode and Repeated Rendering
* Interrupted Rendering and Transitions
* Why Side Effects Don’t Belong in Render