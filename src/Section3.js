import React from 'react'
import Group52 from './IMAGES/Group 52.svg'
import Group28 from './IMAGES/Group 28.svg'

const Section3 = () => {
  return (
    <div className='section3'>
        <h4>Why do people get Inolved with Cryptocurrencies</h4>
        <div className='firstgrid'>
            <div className='firstgridcol1'>
              <img className='firstgridimg1' src={Group52} alt="" />
                 <div className='firstgridtext1'>
                  <h5>Easy Mode of Payment </h5>
                  <p>People can now easily send and receive money <br /> from anywhere in the world to purchase goods and <br /> pay for services.</p>
                  </div>   
            </div>
            <div className='firstgridcol2'>
              <img className='firstgridimg2' src={Group28} alt="" />
              <div className='firstgridtext2'>
                  <h5>Financial Freedom</h5>
                  <p>Just like the internet no single entity controls the <br /> Crypto network which provides users transparency <br /> and privacy, which puts you in absolute control of <br /> your money.</p>
              </div>    
            </div>
            <div className='firstgridcol3'>
              <img className='firstgridimg3' src={Group28} alt="" /> <br />
               <div className='firstgridtext3'>
                  <h5>Investment</h5>
                  <p>The constant demand as made Cryptocurrecies a <br /> Digital Gold used for alternative store of <br /> wealth on long term investments.</p>
               </div>   
            </div>

        </div>
    </div>
  )
}

export default Section3