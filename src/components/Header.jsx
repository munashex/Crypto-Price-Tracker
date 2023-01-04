import React from 'react' 
import '../App.css' 
import ReactSwitch from 'react-switch' 
import { userTheme} from '../App' 
import Topheader from './Topheader'

function Header() {

  const {setTheme, theme} = React.useContext(userTheme)  
  
  const toggleTheme = () => {
    setTheme((curr) => (curr === 'dark' ? 'light' : 'dark'))
  }
  


  return (
    <div> 
  <Topheader/>
    <div className="header_container">
       <img   
       className="brand"
        src="https://static.coingecko.com/s/coingecko-logo-white-ea42ded10e4d106e14227d48ea6140dc32214230aa82ef63d0499f9c1e109656.png"/> 
      <span>
      <ReactSwitch  
       className="switch"  
       onChange={toggleTheme} 
       checked={theme === "light"} 
       checkedIcon={false} 
       uncheckedIcon={false} 
       offColor={'#8892ff'} 
      onColor="#000000"
        />
      </span>
    </div> 
    </div>
  )
}

export default Header