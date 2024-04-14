function Statecomp(){
    let data = "Rajesh";
    function updateData(){
        data = "Dogra"
        alert(data)
    }
    console.warn("-------------------------")
    return(
        <div>

            <h1>{data}</h1>
            <button onClick={updateData}>Update Profile</button>
        </div>
    );
}
export default Statecomp;