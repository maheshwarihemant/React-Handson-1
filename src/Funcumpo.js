import React from "react";
import App from "./App.css"
function Funcumpo(){
    return(
        <div className="Parent">
        <h1>This is Created using functional Component</h1>
        <p className="externalcss">This is done by external css</p>
        <p style={{color:"blue",fontSize:"20px"}}>this is done by inline css</p>
        </div>

    )

}
export default Funcumpo;