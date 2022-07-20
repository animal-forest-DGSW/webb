import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Route, Routes, useNavigate,Outlet } from "react-router-dom";
import data from '../data.js'
import axios from "axios";

function Detail() {
  let[small, setSmall]=useState(data);
  let navigate = useNavigate();
  return(
    <>
    
    {
      small.map(function(a, i) {
        console.log(a.id)
        return(
          <Card className="cardBox" key={a.id} style={{ width: '18rem', margin:'40px 20px', display: 'inline-flex'}}>
            <Card.Img className="cardImg" style={{height:'200px'}} src={a.img} variant="top"/>
            <Card.Body>
              <Card.Title className="cardName">{a.title}</Card.Title>
              <Card.Text className="cardTxt">{a.content}</Card.Text>
              <Button variant="primary" onClick={()=>{
                console.log(a.id);
                navigate('/menu/s/detail/' + a.id)
              }
              }>자세히보기</Button>
            </Card.Body>
          </Card>
        )
      })
    }


    </>
  )
}

export default Detail;