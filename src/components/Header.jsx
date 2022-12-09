import React from 'react'
import {  NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <NavLink to='/' className="header-link">Tesla</NavLink>
      <NavLink to='/bitcoin' className="header-link">Bitcoin</NavLink>
      <NavLink to='/busines' className="header-link">Busines</NavLink>
      <NavLink to='/french' className="header-link">French</NavLink>
      <NavLink to='/tech' className="header-link">TechCrunch</NavLink>
    </div>
  )
}

export default Header
