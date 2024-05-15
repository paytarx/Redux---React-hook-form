import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div style={{margin:'40px 20px' }}>
      <Link style={{margin:'0px 20px' }} to={"/"}>Anasayfa</Link>
      <Link style={{margin:'0px 20px' }} to={"/Contact"}>Contact</Link>
      <Link style={{margin:'0px 20px' }} to={"/About"}>About</Link>
      <Link style={{margin:'0px 20px' }} to={"/Products"}>Products</Link>
    </div>
  )
}

export default Header
