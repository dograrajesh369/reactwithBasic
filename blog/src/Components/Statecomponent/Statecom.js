import { useState } from "react";

function Statecom() {
    const [data, setData] = useState("Rajesh");
    function updateData() {
        setData("Dogra")
    }
    return (
        <div>
            <h1>{data}</h1>

            <button onClick={updateData}>update</button>
        </div>

    );
}
export default Statecom;