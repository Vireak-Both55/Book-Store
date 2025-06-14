import React from 'react'
import Header from './Components/Header'
import HomePage from './Pages/HomePage'
import Footer from './Components/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='poppins-regular'>
      <header>
      <Header/>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default App