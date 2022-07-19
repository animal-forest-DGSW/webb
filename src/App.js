import './App.css';
import { Nav, Navbar, Container, NavDropdown, Button, Form } from "react-bootstrap";
import {Route, Routes, Link, useNavigate} from 'react-router-dom';
import Menu from './routes/Menu.js'
import Detail from './routes/Detail.js'
import LargeDetail from './routes/LargeDetail.js'
import Login from './routes/Login.js'
import Sign from './routes/Sign.js'
import Find from './routes/Find.js'
import Animal from './routes/Animal.js'
import LargeAnimal from './routes/LargeAnimal.js'
import Sogo from './routes/Sogo.js'
import ldata from './ldata';
import data from './data';


function App() {

  let navigate = useNavigate();

  return (
    <div className="App">

    <Navbar collapseOnSelect expand="lg">
      <Container className='header'>
        <Navbar.Brand href="/" className='logo'>찾았소고</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
          <Nav.Link onClick={()=>{ navigate('/sogo') }}>Sogo</Nav.Link>
          <Nav.Link onClick={()=>{ navigate('/menu') }}>Menu</Nav.Link>
          <NavDropdown title="Profile" id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={()=>{ navigate('/login') }}>로그인</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{ navigate('/sign') }}>회원가입</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" className='search' style={{marginRight:'50px'}}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <Routes>
        <Route path='/' element={
          <>
          <div className='fade-in-box'>
          <div className='maintxt'>
            <img className='call' src='img/call.png'/>
            <h6 style={{marginBottom:'20px'}}>동물 찾기 프로젝트</h6>
            <h1 style={{marginBottom:'20px'}}>FOUNDgsw</h1>
            <h5>모든 동물이 가족의 품으로 돌아갈 수 있을 때 까지</h5>
          </div>
          <img className='mainimg' src='img/main.png'/>
          </div>
          
          </>
        }/>


        <Route path="menu" element={<Menu/>}/>
        <Route path="menu/s/detail" element={<Detail/>} />
        <Route path="menu/s/detail/:id" element={<Animal small={data}/>} />
        <Route path="menu/l/detail/:id" element={<LargeAnimal large={ldata}/>}/>
        <Route path="menu/l/detail" element={<LargeDetail/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="sign" element={<Sign/>}/>
        <Route path="find" element={<Find/>}/>
        <Route path="/sogo" element={<Sogo/>}/>
        
      </Routes>

    </div>
  );
}



export default App;
