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
        <img className="logoTxt" src="../img/found.png" />
        <h5 style={{color:'#7420FF', marginBottom:'20px'}}>회원가입</h5>
        <input type='text' id="txtBox" placeholder="id" name="id" onChange={(e)=>(setId(e.target.value))}/>
        <input type='password' id="txtBox" placeholder="password" name="password"  onChange={(e)=>(setPassword(e.target.value))}/>
        <div>
          <button className='idBtn' onClick={()=>{
            axios.post('http://172.16.7.13:3000/member/join',{name:id, password:password})
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
