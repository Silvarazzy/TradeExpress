import React from 'react'
import Tradexpresslogo from './IMAGES/TradExpress.svg'



const Navbar = () => {
  return (
<div className='Nav'>
  <nav class="navbar navbar-expand-lg ">
    <div class="container-fluid">
      <a class="navbar-brand" href="/"> <img className='navbarlogo' src={Tradexpresslogo} alt="" /></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavAltMarkup ">
          <div className="navbar-nav move ">
            <a class="nav-link active" aria-current="page" href="./Instant">Instant Buy/Sell</a>
            <a class="nav-link" href="Learn"> <button className='firstbtn'>Learn</button></a>
            <a class="nav-link" href="Login"><button className='firstbtn'>Log In</button></a>
          <a class="nav-link" href="GetStarted" ><button class="secondbtn" type="button">Get Started</button></a> 
          </div>
        </div>
    </div>
  </nav>
    </div>
  )
}

export default Navbar