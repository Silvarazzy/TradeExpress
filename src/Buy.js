import React from 'react'
import { Link } from 'react-router-dom'

const Buy = () => {
  return (
    <div>
    <div className='buy'>
        <h1 className='form'>Buy/Sell Instantly</h1>
        <button className='btnsell1'><Link to='/Buy'>Buy</Link> </button>
      <button className='btnbuy1'><Link to='/Sell'>Sell</Link></button>
      <div className='formgrid'>
          <form action="">
              <label className='label' htmlFor="coin"><strong>Coin to buy</strong></label><br />
              <select class="form-select" aria-label="Default select example">
              <option selected>Bitcoin(BTC)</option></select>
              <label className='label' htmlFor="currency"><strong>Currency</strong></label><br />
              <select class="form-select" aria-label="Default select example">
              <option selected>Naira(NGN)</option></select>
              <label className='label' htmlFor="Amount"><strong>Amount</strong></label><br />
              <select class="form-select" aria-label="Default select example">
              <option selected>NGN | 3,000,000.00</option></select>
          </form>
          <button className='lastbtn'>Continue</button>

      </div>
      </div>
      
    </div>

  )
}

export default Buy