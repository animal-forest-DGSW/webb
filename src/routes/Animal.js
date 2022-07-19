import { Button } from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import {useParams} from 'react-router-dom'

function Animal(props) {
  let { id } = useParams();
  props.small.find((x)=>x.id==id);
  let navigate = useNavigate();

  return(
    <>
    <div>
      <div className="animal">
          <h2 className='animal-txt'>{props.small[id].title}</h2>
          <img src={props.small[id].img} style={{width:'400px', height:'400px'}}/>
          <h5 className='animal-txt'>연락처 및 특징</h5>
          <div className='callBox'>
            <h6>{props.small[id].content}</h6>
          </div>
          <div>
          <Button variant="primary" onClick={()=>{navigate('/menu/s/detail')}} style={{margin: '20px 0px 20px 200px'}}>확인완료</Button>{' '}
          <Button variant="primary" onClick={()=>{navigate('/menu/s/detail')}} style={{margin: '20px 0px 20px 20px'}}>공고완료</Button>{' '}
          </div>
      </div>
      </div>
    </>
  )
}

export default Animal;