function User(props)
{
    return(
       
        <div>
            <span>{props.data.name}</span>
            <span>{props.data.Email}</span>
            <span>{props.data.Id}</span>
        </div>
    )
}
export default User