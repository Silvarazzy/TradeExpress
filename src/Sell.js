import React from 'react'
import { Link } from 'react-router-dom'

const Sell = () => {
  return (
    <div>
        <div className='sell'>
        <h1 className='form'>Buy/Sell Instantly</h1>
        <button className='btnbuy'><Link to='/Buy'>Buy</Link> </button>
      <button className='btnsell'><Link to='/Sell'>Sell</Link></button>
      <div className='formgrid'>
          <form action="">
              <label className='label' htmlFor="coin"><strong>Coin to sell</strong></label><br />
              <select class="form-select" aria-label="Default select example">
              <option selected>Bitcoin(BTC)</option></select>
              <label className='label' htmlFor="currency"><strong>Currency</strong></label><br />
              <select class="form-select" aria-label="Default select example">
              <option selected>Naira(NGN)</option></select>
              <label className='label' htmlFor="Amount"><strong>Amount</strong></label><br />
              <select class="form-select" aria-label="Default select example">
              <option selected>NGN | 10,000.00</option></select>
          </form>
          <button className='lastbtn'>Continue</button>

      </div>
      </div>
    </div>
  )
}

export default Sell