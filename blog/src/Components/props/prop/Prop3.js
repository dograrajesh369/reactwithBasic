import React,{Component} from "react";

class Prop3 extends Component{

    render()
    {
        return(
            <div style={{backgroundColor:"green"}}>props with class Component
                <h1>{this.props.name}</h1>
                <h2>{this.props.email}</h2>
                <h3>{this.props.other.address}</h3>
            </div>
        );
    }
}
export default Prop3;