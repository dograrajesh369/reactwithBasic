import React,{useState} from 'react';
import './App.css';
import User from './Components/User/User';
import Class from './Components/Classcomponent/Class';
import Notus from './Components/jsx.js/Notus';
import Func from './Components/User/Fun';
import Var2 from './Components/Classcomponent/varcall/Var2';
import Statecomp from './Components/Statecomponent/Statecomp';
import Statecom from './Components/Statecomponent/Statecom';
import Classcomp from './Components/classcomp/ClassComp';
import Prop2 from './Components/props/prop/Prop2';
import Prop1 from './Components/props/prop/Prop1'
import Prop3 from './Components/props/prop/Prop3';

function App() {
  // this for props1(function))
  const[name,setName]=useState("Anil")
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
      </header>
      <User/>
      <Class/>
      <Notus/>
      <Func/>
      <Var2/>
      <Statecomp/>
      <Statecom/>
      <Classcomp/> 

      <div>
      <Prop2 name={"Rajesh"}email='rajesh@gmail.com' other={{address:'delhi',mobile:111}}/>
      <Prop2 name={"Anil"} email='anil@gmail.com' other={{address:'mumbai',mobile:222}}/>
      <Prop2 name={"Peter"}email='pater@gmail.com' other={{address:'kolkata',mobile:333}} />
      <Prop2 name={"Rohit"}email='rohit@gmail.com' other={{}}/>
      </div>
      
      <div>
        <Prop1 name={name}/>
        <button onClick={()=>{setName(" Sidhu")}}>update name</button>
      </div>

      <div>
        <Prop3 name='Raju' email='raj@gmail.com' other={{address:'delhi'}}/>
        <Prop3 name='meenu' email='meenar@gmail.com' other={{address:'mumbai'}}/>
        {/* if i want to change data i have to create button function */}
        {/* <button onClick={()=>this.setState({name:"raj"})}>update name</button> */}
      </div>
      
    </div>
    
  );
}

export default App;
