import React from 'react'
import Applelogo from './IMAGES/Group 68.svg'
import Goggleplaylogo from './IMAGES/Group 69.svg'
const Section2 = () => {
  return (
    <div className='section2'>
  <div className='circle1'></div>
  <div className='circle2'></div>
<div className='Buy'>
        <h1>Buy, sell and manage your <br /> crypto on TradeExpress.</h1>
        <p>Easily Trade Cryptocurrencies like BTC, USDT, ETH, LTC & XRP <br />with NGN</p>
        <button className='thirdbtn'>Get Started</button>
        <div className='Logos'>
          <img src={Applelogo} alt="" />   <img src={Goggleplaylogo} alt="" />
        </div>
    </div>
    </div>
  )
}

export default Section2