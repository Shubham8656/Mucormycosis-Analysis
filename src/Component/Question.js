import React, { useState } from 'react';
import './Question.css';
import Alert from 'react-bootstrap/Alert';
import store from '../Redux/Store';
import { connect } from 'react-redux';
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Question(props) {

  const [showModal,changeModal] = useState(false)
  const [result,setResult] = useState('')
  const [color,setColor] = useState('black')
  
  function dispatch(ele){

    console.log(props.count);
    let rhinocerebral=props.rhinocerebral/5;
    let lung=props.lung/4;
    let gastrointestinal=props.gastrointestinal/3;
    
    if(rhinocerebral>lung && rhinocerebral>gastrointestinal){
      setResult('You seems to have high symptomps of Rhinocerebral (sinus and brain) Mucormycosis');
      setColor('red');
    }
    else if(lung>rhinocerebral && lung>gastrointestinal){
      setResult('You seems to have high symptomps of Pulmonary (lung) Mucormycosis');
      setColor('red');
    }
    else if(gastrointestinal>rhinocerebral && gastrointestinal>lung){
      setResult('You seems to have hight symptomps of gastrointestinal Mucormycosis');
      setColor('red');
    }
    else{
      setResult('You seems Safe and healthy')
      setColor('green')
    }

    if(props.count===10){
      changeModal(true)
      store.dispatch({type:'SET_TO_INITIAL'})
      console.log('pos',rhinocerebral,lung,gastrointestinal);
      console.log('pos',props.count);      
    }
    store.dispatch({type:ele})
  }

  return (
    <div className="Container">
        
        <Alert variant='warning' style={{color:'black',fontSize:'130%',fontFamily:'arial',fontWeight:'550'}}>
           {props.no}. {props.que}
        </Alert>
        
        <div className='buttons'>
          
                <a href={'#'+props.count}>
                  <Button className='option' variant="light" size="lg" block style={{fontFamily:'arial',fontWeight:'550'}}
                        onClick={()=>dispatch(props.no)}>
                    YES 
                  </Button>
                </a>
                <a href={'#'+props.count}>
                  <Button className='option' variant="light" size="lg" block style={{fontFamily:'arial',fontWeight:'550'}}
                        onClick={()=>dispatch('NO')}>
                    NO 
                  </Button>
                </a>
                
        </div>
        {
        showModal?
        <Modal show={true}>
          <Modal.Header><h1 style={{margin:'auto',fontSize:'130%'}}>Result</h1></Modal.Header>
          <Modal.Body style={{margin:'auto',color:color,fontFamily:'arial',fontWeight:'600',fontSize:'110%'}}>
            {result}
          </Modal.Body>
          <Link to='/' >
            <Button className='option' variant="dark" size="lg" block style={{width:'50%',margin:'5% auto',fontWeight:'600'}}>
            CLOSE
            </Button>
            </Link>
        </Modal>:null
        }
    </div>
  );
}

const mapStateToProps=(state)=>{
  return {
    count:state.count,
    rhinocerebral:state.rhinocerebral,
    lung:state.lung,
    gastrointestinal:state.gastrointestinal
  }
}
export default connect(mapStateToProps)(Question);
