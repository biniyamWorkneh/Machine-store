
import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai'
import './App.css'

import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleClick = () => {
    setShowMenu(!showMenu)
  }
  return (
    <nav>
      <div className="logo">logo</div>
      <ul className={showMenu ? "menu-active" : "menu"}>
        <li><Link to='/' >Home</Link></li>
        <li><Link to='/service' >Service</Link></li>
        <li><Link to='/others' >Others</Link></li>
        <li><Link to='/about' >Aboutus</Link></li>
        <li><Link to='/contactus'>Contactus</Link></li>
      </ul>
      <div className='menu-icon' onClick={handleClick}>
        {<AiOutlineMenu />}
      </div>
    </nav>
  )
}
