import React from 'react'
import Group52 from './IMAGES/Group 52.svg'
import Group28 from './IMAGES/Group 28.svg'

const Section4 = () => {
  return (
    <div className='section4'>
        <button className='learnmore'> Learn more</button>
        <h4>Buy and Sell your Cryptocurrency in 3 simple steps</h4>
        <div className='secondgrid'>
            <div className='secondgridcol1'>
                <div><button className='box1'>1</button></div> 
                <div>
                  <h5>Create a free account</h5> 
                <p>Sign up for your free TradExpress Wallet on web, iOS, or Android devices and follow our <br /> easy process to set up your profile.</p></div>
            </div>
            <div className='secondgridcol2'><img src={Group52} alt="" /> </div>
        </div>
        <div className='thirdgrid'>
            <div className='thirdgridcol1'> <img src={Group52} alt="" /></div>
            <div className='thirdgridcol2'>
                <div><button className='box2'>2</button></div>
                <div>
                    <h5>Deposit</h5>
                    <p>Choose your preferred deposit option like bank <br /> transfer, credit/debit card or send digital asset <br /> directly to your wallet for easy funding/withdrawal.</p>
                </div>
            </div>

        </div>
        <div className='fourthgrid'>
            <div className='fourthgridcol1'>
                <div> <button className='box3'>3</button></div>
                <div>
                    <h5>Buy / Sell Crypto </h5>
                    <p>Buy BTC, USDT, ETH, LTC, XRP, DOGE and securely <br /> store it in your wallet or send it easily to friends and <br /> family.</p>
                </div>
                <div className='fourthgridcol2'><img src={Group28} alt="" /> </div>

            </div>

        </div>

    </div>
  )
}

export default Section4