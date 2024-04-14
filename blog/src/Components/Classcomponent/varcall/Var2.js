import React from "react";

function Var2(){
    
    var data = "Rajesh";
    function apple(){
        data = "Nishu";
        alert(data);

    }
    return(
        <div className="App">
            <h1>{data}</h1>
            <button onClick={()=>apple(data)}>Click</button>
        </div>
    )

}
export default Var2;