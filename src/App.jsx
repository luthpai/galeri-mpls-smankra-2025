import { useState } from 'react'
import Gallery from './components/Gallery'
import "./style.css"
import logo from "./assets/Logo-SMANKRAGILAN.png"

function App() {

  return (
    <>
      <div className='title'>
        <img src={logo} id='logo' />
        <h1>Galeri MPLS Smankra 2025</h1>
      </div>
      <Gallery />
      <div id='footer'>
        <h1>Made by M. Luthfi Afriansyah</h1>
      </div>
    </>
  )
}

export default App
