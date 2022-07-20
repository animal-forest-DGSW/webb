import '../App.css';
import axios from "axios";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';

function Login() {

  let[id, setId]=useState();
  let[password, setPassword]=useState();
  let navigate = useNavigate();

  return(
    <>
    
      <div className='loginPg'>
        <div className='inBox'>
        <img className="logoTxt" src="../img/found.png" />
        <h5 style={{color:'#7420FF', marginBottom:'20px'}} >로그인</h5>
        <input type='text' id="txtBox" placeholder="id" onChange={(e)=>(setId(e.target.value))}/>
        <input type='password' id="txtBox" placeholder="password" onChange={(e)=>(setPassword(e.target.value))}/>
        <div>
          <button className='idBtn' onClick={()=>{navigate('/')}}>
            로그인</button>
        </div>
        </div>
      </div>
      
    </>
    
  );
}


export default Login;
