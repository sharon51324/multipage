import React , {Component} from 'react'; 
class Baby extends Component {  
    constructor(props){ 
        super(props); 
        this.state ={ 
            isRightDad:true,  
            //isGetDad:false,
        }  

        ///this.ajaxSimulator=this.ajaxSimulator.bind(this) //??
    } 
static getSerivedStateFromOrops(props,state){ 
     console.log('rgetSerivedStateFromOrops') 
    if(props.dad!=='Chang') 
    return{isRightDad:false}
} 
/*-ajaxSimulator(){ 
    setTimeout(()=>{ 
        this.setState({isGetDad:true})   //setstate?
    },34000)
} -*/ 
componentDidMount(){  
    console.log('componentDidMount') 
    setTimeout(()=>{  
        if(this.state.isRightDad===true)  
            document.getElementById('msg').innerHTML='她媽媽可能是阿美' 
        else   
            document.getElementById('msg').innerHTML=' 她媽是誰?????誰???'  
    },3000) 
     document.getElementById('talk').append("Dad")      //talk??
} 
componentWillUnmount(){ 
    document.getElementById('talk').innerHTML=" ";  //NULL??
} 

  render(){  //render完後  document從網頁取的的msg放在  componentDidMount 再給RENDER
      console.log('render')
      return( 
          <div id='msg'>  
            資料讀取中....
          </div>
      );
  }    
}      

export default Baby;