import React from 'react'; 
import {Link} from 'react-router-dom';  //??
const Layout=(props)=>{     //
    const StyleSheet={ 
        width:'100vw',
        height:'100vh',
         backgroundColor:(props.location.pathname==='/first')?'#ff2E63':'#08D9D6', 
        display:'flex',
        alignItems:'center', 
        justifyContent:'center',
        flexDirection:'colum' 
    }
     return( 
         <div style={StyleSheet}> 
               <Link to ='/Home' > 點我連結HOME  </Link> 
               <Link to ='/first'>  點我連結第一頁  </Link> 
               <Link to ='/second' > 點我連結第二頁</Link> 
               {props.children} 
               
              
         </div>
      )
}
  export default Layout; 
    