import React from 'react' 
import '../styles/coins.css' 
import {useState, useEffect} from 'react'
import SingleCoin from '../components/SingleCoin';
import { useNavigate } from 'react-router-dom';

function Coins() { 
    const [coins, setCoins] = useState([]) 
    const [loading, setLoading]  = useState(false) 
    const [search, setSearch] = useState('')
    
    let navigate = useNavigate()
     
    let url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=40&page=1&sparkline=false'

    

    useEffect(() => {
    setLoading(true) 
    fetch(url)
    .then((res) => res.json()) 
    .then(res => setCoins(res))
    setLoading(false)
    }, [])

    

  return (
    <div>
      <h1>{loading && 'Loading.....'}</h1>
        <h3 className="crypto_Marker_Title">Cryptocurrency Prices by Market Cap</h3> 
        <input className="searchInput" 
        onChange={(e) => setSearch(e.target.value)}
        placeholder='search....'
        />
      {coins && coins.filter((val) => {
            if(val.id.toLowerCase().includes(search.toLocaleLowerCase()) || val.symbol.toLowerCase().includes(search.toLowerCase())) {
              return val
            }
           }).map((item) => (
        <SingleCoin key={item.id} {...item}/>
       ))}
    </div>
  )
}

export default Coins