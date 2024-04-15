import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import Logo from '../../assets/svg/Logo.svg'

function Header() {
  return (
    <div>
     <Link to='/'></Link>
     <Link to='/contact'></Link>
      <div className="container header-content">
        <div className="image">
        <img src={Logo} alt="" />
        </div>
        <div className="header">
          <Link to='/'>Home</Link>
          <Link to='/about'>About us</Link>
          <h3>Tour Packages</h3>
          <h3>Contact us</h3>
        </div>
        <div className="head-but">
          <select name="" id="">
            <option value="">Eng</option>
          </select>
          <h2>Login</h2>
          <button>Sing up</button>
        </div>
      </div>
     
    </div>
  )
}

export default Header
