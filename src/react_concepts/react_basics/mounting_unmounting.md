
# React Rendering & Lifecycle

## React’s Core Building Blocks

* React Element vs Component vs Fiber vs DOM Node
  


  * ### react Element : 
a plain js object describing what to show , freshly created on render and discarded , treated as immutable description 
  * ### react component :
the function / class , defines reusable ui presists for the life of the application / module , returnes react Elements 
  *  ### DOM Node :
a generic object in the dom , lives as long as that particillar node reamin in the dom 
  *  ### DOM Element :
the actual browser object that represents an HTML element 

* #### DOM Element vs DOM Node : 
    <h1> hello </h1> : h1 and 'hello' are both dom nodes but only h1 is a dom element

* ### react-fiber-architecture in mounting :
**fiber** is a plain JS object , created initially in the mounting phase per component
react's own internal tree of objects ,  preserved through re-renders ,  determines
identity , tree position , content , instance , scheduling - priority of updates ,



## The Three Phases of a React Update

* Trigger Phase
  * State Updates
  * Parent Re-renders
  * Context Changes
  * External Store Updates
  * Force Updates
  * Other Sources of Updates // they trigger an update
* Render Phase
  * render decides what SHOULD be shown; it's in the commit phase  that actually react touches the browser.
  * render is pure computation
  * react calling component to show shit in the browser 
    * on initial render react calls the root 
    * on subsequent re-renders , react calls the components that triggerd a re-render 
      * the process is recusrsive , react calls the component and their children and their children ...
      * during re-render react calculates to see if anything changed (won't give a shit till commit phase)
* Commit Phase
  * react modifies the DOM 
    * in mount : react calls appendChild() DOM APi to put all the DOM nodes it has on screen 
    * in re-render : react does the minimal operations (during render) to make the dom match the latest render output **React only changes the DOM nodes if there’s a difference between renders .**

## Render vs DOM Update vs Browser Paint

*  re-render  doesn't Necessarily Change the DOM , an state update can have no visual effect on the
 
   app ,  a Render can Produce Zero Visible Change , rendering and commiting are seperate , bc

   react diifs  new output against what (work in progress fiber tree) vs what already been commited (current fiber tree )and only writes what has changed 
  
* DOM Change Doesn’t Necessarily Mean an Immediate Repaint :
  
  * A DOM mutation basically promises a future repaint , browser doesn't repaintright  after 
   every single dom mutation , it combines everyThing that happend on the current task and repaints once on the next frame 
 


## Where React State Actually Lives

*  `useState` Values Live Between Renders 
  
*   local varibles live during function execution 
  

# Mounting


* Parent Rendering vs Child Rendering : 
  * react is extremly lazy , it starts the shit work from the fiber that had the state change and it only goas down from there 
## The Mounting Order
*  DOM Insertion ---> notes above 
* Ref Attachment    
  * access to the DOM elements managed by React : 
  

const myRef = useRef(null)

  < input ref = {myRef} /> // declare a ref , then passs it as a jsx attr to a tag , this puts input's DOM Node into myRef.currnet
    myRef will  retrun an object with a single 'currnet' property 
  * refs are like state , the live between re-renders but they don't trigger a re-render  


* ### `useLayoutEffect`
  * a version of useEffect that runs before brwoser re-paint can block repaint till it gets it's shit togather
  *  useLayoutEffect  only for "measure the DOM, then immediately adjust layout from that measurement, before anyone sees the wrong version" that tracks since refs get attached then browser repaints 
* ###  Browser Paint
* ###  `useEffect`


* Update
  ↓
Render
  ↓
Commit
  │
  DOM changes
  | DOM changes
  ref attachment
  |
  useLayoutEffect
  └── useLayoutEffect
  ↓
Browser paint
  ↓
Remaining Effects
  └── useEffect
  ### DOM gets mutated first, refs get attached next (so `.current` already points at the real node), and only then do layout effects run — exactly why it's safe to read `ref.current` inside one. Three sequential steps, not three parallel ones.

## `useLayoutEffect` vs `useEffect`

* Synchronous Effects Before Paint
* Passive Effects After Paint
* When `useLayoutEffect` Actually Matters

## Lazy State Initialization

* `useState(() => expensive())` vs `useState(expensive())`
  * to avoid expensive computing on evey render use lazy initialiazation 

    `function init(){ return (0) }`
    `const [num,setNum] = useState(init())` `// to resolve the intial value init is called by js on every render `
    * lazy Initialization : 
        `useState(init) or useState(()=>{return init()})` `// passing a refrence of a function instead of an invocation makes useState call init once on initial render only `
    * the diffrence is js has to deal with this invocation init() then does the whole react stuff on every render before react does it's thing , whereas in lazy-initiliazation react decides to evaluate init refrence at initial render 
    * by passing a refrence instead of invocation react will only call the function at the initial render instead of executing it on every render 
    * it's best used for expensive computation :
      * fetching date 
      * initialization of complex date structure 
      * performing complex caculation 
    * avoid calling a function directly , instaed pass the refrence (no paranthesis)


## Effect Ordering on Mount

* Child Effects vs Parent Effects
* Layout Effect Ordering
* Passive Effect Ordering
  * buttom up first :   
   output : 
 `` child effects ran
  parent effects ran
  child passive ran
  parent passive ran``


## StrictMode and Double Invocation

* Mount → Cleanup → Mount
* What StrictMode Is Testing
* Development vs Production Behavior



# Unmounting

## What Causes a Component to Unmount?

* Parent Removal
* Conditional Rendering
* Key Changes
* Type Changes
* Reconciliation Replacements
* Other Causes of Unmounting

## Effect Cleanup

* Cleanup on Unmount
* Cleanup When Dependencies Change
* Cleanup Before the Next Effect Runs

## Cleanup Ordering

* Parent vs Child Cleanup
* What Happens When an Entire Subtree Unmounts

## What Happens to State After Unmount?

* Why Local State Is Destroyed
* Unmount vs Hide
* Preserving State Across Hide/Show
* Lifting State Up
* External Stores
* Visibility-Based Strategies

## `setState` After Unmount

* Why Updating an Unmounted Component Is a Problem
* Async Callbacks and Stale Components
* Cancelling Fetches and Subscriptions
* Cleanup as the Real Fix

# Putting It All Together

## The Complete `setState()` → Pixels Pipeline

* Calling `setState()`
* Scheduling the Update
* Batching
* Trigger Phase
* Render Phase
* Reconciliation
* Commit Phase
* DOM Mutations
* Ref Updates
* Effect Cleanup
* Layout Effects
* Browser Paint
* Passive Effects
* Pixels on Screen

# Advanced React Lifecycle

## Errors During Rendering

* What Happens When a Child Throws?
* Error Boundaries
* What Gets Unmounted?
* What Survives the Error?

## Suspense and Component Mounting

* What Happens When a Component Suspends?
* Is a Suspended Component Considered Mounted?
* Suspended vs Unmounted

## Portals and the Component Tree

* Portals vs the DOM Tree
* Portals vs the React Tree
* Effect Ordering in Portals

## Hydration

* Server-Rendered HTML
* Hydrating Existing DOM Nodes
* Attaching React Behavior to Existing Markup
* Hydration vs Client-Side Mounting

## Class Components and the Same Lifecycle Model

* `componentDidMount`
* `componentDidUpdate`
* `componentWillUnmount`
* Class Components Through Trigger → Render → Commit

# Final Mental Model

## React’s Component Lifecycle at a Glance

* Trigger → Render → Commit
* Mount → Update → Unmount
* Render ≠ DOM Mutation
* DOM Mutation ≠ Browser Paint
* State Lives Outside the Function Body
* Identity Determines Whether State Is Preserved
* Effects Belong to the Commit Phase
