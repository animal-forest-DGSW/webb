import { useState } from "react";
import Button from 'react-bootstrap/Button';

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

  return(
    <>
    <div>
      <form className="findForm">
      <img className="logoTxt" src="./img/찾았소고.png" />
        <div className="findDiv">
        <select id="txtBox">
            <option value="">선택</option>
            <option value="학생">소동물</option>
            <option value="회사원">대동물</option>
        </select>
        <input type='text' id="txtBox" placeholder="동물의 종류를 입력해주세요."/>
        <textarea type='text' id='number' placeholder="연락처와 동물의 특징을 적어주세요." />
        <input className="imgInput" type='file' 
        onChange={(e)=>{encoderFileToBase64(e.target.files[0])}} accept='image/*'/>
        <div className="preview">
          {imageSrc && <img className="imgPreview" src={imageSrc} alt="preview-img"/>}
        </div>
        </div>
        <Button variant="primary" style={{margin: '20px 0px 20px 315px'}}>등록하기</Button>{' '}
      </form>
    </div>
    </>
  )
}

export default Find;