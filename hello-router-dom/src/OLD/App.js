import React from 'react'; 
import {HashRouter,Route} from 'react-router-dom'; 
import FirstPage  from './FirstPage';
import SecondPage from './SecondPage'; 
 
const App=()=>{
     return( 
         <HashRouter> 
              <switch>
              <Route exact path = '/' component={FirstPage}/> 
               
              <Route path='/second:id?/' component={SecondPage}/> 
              </switch>
         </HashRouter>
     )
} 
export default App;
