import React from 'react'
import Mail from './IMAGES/mailing.svg'

const Signup = () => {
  return (
    <div className='signup'>
            <h3>You're almost In!</h3>
            <h2>Welcome Silva</h2>
            <img src={Mail} alt="" />
            <p>An activation link has been sent to <span className='ireti'>Ireti4tech@gmail.com</span> <br /> Please click on the link to verify your email and <br /> activate your TradExpress account.</p>
            <button>Continue</button>
            <p>Didn't get an email? Kindly click <span className='ireti'>resend email</span> <br /> Wrong email supplied?  <span className='ireti'>Edit email address</span></p>
    </div>
  )
}

export default Signup