# Re-rendering

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
  * children dont get re-renderd they get reproduced so if u define children in comp A , pass them don to comp B , re-render B , the children dont get re-renderd , this is the paaing components as props pattern 

## Reconciliation

* How React Decides What to Update
* Updating a Fiber in Place
* Tearing Down and Rebuilding a Fiber

## Keys and Component Identity

* How `key` Affects Reconciliation
* Why Array Indexes Make Bad Keys
* Reordering, Inserting, and Removing with Index Keys
* Preserving State Through Stable Keys

## Changing Keys and Forced Remounts

* Why Changing a `key` Causes Unmount + Remount
* Using Keys to Reset Component State

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