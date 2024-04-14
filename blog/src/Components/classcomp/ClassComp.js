import React,{Component} from "react";

class ClassComp extends Component{
    constructor(){
        super();
        this.state={
        // data:("Rajesh")
        data:(1)
        }
    }
    apple(){

        // this.setState({data:"Dogra"})
        // alert("Dogra")
        this.setState({data:this.state.data+1})
    }
    
    render(){
        return(
            <div>
                <h1>{this.state.data}</h1>
                <button onClick={()=>this.apple()}>update data</button>
            </div>
        );
    }
}
export default ClassComp;

