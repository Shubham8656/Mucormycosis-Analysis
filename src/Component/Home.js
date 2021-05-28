import React, { useState } from 'react';
import './Home.css';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
// import c1 from '../Image/m1.jpg';
import v1 from '../Image/v1.png';
import v2 from '../Image/v2.png';
import v3 from '../Image/v3.png';
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

function Home(){

  const[showModal,setModal] = useState(false);

  return (
    <div className="home">
        <h1 style={{color:'green',fontFamily:'arial'}}> Dear User</h1>
        <br/>
        <h5 style={{color:'blue',fontFamily:'arial'}}>Please assess yourself against <div style={{color:'red'}}><strong><i>Mucormycosis</i></strong></div></h5>
        <br/>
        <img src={v1} alt='' style={{width:'30%'}}></img>
        <img src={v2} alt='' style={{width:'30%'}}></img>
        <img src={v3} alt='' style={{width:'30%'}}></img>
        <br/>
        <br/>
        <h6 style={{fontFamily:'arial'}}>To help india fight against the viruses I have designed the Mucormycosis self assessment. Your responses help to assess yourself against Mucormycosis</h6>
        <br/>
        <Link to='/assessment'>
            <Button variant="success" size="lg" block style={{width:'50%',margin:'auto',fontFamily:'arial',fontWeight:'550'}}>
                PROCEED 
            </Button>
        </Link> 

        <br/>
        <br/>
        
        <p id='info-link' onClick={()=>setModal(true)}>Want to Know more about Mucormycosis</p>
        
        {
        showModal?
        <Modal show={true}>
          <Modal.Header><h1 style={{margin:'auto',fontSize:'130%'}}>Mucormycosis</h1></Modal.Header>
          <Modal.Body style={{margin:'auto',fontFamily:'arial',fontWeight:'500'}}>
            <p>Mucormycosis is a type of fungal infection. 
            It’s relatively rare, but also very serious.</p>
            <p>The symptoms of mucormycosis depend on where in the body 
            the fungus is growing</p>
            <p><b>How does someone get mucormycosis?</b></p>
            <p>
            People get mucormycosis through contact with fungal spores in the environment. 
            For example, the lung or sinus forms of the infection can occur after someone inhales 
            the spores from the air. A skin infection can occur after the fungus enters the skin through a scrape, 
            burn, or other type of skin injury.
            </p>

            <p><b>Is mucormycosis contagious?</b></p>
            <p>
              No. Mucormycosis can’t spread between people or between people and animals.
            </p>
            <p style={{fontSize:'110%'}}>Symptoms of Mucormycosis</p>
            <p>Symptoms of <b>rhinocerebral (sinus and brain) mucormycosis</b> include:</p>
            <ul style={{fontSize:'95%'}}>
              <li>One-sided facial swelling</li>
              <li>Headache</li>
              <li>Nasal or sinus congestion</li>
              <li>Black lesions on nasal bridge or upper inside of mouth that quickly become more severe</li>
              <li>Fever</li>
            </ul>

            <p>Symptoms of <b>pulmonary (lung) mucormycosis</b> include:</p>
            <ul style={{fontSize:'95%'}}>
              <li>Fever</li>
              <li>Cough</li>
              <li>Chest pain</li>
              <li>Shortness of breath</li>
            </ul>

            <p>Symptoms of <b>gastrointestinal mucormycosis</b> include:</p>
            <ul style={{fontSize:'95%'}}>
              <li>Abdominal pain</li>
              <li>Nausea and vomiting</li>
              <li>Gastrointestinal bleeding</li>
            </ul>

          <p><b>Cutaneous (skin) mucormycosis</b> can look like blisters or ulcers, 
            and the infected area may turn black. Other symptoms include pain, 
            warmth, excessive redness, or swelling around a wound.</p>

          <p><b>Disseminated mucormycosis</b> typically occurs in people who are already 
            sick from other medical conditions, so it can be difficult to know 
            which symptoms are related to mucormycosis. Patients with disseminated 
            infection in the brain can develop mental status changes or coma.</p> 

          <p><b>How is mucormycosis treated?</b></p> 
          <p>
          Mucormycosis is a serious infection and needs to be treated with prescription antifungal medicine, 
          usually amphotericin B, posaconazole, or isavuconazole. These medicines are given through a vein 
          (amphotericin B, posaconazole, isavuconazole) or by mouth (posaconazole, isavuconazole). 
          Other medicines, including fluconazole, voriconazole, and echinocandins, do not work against 
          fungi that cause mucormycosis. Often, mucormycosis requires surgery to cut away the infected tissue.
          </p>

          <p><b>How can I lower the risk of mucormycosis?</b></p>
          <p>
          It’s difficult to avoid breathing in fungal spores because the fungi that cause mucormycosis 
          are common in the environment. There is no vaccine to prevent mucormycosis. 
          For people who have weakened immune systems, there may be some ways to lower the chances of 
          developing mucormycosis.
          </p>

          <ul style={{fontSize:'95%'}}>
              <li>Protect yourself from the environment</li>
              <li>Try to avoid areas with a lot of dust like construction or excavation sites</li>
              <li>If you can’t avoid these areas, wear an N95 respirator (a type of face mask) while you’re there</li>
              <li>Avoid direct contact with water-damaged buildings and flood water after hurricanes and natural disasters.</li>
              <li>Avoid activities that involve close contact to soil or dust, such as yard work or gardening</li>
              <li>To reduce the chances of developing a skin infection, clean skin injuries well with soap and water, 
                especially if they have been exposed to soil or dust.</li>
          </ul>

          </Modal.Body>
          
            <Button className='option' variant="secondary" size="lg" block 
            style={{width:'50%',margin:'5% auto',fontWeight:'600'}}
            onClick={()=>setModal(false)}>
            CLOSE
            </Button>
           
        </Modal>:null
        }

    </div>
  );
}

export default Home;
