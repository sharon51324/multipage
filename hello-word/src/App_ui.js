
import React,{Component} from 'react'; 
import Button from '@material-ui/core/Button'; 
import { makeStyles, withStyles } from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
          margin: theme.spacing(1),
        },
      },
}));

//export default function App() {
  class App extends Component{ 
    constructor(props){
         super(props);
          this.state={
            data:{ 
            stu_id:"",
            name:"",
            gender:"",
            chi:"",
            eng:"",
            math:"",
          },
        name:'TextField' 
    };
    this.handleChange=this.handleChange.bind(this);
    this.handleName=this.handleName.bind(this);
    } 

    handleChange(event){ 
        
        this.setState({name:event.target.value});
    };  
    handleName(e){  
        var new_data=this.state.data;
        new_data[field]=this.state.value;  
        this.setState({data:new_data});
    } 

render(){
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <FormControl>
        <InputLabel htmlFor="component-simple">學號</InputLabel>
        <Input id="component-simple" value={this.state.data['stu_id']} onChange={this.handleChange} />
      </FormControl> 
       
      <FormControl>
        <InputLabel htmlFor="component-helper">姓名</InputLabel>
        <Input id="component-helper" 
         value={this.handleChange['name']}  
         onChange={this.handleChange('name',e)} label='Name' />  

        <FormHelpertText id= 'component-helpert-text' >請輸入中文姓名</FormHelpertText>
     </FormControl>
      
      <FormControl variant="outlined">
        <InputLabel htmlFor="component-outlined">中文</InputLabel>
        <OutlinedInput id="component-outlined" value={this.state.data['chi']}  
        onChange={(e)=>this.handleChange('chi',e)} label='Name'  />
      </FormControl> 
        
      <FormControl variant="outlined">
        <InputLabel htmlFor="component-outlined">英文</InputLabel>
        <OutlinedInput id="component-outlined" value={this.state.data['eng']}
          onChange={(e)=>this.handleChange('eng',e)} label='Name'  />
      </FormControl>  

      <FormControl variant="outlined">
        <InputLabel htmlFor="component-outlined">數學</InputLabel>
        <OutlinedInput id="component-outlined" value={this.state.data['math']} 
         onChange={(e)=>this.handleChange('math',e)} label='Name'  />
      </FormControl> 

     
        
      <div className={classes.root}>
      
      <Button variant="contained">新增</Button>
      <Button variant="contained" color="primary">
        查詢
      </Button>
      <Button variant="contained" color="secondary">
        修改
      </Button>
      <Button variant="contained" disabled>
        刪除
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
    </div> 
    </form>    
    
    
    
  );
}}

export default withStyles(useStyles)(App);
