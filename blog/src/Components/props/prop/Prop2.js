function Prop2(props){

    return(
        <div style={{backgroundColor:"skyblue"}}>
            <h1>hello{props.name}</h1>
            <h2>Email: {props.email}</h2>
            <h3>Address:{props.other.address}</h3>
            <h4>Mobile: {props.other.mobile}</h4>
        </div>
    )
}
export default Prop2;