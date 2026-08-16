## react hooks review 

## React Props
    Props are values/information passed to a React component through JSX attributes:
    <img src ={} alt={} />
    src, alt are the predifined properties of the img tag
    we can use them to pass information from a parent component to a child component 

`    //src/App 
        const App=()=>{
            let data = 'data
            return(
                <>
                    <child data ={data} />
                </>
            )
        }
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

## React State
    state is the information/value that changes over time 
    one way to set it is by using hooks 

       ` const[state,setState] = useState()`

    this notifies react to rerender when the state changes over time to rerender the components holding it ,
    plus the parts of the tree that depends on it 

## Callback Handlers in JSX
    define a function the parent component pass it down to a child comp via props then invoke it there 
    but implementation is in the parent component
    
`    //src/App 
        const App=()=>{
            const[state,setState] = useState()

            let stateHandler = x => setState(x)

            return(
                <>
                    <child handler={stateHandelr} />
                </>

            ) 
    }
    //src/child
    const child =({handler}) =>{
        return(
            <>
                <button onclick={(x)=>handler(x)}> <button/>
            </>
        )
    }
`

## Props Handling (Advanced)

   ###  spread & rest operator 
                **js spread operator** let's us spread all the key value pairs of an object to another one
               ** rest operator** happens on the right side of am assignment and is used to seperate a value from others 

 `const App=()=>{
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
}`

   ** rest operator**:
`        const App=()=>{
            let arr = [{a:a,b:b},
                        {a:a,b:b},
                        {a:a,b:b},
                        {a:a,b:b},
            ]
            return(
                arr.map((itemsKey , ...item)=>
                    <child key={itemsKey} {...item}/>)
            )
        }
`
const child=({a,b}){
    return(
        <>
            some bullshit
        </>
    )
}






## React Side-Effects

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
