import React from 'react'
import LOGINICON from './IMAGES/Icon awesome-check-circle.svg'

const Login = () => {
  return (
    <div className='login'>
    
      <h3>Welcome Back!</h3>
      <div className='logininput'>
        <div className='logininputs'><input type="text" id='Username' placeholder='Username' /></div>
        <div className='logininputs'><input type="text" id='password' placeholder='Password' /></div>
      </div>
      <div className='logingrid'>    
         <div className='logingrid1'><div><img src={LOGINICON} alt="" /></div><div><p>Remember password</p></div></div>
          <div> <a href="link">Forgot password?</a></div>
      </div>
      <button>Log In</button>
      <div className='newuser'>New User? <a href="link">Click here</a></div>


      </div>
  )
}

export default Login