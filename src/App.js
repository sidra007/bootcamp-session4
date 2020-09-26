import React,{useState} from 'react';
import './App.css';
import Message from './Message.js';

function App(){
  let[ismorning,setmorning]=useState(false)
  return(
  <div className = {`night ${ismorning ? `day`:``}`}>
  <Message time = {ismorning ? 'day':'night'}/>
  </div>
  );
}

export default App;