function TESTfunction (props){ 
    const showOne = true;  
    const test="hi"; 
    var output =[];
    const myValue=(event)=>{ 
      console.log(event.target.value);
    } 
    const styleArg = {fontSize:'40px',color:'blue'}
    for(var i=0 ; i < 4 ;i++){
       output.push(<><button value={i} onClick={myValue}>我是地{i}個按鈕</button><br/></>);
           /*  frontSize 寫法不同要注意 */
    } 
  
    return(  
      <div> 
        {output}
        <h1 className="word" > {props.name} </h1>   
        
        <button value={1234} onClick={props.handleClick}>{props.children}</button> 
        <h2 style = {styleArg}>{(showOne ==true)? 5:2}</h2> 
        <h3 style= {{frontSize:'200px',color:"red"}} id='show-area'>{test}</h3>        
        <h3>{test}</h3>
      </div>
     ) 

    };  
    export default TESTfunction;