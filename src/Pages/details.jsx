import { useParams } from "react-router-dom"
import '../styles/details.css'
import { useState, useEffect } from "react"

const Details = () => {
  
    const {id} = useParams()  

    
    const [coin, setCoin] = useState({})
    

    useEffect(() => { 
      fetch(`https://api.coingecko.com/api/v3/coins/${id}`) 
      .then((res) => res.json()) 
      .then((res) => { 
        console.log(res) 
        setCoin(res) 
    })
    }, [])

    return (
        <div className="detailContainer">
        <div className="coinName">
            <img src={coin?.image?.large} className="detailImage"/>
            <h3 id="name" style={{color: 'grey'}}>{coin?.id}</h3>
        </div>

        <div style={{marginLeft: '2em'}}>
           <h3>{coin?.categories}</h3>   
            <h3>launched {coin?.genesis_date || 2018}</h3> 
            <h3>liquidity {coin?.liquidity_score}</h3>  
             <h3 style={{fontWeight: 300, textAlignLast: 'center'}} dangerouslySetInnerHTML={{__html: coin?.description?.en}}></h3>
        </div>
        
        </div>
    )
}

export default Details