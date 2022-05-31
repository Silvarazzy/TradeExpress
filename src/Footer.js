import React from 'react'
import Contacts from './IMAGES/Group 79.svg'
import footer from './IMAGES/Group 77.svg'

const Footer = () => {
  return (
    <div>
        <div className='seventhgrid'>
            <div>
        <ul>
            <li><strong>Products</strong></li>
            <li>Bitcoin</li>
            <li>Alt</li>
            <li>Fiat</li>
            <li>Refill</li>
            <li>P2P</li>
        </ul>
        </div>
        <div>
            <ul>
                <li><strong>Learn</strong></li>
                <li>Blog</li>
                <li>Help center</li>
            </ul>
        </div>
        <div>
            <ul>
                <li><strong>Contact</strong></li>
                <li>hello@tradeexpress.com</li>
                <li>support@tradeexpress.com</li>
                <li><img src={Contacts} alt="" /></li>
            </ul>
        </div>
        <div>
            <ul>
                <li><strong>Company</strong></li>
                <li>About us</li>
                <li>Careers</li>
                <li>Rates</li>
                <li>Mobiles</li>
            </ul>
        </div>
        <div>
            <ul>
                <li><strong>Legal</strong></li>
                <li>Privacy</li>
                <li>Anti-Money Laundering</li>
                <li>Terms and Conditions</li>
            </ul>
        </div>
        </div>
          <div className='footer'><img src={footer} alt="" /> 2021 TradeExpress Technologies All Rights Reserved</div>
    </div>
  )
}

export default Footer