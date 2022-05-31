import React from 'react'
import { Link } from 'react-router-dom'

const Individual = () => {
  return (
    <div className='buy'>
        <h1 className='form1'>Welcome!</h1>
        <button className='btnsell1'><Link to='/Individual'>Individual</Link> </button>
      <button className='btnbuy1'><Link to='/Business'>Business</Link></button>
      <div className='input'> 
          <div><input className='inputforms' type="text" id='username' placeholder='Username' /></div>
          <div><input className='inputforms' type="text" id='fullname' placeholder='Full Name'/></div>
          <div><input className='inputforms' type="text" id='Email' placeholder='E-mail'/></div>
          <div><input className='inputforms' type="text" id='Phonenumber'placeholder='Phone Number' /></div>
          <div><input className='inputforms' type="text" id='rcode'  placeholder='Referral Code(Optional)'/></div>
      </div>
      <div className='lastdiv'><p>By clicking the Sign Up button below, you agree to TradExpress <span className='lastdivspan'>terms and services</span></p></div>
      <a href="Signup"><button  className='lastbtn'>Sign up</button></a>
    </div>
  )
}

export default Individual