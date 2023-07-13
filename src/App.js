import React,{useState} from "react";
import Funcumpo from "./Funcumpo";
import Classcompo from "./Classcompo"
import app from "./App.css"

function App (){
  const [fState,setFState] = useState(false)
  const [cState,setCState] = useState(false)
  
  return (
    <>
    <h1 className="h1">Styling using Functional and Class Components</h1>
    <button className="function"   onClick={()=>setFState(!fState)}>To See Styling in function Components </button>
    <button className="class"  onClick={()=>setCState(!cState)}>To See Styling in Class Components </button>
    
    {/* {fState?<Funcumpo />: " "} */}
    {fState && <Funcumpo />}
    {/* {cState?<Classcompo/>:" " } */}
    {cState && <Classcompo/>}
    

    </>

  )
}
export default App