import { useRef } from "react"

export const SearchField = ({ searchTerm, searchTermHandler }) => {
    return (
        <>
            <input
                type="text"
                value={searchTerm}
                onChange={(e)=>searchTermHandler(e)}
            />
        </>
    )

}