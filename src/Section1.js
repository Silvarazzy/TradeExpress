import React, { useEffect, useState } from 'react'

const Section1 = () => {
  const [data, setData] =useState([])
  useEffect(() =>{
    fetch('https://api.coinlore.net/api/tickers/?start=100&limit=5')
    .then(response => response.json())
    .then(json => setData(json.data))
  }, [])
  return (
    <div className='section1'>
      {data.map((d)=>{
        const{symbol,name,rank, price_usd,id} =d
        return(
          <div key={id} className='flex'>
            <h1 className='map1'> {symbol} <br />{name} </h1>
            <h1 className='map2'>{rank} <br />{price_usd} <br /></h1>
          </div>
        )

      })}
        
    </div>
  )
}

export default Section1