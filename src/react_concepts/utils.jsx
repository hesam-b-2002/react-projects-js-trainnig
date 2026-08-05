export const Custom_Componant = ({ id, name, value, onInputChange }) => {
    console.log(id,name,value,onInputChange)
    return (
        <>
            <input
                id={id}
                name={name}
                value={value}
                onChange={(event)=>onInputChange(event)}/>
        </>
    )
}