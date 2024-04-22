import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/svg/Logo.svg'
import './Header.css'

function Header() {
  return (
    <header>
      <div className="container header-content">
        <div className="image">
        <img src={Logo} alt="" />
        </div>
        <div className="header">
          <Link to='/'>Home</Link>
          <Link to='/aboutus'>About us</Link>
          <Link to='/hometwo'>Tour Packages</Link>
          <Link>Contact us</Link>
        </div>
        <div className="head-but">
          <select name="" id="">
            <option value="">Eng</option>
          </select>
          <h2>Login</h2>
          <button>Sing up</button>
        </div>
      </div>
     
    </header>
  )
}

export default Header 