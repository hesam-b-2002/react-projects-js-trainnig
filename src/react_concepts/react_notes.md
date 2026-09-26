## react hooks review 

## React Props
    Props are just an object
    that we pass as the first argument to our component function.
    Props are values/information passed to a React component through JSX attribute objects:
    <img src ={} alt={} />
    src, alt are the predifined properties of the img tag
    we can use props to pass information from a parent component to a child component (down the dom tree)

`    //src/App 
        const App=()=>{
            let data = 'data
            return(
                <>
                    <child data ={data} />
                </>
            )
        }

**        this is essietially : 
            props = {
                data:data
            }**

    //src/child
    const child=(props)=>{
        return(
            <>
                props.data
            </>
        )
    }
    or better destruct it so u dont have to use fucking dot notation
    
    const child = ({data})=>{
        return(
            <>
                data
            </>
        )
    }`

<Parent>
    <Child />
</Parent>
    this is the same as :
    <Parent child={children}/>

## React State
    state is the information/value that may change over time 
    one way to set it is by using hooks 

       ` const[state,setState] = useState()`

    this notifies react scadule a re-render when the state changes ,  to re-render the components holding it ,
    plus the parts of the tree that depends on that state , or are the children of that component so they get re-renderd / reproduced 

## Callback Handlers in JSX
    define a function that the  parent component passes it down to a child comp via props then invoke it there 
    but implementation is in the parent component so the state is updated in the parent component
    
    //src/App 
`        const App=()=>{
            const[state,setState] = useState()

            let stateHandler = x => setState(x)

            return(
                <>
                    <child handler = { stateHandelr } />
                </>

            ) 
    }
    //src/child
    const child =({handler}) =>{
        return(
            <>
                <button onClick={(x)=>handler(x)}> <button/>
            </>
        )
    }
`

## Props Handling (Advanced)

   ###  spread & rest operator 
               **js spread operator** let's us spread all the key value pairs of an object to another one
               ** rest operator**  collects the rest of the key value pairs into one varible

 const App=()=>{
                    let arr =[
                        {a:a,b:b},
                        {a:a,b:b},
                        {a:a,b:b},
                        {a:a,b:b},
                    ]
                    return(
                        <>
                            arr.map((item)=>
                                <child {...item}/>)
                        </>
                    )
}

   ** rest operator**:
        const App=()=>{
            let arr = [{a:a,b:b},
                        {a:a,b:b},
                        {a:a,b:b},
                        {a:a,b:b},
            ]
            return(
                arr.map(({itemsKey , ...item})=>
                    <child key={itemsKey} {...item}/>)
            )
        }

const child=({a,b}){
    return(
        <>
            some bullshit
        </>
    )
}

## React Side-Effects

### mounting : 
    React creates the components's first instance , initializes it's state , runs it's hooks and appends elements to the dom.
### unmounting : 
    they are removed from the screen

>       (   Data fetching, setting up a subscription, manually changing the DOM in React ,
>       measuring HTML element’s width and height, or setting timers in JavaScript) are examples of side-effects

        useeffect(()=>{}) after every render 

        useEffect(()=>{},[]) after first render only
        useEffect(()=>{},[dependency1, dependency2]) runs after component is mounted and  dependency changes

        useEffect(()=>{
            //logic 
            return()=>{
                //clean up 
            }
        },[])     here clean up function can : remove event listeners , close webSockets , stop timers , unsubscribe etc ...

>     useEffect takes a function as input and returnes nothing , the main idea of useEffect is synchronize external logic with components

### re-render : 
    when react notices that some state changed in some component it will scadule a re-render for that component , nested comps get re-renderd untill it reaches end of the chain of comps if state update happens at the middle of dom tree comps down the tree get re-renderd
    **state update is the initial source of rerenders**
## React Custom Hooks (Advanced)

## React Fragments

## Reusable React Component

## Imperative React

## React Asynchronous Data	

## React Conditional Rendering

## React Advanced State(use_reducer( ))

## Data Fetching with React

## Data Re-Fetching in React

## Memorized Handler in React (Advanced)

## Explicit Data Fetching with React 

## Third-Party Libraries in React 

## Async/Await in React (Advanced)
