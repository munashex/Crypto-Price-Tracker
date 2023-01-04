import React from 'react' 
import '../App.css'

function SingleCoin({current_price, image, symbol, market_cap, total_volume, total_supply}) {  
 
    let round = Math.round(current_price)

  return (
    <div>
    <div className="each_coin">   
    <span className="coinName"> 
     <img src={image} className="coinImage"/>  
     <small>{symbol}</small> 
     </span>
     
     <span className="current_price">
        <small>${round}</small>
     </span>
      
       <span className="market_cap">  
       <small className="mkt_cap">market </small> 
      <small>${market_cap}</small>
       </span>

      <span className="totalVolume">  
      <small className="mkt_cap">total volume  </small>
      <small>${total_volume}</small>
      </span> 


    </div> 
    </div>
  )
}

export default SingleCoin