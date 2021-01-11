
import React,{useState} from 'react';

const App=()=>{ 
    const[myname,setMyname]=useState('');  
    const[inc_val,setValue]=useState(10);
    return(
        <>
            <button onClick={()=>{setMyname('Hello world')}}>change my name </button>
            {myname}    
            <button onClick={()=> {
                if(inc_val>=0){ 
                   setValue(inc_val-1); 
                   if(inc_val==0)
                      setMyname('Happy New Year!')              
                }
                 
             }}>倒數:{inc_val} </button> 
            
            /*---<button onClick={()=>{setMyname('Hello world')}}>change my name </button>
            {myname}    
            <button onClick={()=> {
                if(inc_val>0){ 
                   setValue(inc_val-1); 
                   if(inc_val<=1)
                      setMyname('Happy New Year!')              
                }
                 
             }}>倒數:{inc_val} </button>-*//
         </>     
    )
}
export default App;