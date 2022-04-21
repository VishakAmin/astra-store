import React from 'react'

import styles from './Navbar.module.css'
import NavItem from "./NavItem"

const Navbar = () => {
  return (
    <div>
      <nav className={styles.navBar}>
        <div>
          <a>Astra Store</a>
        </div>
        <div className={styles.navItem}>
          <NavItem name="Home"/>
          <NavItem name="Cart"/>
          <NavItem name="Login"/>    
        </div>
      </nav>
    </div>
  )
}

export {Navbar}
