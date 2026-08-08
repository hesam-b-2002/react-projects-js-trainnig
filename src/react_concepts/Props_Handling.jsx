import { B } from "./children/react_props"
import { Data } from "./assets"
import { useEffect, useState } from "react"
export const A = ({ data}) => {
    //  pass props to the child componant
    //  write a handler function
    //  write a function that handles side effects
    //  a search custom componant


    return (
        <>
            {
               data.map((pokemon) => {
                    return <B pokemon={pokemon.name} key={pokemon.url}/>
                })
            }
        </>
    )
}