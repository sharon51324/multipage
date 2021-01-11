import React from 'react'; 
import {link} from 'react-router-dom'; 

const FirstPage=()=>{ 
    const StyleSheet={ 
        width:'100vw',
        height:'100vh',
         backgroundColor:'#ff2E63', 
        display:'flex',
        alignItems:'center', 
        justifyContent:'center',
        flexDirection:'colum' 
    }
     return( 
         <div style={StyleSheet}> 
            <Link to='/second'>第二頁</Link>
            <h1 style= {{color:'white,fontFamily:Microsoft JhengHei'}}>我是第一頁</h1>
         </div>
      )
}
  export default FirstPage; 
   