import React,{Component} from "react";
import App from "./App.css"
 class Classcompo extends Component{
    render(){
        return(
            <div className="Parent2">
            <h1> This is created using class Component</h1>
            <p className="externalcss">This is done by external css</p>
        <p style={{color:"blue",fontSize:"20px"}}>this is done by inline css</p>
            </div>
        )
    }

  
    
}
export default Classcompo;
