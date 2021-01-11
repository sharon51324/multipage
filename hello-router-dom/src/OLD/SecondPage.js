import React from 'react'; 
import {link} from 'react-router-dom'; 

const SecondPage=(props)=>{    //不懂為何props要加在這裡
    const StyleSheet={   
        width:'100vw',
        height:'100vh',
         backgroundColor:'#08D9D6', 
        display:'flex',
        alignItems:'center', 
        justifyContent:'center',
        flexDirection:'colum' 
    }
     return( 
         <div style={StyleSheet}> 
               {props.match.params.id} 
               <a href ='/#/'>第一頁</a> 
               <Link to='/'>第一頁</Link>
              <h1 style= {{color:'white,fontFamily:Microsoft JhengHei'}}>我是第二頁</h1>
         </div>
      )
}
  export default SecondPage; 
   