import '../App.css';

function Login() {

  return(
    <>
    
      <div className='loginPg'>
        <div className='inBox'>
        <img className="logoTxt" src="./img/찾았소고.png" />
        <h5 style={{color:'#7420FF', marginBottom:'20px'}}>로그인</h5>
        <input type='text' id="txtBox" placeholder="id"/>
        <input type='password' id="txtBox" placeholder="password"/>
        <div>
          <button className='idBtn'>로그인</button>
        </div>
        </div>
      </div>
      
    </>
    
  );
}


export default Login;
