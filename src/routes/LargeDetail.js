import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate, Route } from "react-router-dom";
import ldata from '../ldata.js'
import axios from "axios";



function LargeDetail() {

  let[large, setLarge]=useState(ldata);
  let navigate = useNavigate();
  return(
    <>
    {
      large.map(function(a, i) {
        return(
          <Card className="cardBox" key={a.id} style={{ width: '18rem', margin:'40px 20px', display: 'inline-flex'}}>
            <Card.Img className="cardImg" src={a.img} style={{height:'200px'}} variant="top"/>
            <Card.Body>
              <Card.Title className="cardName">{a.title}</Card.Title>
              <Card.Text className="cardTxt">{a.content}</Card.Text>
              <Button variant="primary" onClick={()=>{navigate('/menu/l/detail/' + a.id)}}>
                자세히보기</Button>
            </Card.Body>
          </Card>
          
        )
      })
    }
  <div>
    <button className="d-btn" onClick={()=>{
        axios.get('')
        .then((result)=>{
          let copy = [...large, ...result.ldata];
          setLarge(copy);
        })

      }}>더보기</button>
      </div>

    

    </>
  )
}

export default LargeDetail;