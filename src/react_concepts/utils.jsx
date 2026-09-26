import { useEffect, useRef } from "react"
export const Custom_Input = ({ name, value, onChangeInput }) => {
    //   console.log(value)

    return (
        <>
            <h4>{name}</h4>
            <input
                type="text"
                value={value}
                onChange={onChangeInput}
            />
        </>
    )
}