import React,{useState} from 'react';
import './App.css'

function App(){
  let[morning,setmorning]=useState(false)
  return(
<div className={`night ${morning ? `day`:`` }`}>
  
  <h1>the time is {morning? 'morning':'night'}</h1>
  <button onClick={()=>setmorning(!morning)}>
    time
  </button>
</div>
  );
}
export default App;