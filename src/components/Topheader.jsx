import React from 'react' 
import '../App.css' 


function Topheader() {  

   const [coins, setCoins] = React.useState([])   
   const [firstCoin, setFirstCoin] = React.useState([])
  

   React.useState(() => {
      fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
      .then((res) => res.json()) 
      .then((res) => {
        setCoins(res) 
        setFirstCoin(res[0]) 
      })
    }, [coins])

 console.log(firstCoin)
    
   const totalCoins = coins.length   
   

   

    return (
    <div className="header_top">
      <code>
         <small>coins <span  className="coins">{totalCoins}</span></small> 
      </code>  
      <code> 
        <small className="number_1"> number 1 coin {firstCoin.name}</small>
      </code> 
      <img src={firstCoin.image} className="numberOneImage"/>
    </div>
  )
}

export default Topheader