function User()
{
    function test(){
        alert('This is test click');
    }
    return(
        <div>
            <h1>Function Component example</h1>

            {/* This is how we can call button option */}
            
        <button onClick={test}>Click Me</button>
        </div>
    );
}
export default User;