import React,{Component} from 'react';
class App extends Component{ 
    constructor(props){
         super(props);     //super上一層  this指定class李的
        this.state={ 
            maneme:'',   
            inc_val:10   
        }
    this. changeMyName= this. changeMyName.bind(this); 
    this. inValue= this. inValue.bind(this);
    }
    changeMyName(){ 
        this.setState({myname:'Hello world'});
    }
    inValue(){
         if(this.state.inc_val>0)  
            this.setState({inc_val: this.state.inc_val-1},()=>{ 
                if(this.state.inc_val==0)    
                this.setState({myname:'Happy New Year!'}) 
            })
        else 
            this.setState({myname:'Happy New Year!'})
    }
    render(){ 
        return( 
            <> 
            <button onClick={this.props.handleClick}> {this.props.name}</button>  
            <h1 id='show-area'>{this.props.children}</h1>  
            <button onClick={this.props.changeName} value = 'here'>Myname</button> 
            <button onClick={this.changeMyName} >change My name</button ><br/> 
            {this.state.myname} 
            <button onClick={this.inValue} >倒數{this.state.inc_val}</button >
            </>
        )
    }
 }
export default App;