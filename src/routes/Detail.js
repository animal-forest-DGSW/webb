import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Route, Routes, useNavigate,Outlet } from "react-router-dom";
import data from '../data.js'
import axios from "axios";
import Animal from './Animal.js'

function Detail() {
  let[small, setSmall]=useState(data);
  let navigate = useNavigate();
  return(
    <>
    
    {
      small.map(function(a, i) {
        return(
          <Card className="cardBox" key={i} style={{ width: '18rem', margin:'40px 20px', display: 'inline-flex'}}>
            <Card.Img className="cardImg" style={{height:'200px'}} src={small[i].img} variant="top"/>
            <Card.Body>
              <Card.Title className="cardName">{small[i].title}</Card.Title>
              <Card.Text className="cardTxt">{small[i].content}</Card.Text>
              <Button variant="primary" onClick={()=>{navigate('animal')}}>자세히보기</Button>
            </Card.Body>
          </Card>
        )
      })
    }

  <div>
    <button className="d-btn" onClick={()=>{
      axios.get('')
      .then((result)=>{
        let copy = [...small, ...result.data];
        setSmall(copy);
      })

    }}>더보기</button>
    </div>

    <Outlet />
    </>
  )
}

export default Detail;