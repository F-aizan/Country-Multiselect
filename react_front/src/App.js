
import './App.css';
import React,{Component} from 'react';
import Select from 'react-select';
import axios from 'axios';




class App extends Component{
  constructor(props){
    super(props)
    this.state={
      drop_opt:[],
      name:"",
      flag:""
    }
  }

async ren_data(){
  const API = await axios.get("http://127.0.0.1:8000/countries/")
  const resp = API.data

  const drop_val = resp.map((response) =>({
    "label":response.name,
    "value":response.flag
  }))

  this.setState({
    drop_opt:drop_val
  })
}

onChange(event){
  this.setState({
    flag:event.flag,
    name:event.name
  })
}

componentDidMount(){
  this.ren_data()
}

render(){
  return(
    <div className='App'>
      <h1>Select Countries</h1>
      <Select
      id='select'
      options={this.state.drop_opt}
      formatOptionLabel={options => (
      <div id='countries'>
      <img src={options.value} alt="flag" width={20} height={20} />
      <span>{options.label}</span>
      </div>
      )}
      onChange={this.onChange.bind(this)}
      isMulti 
      />
    </div>
  );
}



}

export default App;
