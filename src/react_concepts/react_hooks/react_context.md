# How Context can help ?

**Context lets components pass information deep down without explicitly passing props.**
they allow us to do is escape that tree of
components and, instead of passing data through props, we can pass it
directly from the component at the very top to the component at the
bottom.

## createContext():

    createContext({defult value}) is declared outside of any component , returns a context object

## useContext() :

    useContext( ` create context declared varible ` ) is used inside the components to read the provider's value

## <someContextProvider/>:

    <someContextProvider value={`useContext declared varible`}/>
        <children/>
    </someContextProvider>

**now all children of the provider recive the value and can read it with useContext() without eplicitily passing props**
