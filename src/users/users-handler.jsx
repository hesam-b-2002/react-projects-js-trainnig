export const DisplayHandler=({id,name,age,isAdmin})=>{
    return(
        <>
            <span key={id}>
                <p>{name}</p>
                <p>{age}</p>
                <p>{ isAdmin? 'admin' :'user'}</p>
            </span>
        </>
    )
}