import { useContext } from "react"
import { themeContext } from "../App"
import '../styles/navbar.css'
import {BsFillMoonStarsFill, BsFillSunFill} from 'react-icons/bs' 
import {GiCoinflip} from 'react-icons/gi' 
import { Link } from "react-router-dom"

const Navbar = () => {
 const {theme, setTheme} = useContext(themeContext)  
 
 const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }

    return (
        <div className="Navbar"> 
        <Link to="/">
          <img src="https://static.coingecko.com/s/cny_2023_logo-5c7d260594cea89b082d811546586e0b02422a6d222f5513c74e0d6b6706ada0.png"/>
        </Link>
            <img/>
            <button onClick={toggleTheme}> 
              {theme === 'light' ? <BsFillMoonStarsFill size={19}/> : <BsFillSunFill size={19}/>}
            </button>
        </div>
    )
}

export default Navbar