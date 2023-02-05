 import '../styles/coins.css'
 import { useNavigate} from 'react-router-dom'

function SingleCoin({id, symbol,  image, market_cap, current_price, max_supply}) {   

  let max = max_supply === null ? 0 : parseInt(max_supply).toLocaleString().slice(0, 7)
  let  navigate = useNavigate()


  return (
    <div  onClick={() => navigate(`details/${id}`)} className="singleCoinContainer" 
    style={{borderBottom: 'dashed 0.4px grey', cursor: 'pointer'}}> 

<div className="actualCoin">
<img src={image} alt={symbol} className="image"/> 
<h5 className="tokenName">{id} <small className="symbol">{symbol}</small></h5> 
</div>


  
<div className="marketPrize">
 <h5>market price</h5> 
 <h5 className="actualMarket">${parseInt(market_cap).toLocaleString()}</h5>
</div>

<div className="price">
<h5 >price</h5> 
<h5 className="actualPrize">${parseInt(current_price).toLocaleString()}</h5>
</div>

<div className="max_supply">
  <h5>max supply</h5> 
  <h5 className="actualSupply">${max}</h5>
</div>



    </div>
  )
}

export default SingleCoin