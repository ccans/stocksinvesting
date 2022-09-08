import React from 'react'
import styles from '../styles/Header.module.css'

function Header({children}) {


  return (
    <div className='header'> {children} </div>
  )
}

export default Header;