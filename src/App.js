import React,{useState} from 'react';
import './App.css';
import Message from './Message.js';

function App(){
  let[ismorning,setmorning]=useState(false);
  let[count,setcount]=useState(1);
  return(
  <div className = {`night ${ismorning ? `day`:``}`}>
  <Message time = {ismorning ? 'day':'night'}/>
  <h1>the value of counter is {count}</h1>
  <button onClick={()=>setcount(count+1)}>
    start
  </button>
  </div>
  );
}

export default App;