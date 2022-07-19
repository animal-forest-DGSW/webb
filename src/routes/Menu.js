import '../App.css';
import {Route, Routes, Link, useNavigate} from 'react-router-dom';

function Menu() {

  let navigate = useNavigate();
  return(
    <>
  
      <div className="category">
        <div className="block">
          <img className='content s' onClick={()=>{ navigate('s/detail') }} src='../img/s.png'/>
          <img className='content' onClick={()=>{ navigate('l/detail') }} src='../img/l.png'/>
          <div style={{position:'relative'}}>
          <img className='content project' src='../img/project.png'/>
          <div className='project-box'>
          <h2>FOUNDgsw</h2>
          <h5>실종 동물 찾기 프로젝트</h5>
          </div>
          </div>
        </div>
        <img className='content find' src='../img/find.png' onClick={()=>{navigate('/find')}}/>
      </div>


    </>
  )
}

export default Menu;