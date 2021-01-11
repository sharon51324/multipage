import React , {Component} from 'react'; 
class App extends Component {  
    constructor(props){ 
        super(props); 
        this.state ={ 
            repoName: null
        } 
        this.handleClick = this.handleClick.bind(this);
        this.handlePost = this.handlePost.bind(this); 
         this.handlePost = this.handlePost.bind(this);
          // this.handlePost = this.handleJson.bind(this);
}  
 
handleClick(){
    //fetch('https://api.github.com/users/jserv/repos',{method:'Get'}) 
    //fetch('https://apiservice.mol.gov.tw/OdService/download/A17030000J-000049-UIv',{method:'Get'}) \
    fetch('http://localhost/get_data.php',{method:'Get'})
   .then(res=>res.json()) 
   .then(data =>{
       console.log(data) 
       /*- 
       this.setState({repoName: data[1]['月別']});  
       var str ='';
       for(var i=0; i< data.length;i++){ 
           str+= data[i]["月別"]+ "," +data[i]["新台幣"]+","+data[i]["日圓"]+"\n"; 
       }  
       */ 
      var str =''; 
       str = data['key']+',' + data['val'];
       this.setState({repoName: str});
   })    
   .catch(e=>{ 
       console.log(e)
   }) 
}
handlePost(){ 
    const parm={A:123,B:234};
    const formData=Object.keys(parm).map( 
        function(keyName){ 
            return encodeURIComponent(keyName)+'=' + encodeURIComponent(parm[keyName])
        }
    ).join('&'); //(1把兩個合起來)  =>a=123&C=234 
    fetch('http://localhost/get_data.php?f=1',{        //???
         method:'POST',
         body:formData , 
         headers:new Headers({
              "Content-type":"application/x-www-form-urlencoded"
         })
    })
    .then(res=>res.json()) 
    .then(data =>{
        console.log(data);
        var str =''; 
        str = data['total'];
        this.setState({repoName: str});
    })    
    .catch(e=>{ 
        console.log(e)
    }) 
}
//--------- Json---------------
handleJson(){ 
    const parm={A:123,B:234};
    fetch('http://localhost/get_data.php?f=1',{        //???
         method:'POST',
         body:JSON.stringify(parm), //stringify(parm)??
         headers:new Headers()      //??
    })
    .then(res=>res.json()) 
    .then(data =>{
        console.log(data);
        var str =''; 
        str = data['total'];
        this.setState({repoName: str});
    })    
    .catch(e=>{ 
        console.log(e)
    }) 
} 
//--------- Json---------------  

  //因為加br會轉成物件 所以用pre包住後 讓格式員持原本在家BR讓她換行 
  //<button onClick={this.handleJson}>取得JSON資料</button>
render(){ 
    return( 
        <div> 
            <pre>  
             {(this.state.repoName==null)?'No Data':this.state.repoName}  
             </pre><br/>
             <button onClick={this.handleClick}>取得資料</button> 
             <button onClick={this.handlePost}>取得post資料</button> 
            
        </div>
    ) 
   }
} 
export default App;