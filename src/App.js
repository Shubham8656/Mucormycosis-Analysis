  import './App.css';
import Question from './Component/Question';
import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      data:[
        {
          Question:'Do you have One-sided facial swelling ?',
          options:['YES','NO']
        },
        {
          Question:'Do you have Headache ?',
          options:['YES','NO']
        },
        {
          Question:'Do you have Nasal or sinus congestion ?',
          options:['YES','NO']
        },
        {
          Question:'Do you feel Black lesions on nasal bridge or upper inside of mouth that quickly become more severe ?',
          options:['YES','NO']
        },
        {
          Question:'Do you have fever ?',
          options:['YES','NO']
        },
        {
          Question:'Do you have cough ?',
          options:['YES','NO']
        },
        {
          Question:'Do you have chest pain ?',
          options:['YES','NO']
        },
        {
          Question:'Do you feel Shortness of breath ?',
          options:['YES','NO']
        },
        {
          Question:'Do you have Abdominal pain ?',
          options:['YES','NO']
        },
        {
          Question:'Do you have Nausea and vomiting problem ?',
          options:['YES','NO']
        },
        {
          Question:'Do you have Gastrointestinal bleeding problem ?',
          options:['YES','NO']
        }

      ]
    }
  }
  render()
  {
    return (
    <div className="App">
      {
          this.state.data.map((ele,ind)=>(
          <div id={ind} key={ind}>
            <Question no={ind+1} que={ele.Question} option={ele.options}/>
          </div>
          ))
      }
    </div>
  );
}
}
const mapStateToProps=(state)=>{

  return {
    count:state.count
  }
}
export default connect(mapStateToProps)(App);
