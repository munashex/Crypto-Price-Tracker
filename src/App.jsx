import Navbar from './components/Navbar'
import {useState, createContext} from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
export const themeContext = createContext(null) 
import Coins from './Pages/Coins'
import Details from './Pages/details'


function App() { 
  const [theme, setTheme] = useState('light') 
  
  return (
   <themeContext.Provider value={{theme, setTheme}}>
      <div id={theme}>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Coins/>}/> 
          <Route path="/details/:id" element={<Details/>}/>
        </Routes>
        </BrowserRouter>
      </div>
   </themeContext.Provider>
  )
}

export default App
