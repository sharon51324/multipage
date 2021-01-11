import React,{useState}from 'react';
 
const Home=()=>{
    const [account,setAccount]=useState(''); 
    const [textarea,setTextArea]=useState(''); 
    const [selval,setselValue]=useState('');
    return(
     <div> 
          
         <input type='text' placeholder='請輸入帳號' value={account}  
         onChange={(e)=>{setAccount(e.target.value)}}/> 
           
         <div>
             目前帳號:{account} 
         </div> 
         <bottun onClick={()=>{setTextArea('')}}>取得新帳號</bottun> <br/> 
         <textarea row='5' cols='40' value={textarea} 
                onChange={(e)=>{setTextArea(e.target.value)}}></textarea><br/>
         <bottun onClick={()=>{setTextArea('')}}>Clear TextArea</bottun>
         <div><pre>{textarea}</pre></div> 
         <select value={selval} onChange={(e)=>{setselValue(e.target.value)}}> 
            <option value='123'>123</option> 
            <option value='1888'>1888</option>  
         
        </select> 
        <div>目前選項:{selval}</div>
        <bottun onClick={()=>{setselValue('786')}}>改為786改為786</bottun>
     </div> 
    )
} 
export default Home; 