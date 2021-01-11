import React from 'react'; 
import {Link} from 'react-router-dom';

const SecondPage=(props)=>{     //
    
     return( 
         <div > 
               {props.match.params.id} 
             <h1 style= {{color:'white,fontFamily:Microsoft JhengHei'}}>我是第二頁</h1>
         </div>
      )
}
  export default SecondPage; 
   