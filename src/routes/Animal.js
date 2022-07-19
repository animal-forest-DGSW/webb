import { Button } from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import {useParams} from 'react-router-dom'

function Animal(props) {

  let navigate = useNavigate();
  let {id} = useParams();

  return(
    <>
    <div>
      <div className="animal">
          <h2 className='animal-txt'>종류</h2>
          <img />
          <h5 className='animal-txt'>연락처 및 특징</h5>
          <div className='callBox'>
            <h6></h6>
          </div>
          <div>
          <Button variant="primary" onClick={()=>{navigate('/menu/s/detail')}} style={{margin: '20px 0px 20px 315px'}}>완료하기</Button>{' '}
          </div>
      </div>
      </div>
    </>
  )
}

export default Animal;