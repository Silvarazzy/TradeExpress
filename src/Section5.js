import React from 'react'
import Applelogo from './IMAGES/Icon awesome-apple.svg'
import Playstotrelogo from './IMAGES/Group 53.svg'


const Section5 = () => {
  return (
    <div className='section5'>
        <p>Ready to trade Buy/Sell cryptocurrencies in just 10 minutes?</p>
        <h3>Create your account for free and start trading today!</h3>
        <button className='section5btn'>Get started</button>
        <div>
            <button className='mainbtn'><div className='btndiv'><div><img src={Applelogo} alt="" /></div>
            <div><small>download on the</small> <br /> <h5 className='appstore'>App store</h5></div></div>
            </button > <button className='mainbtn2'><div className='btndiv'><div><img src={Playstotrelogo} alt="" /></div>
            <div><small>Get on</small> <br /> <h5 className='appstore'>Goggle play</h5></div></div>
            </button>
        </div>


    </div>
  )
}

export default Section5