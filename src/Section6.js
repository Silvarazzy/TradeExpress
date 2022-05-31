import React from 'react'
import Rectangle from './IMAGES/Union 1.svg'
import Quote from './IMAGES/Group 8699.svg'
import Image1 from './IMAGES/DSC_1723 phone_2.jpg'
import Image2 from './IMAGES/bccac100b33e4240af83c5349f3fc8d5_1.jpg'

const Section6 = () => {
  return (
    <div className='section6'>
        <h4>Customer's Review</h4>
        <div className='fifthgrid'>
            <div>
                <img src={Rectangle} alt="" />
            </div>
            <div>
                <img src={Rectangle} alt="" />
            </div>
            <div>
                <img src={Rectangle} alt="" />
            </div>
        </div>
        <div className='fifthgridb'>
            <div className='fifthgridb1'>
                <div><img src={Quote} alt="" /></div>
                <div>Trading on TradExpress mobile & web <br /> platforms has been a smooth <br /> experience for me quite easy to <br /> navigate.</div>
            </div>
            <div className='fifthgridb1'>
                <div><img src={Quote} alt="" /></div>
                <div>They have the best rate compared to <br /> other platforms with fast payout.</div>
            </div>
            <div className='fifthgridb1'>
                <div><img src={Quote} alt="" /></div>
                <div>Easy to fund and withdraw coins or cash <br /> on their platform,<br /> I will definitely trade with them again.</div>

            </div>
            

        </div>
        <div className='sixthgrid'>
            <div className='sixthgridcol1'>   
               <div className='sixthgridcol1a'> <img className='imgg' src={Image1} alt="" /></div>
               <div><strong>Silva</strong> <br />Nigeria</div>
            </div>
            <div className='sixthgridcol1'>
                <div className='sixthgridcol1b'><img className='imgg' src={Image2} alt="" /></div>
                <div><strong>Ronnie</strong> <br />Grenada</div>
            </div>
            <div className='sixthgridcol1'>
                <div className='sixthgridcol1c'><img className='imgg' src={Image1} alt="" /></div>
                <div><strong>Silva</strong><br /> Nigeria</div>
            </div>
        </div>

    </div>
  )
}

export default Section6