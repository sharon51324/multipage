import React from 'react'; 
import {HashRouter,Route,Switch} from 'react-router-dom'; 
import FirstPage  from './FirstPage';
import SecondPage from './SecondPage';  

import Layout from './Layout'; 
import Home from './Home';
 
const App=()=>{
     return( 
         <HashRouter> 
              <Switch>  
                 <Route  path = '/Home' component={Home}/>    
               <Layout>
                 <Route exact path = '/first' component={FirstPage}/> 
                 <Route path='/second:id?' component={SecondPage}/> 
               </Layout>
              </Switch>
         </HashRouter>
     )
} 
export default App;
