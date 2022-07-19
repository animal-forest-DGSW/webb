import axios from "axios";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';
function Sign() {

  let[id, setId]=useState();
  let[password, setPassword]=useState();
  let navigate = useNavigate();

  return(
    <>
    
      <div className='loginPg'>
        <div className='inBox'>
        <img className="logoTxt" src="./img/찾았소고.png" />
        <h5 style={{color:'#7420FF', marginBottom:'20px'}}>회원가입</h5>
        <input type='text' id="txtBox" placeholder="id"/>
        <input type='password' id="txtBox" placeholder="password"/>
        <div>
          <button className='idBtn' onClick={()=>{
            axios.post('',{asdf:id, adf:password})
            .then((result)=>{navigate('/')})
            .catch(()=>{})
          }}>회원가입</button>
        </div>
        </div>
      </div>
      
    </>
    
  );
}


export default Sign;
