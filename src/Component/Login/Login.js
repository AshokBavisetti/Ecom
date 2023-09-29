import React, {useState} from 'react'


function Login() {

  const  [data, setData]= useState({
    username:'', password:''
  })

  const {username,password}=data

  const changeHandler=e=>{
    setData({...data, [e.target.name]:[e.target.value]})
  }
  const submitHandler=e=>{
    e.preventDefault();
    console.log(data)
  }

  
  return (
    <div className="App">
        <center>
     
      <form onSubmit={submitHandler}>
     
      <input type="text" name='username' value={username} onChange={changeHandler} placeholder='Username..' required ></input><br></br>
      <input type="password" name='password' value={password} onChange={changeHandler}  placeholder='Password..'required></input><br></br>
      <input type="submit" name='submit'></input>
      </form>
      </center>
    </div>
  );
}

export default Login;