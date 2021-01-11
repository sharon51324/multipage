import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import App from './App2'; 
//import App from './app4';
import TESTfunction from './TESTfunction.js';
import reportWebVitals from './reportWebVitals'; 
import App from './App_new';
//import Baby from './Baby';
  
const printMessage=()=>{ 
  document.getElementById('show-area').innerHTML='我被按到了QAQ按到了QAQ';
} 
 
const changeName=(newName)=>{ 
  name=newName.target.value; 
  console.log('hey!'+name);
}
var name='舊的明子'  //VAR一定要

ReactDOM.render(
  /*-<React.StrictMode>
    <App />
  </React.StrictMode>,-*/  
//<TESTfunction name={"co "} handleClick={printMessage}>來~按這邊</TESTfunction>,
/*-<App name={'happy'} handleClick={printMessage} >CCC</App>,  -*/    
//<Baby dad={'Change'}/>,  
<div> 
  <App /> 
  <div id="talk"></div>
</div>,
document.getElementById('root')
);


reportWebVitals();
 
