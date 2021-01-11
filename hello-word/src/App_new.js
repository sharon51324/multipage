import React, { Component } from 'react'; 
import Baby  from  './Baby' 
class App extends Component{ 
    constructor(props){ 
        super(props); 
        this.state={ 
            rate:"",
            isBorn:true, 
            count:0
        };
         this.handleClick = this.handleClick.bind(this); 
         this.spawnBaby=this.spawnBaby.bind(this);  
         this.handleClick2=this.handleClick2.bind(this); 
    }  
    handleClick(){ 
        this.setState({isBorn:!this.state.isBorn}) 
    } 
    spawnBaby(){ 
        if(this.state.isBorn) return <Baby/>
    }  
    handleClick2(){ 
        this.setState({count:this.state.count+1}) 
    }  
 
    //shouldComponentUpdate(nextProps,nextState){
    //     return true;
    //}  
     
    //componentDidUpdate(preProps,prevState,snapshot){ 
     //   console.log('*** componentDidupdate');
    //}

        render(){
            return (
                <div>
                  <button onClick={this.handleClick}> 
                    {(this.state.isBorn===true)?"讓他回肚子裡":"讓他生"}
                  </button>  {this.spawnBaby()}  
                  <button onClick={this.handleClick2}>CLICK ME</button> <br/>    
                  {this.state.count}   
                </div>
            ) 
        }
} 
export default App;