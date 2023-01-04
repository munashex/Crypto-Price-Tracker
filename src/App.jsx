import React from 'react' 
import './App.css' 
import Header from './components/Header'   
import Coins  from './components/Coins'  



export const userTheme = React.createContext(null)

const App =() => { 

  const [theme, setTheme] = React.useState('dark')

  return (
    <userTheme.Provider value={{theme, setTheme}}>
        <div id={theme}> 
        <Header/> 
        <Coins/> 
        </div>  
    </userTheme.Provider>
  )
}

export default App
