import { useState } from "react";
import Button from 'react-bootstrap/Button';
import axios from "axios";
import {useNavigate} from 'react-router-dom';

function Find() {

  const[imageSrc, setImageSrc]=useState('');

  const  encoderFileToBase64 = (fileBlob)=>{
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve)=>{
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  let navigate=useNavigate();
  let[title, setTitle]=useState();
  let[content, setContent]=useState();
  let[classification, setClassification]=useState();
  

  return(
    <>
    <div>
      <form className="findForm">
      <img className="logoTxt" src="./img/found.png" />
        <div className="findDiv">
        <select id="txtBox" onChange={(e)=>(setClassification(e.target.value))}>
            <option value="">선택</option>
            <option value="소동물">소동물</option>
            <option value="대동물">대동물</option>
        </select>
        <input type='text' id="txtBox" placeholder="동물의 종류를 입력해주세요." onChange={(e)=>(setTitle(e.target.value))}/>
        <textarea type='text' id='number' placeholder="연락처와 동물의 특징을 적어주세요." onChange={(e)=>(setContent(e.target.value))}/>
        <input className="imgInput" type='file' 
        onChange={(e)=>{encoderFileToBase64(e.target.files[0])}} accept='image/*'/>
        <div className="preview">
          {imageSrc && <img className="imgPreview" src={imageSrc} alt="preview-img"/>}
        </div>
        </div>
        <Button variant="primary" style={{margin: '20px 0px 20px 315px'}} onClick={()=>{navigate('/menu')}}
        >등록하기</Button>{' '}
      </form>
    </div>
    </>
  )
}

export default Find;