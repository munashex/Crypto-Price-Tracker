import React, {useEffect} from 'react'   
import SingleCoin from './SingleCoin'



function Coins() {  
    const [crypto, setCrypto] = React.useState([])   
    const [search, setSearch] = React.useState('')
    

    let url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false' 

    useEffect(() => {
     fetch(url) 
     .then((res) => res.json()) 
     .then((res) => setCrypto(res))
    }, [])
  
    
     

  return (
    <div> 
        <h3 className="Prices_cap">Cryptocurrency Prices by Market Cap</h3>  
           
           <div className="searchBox">
            <input  
            placeholder="search....." 
            className="searchInput" 
            onChange={(e) => setSearch(e.target.value)}
             />
           </div> 

           {crypto && crypto.filter((val) => {
            if(val.id.toLowerCase().includes(search.toLocaleLowerCase()) || val.symbol.toLowerCase().includes(search.toLowerCase())) {
              return val
            }
           }).map((item) => <SingleCoin key={item.id} {...item}/>)} 
    </div>
  )
}

export default Coins