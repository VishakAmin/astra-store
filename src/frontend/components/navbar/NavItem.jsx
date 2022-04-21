import React from 'react'
import { Link } from "react-router-dom"

import styles from './NavItem.module.css'


const NavItem = ({name}) => {
  return (
    <div>
      <a className={styles.navItem}>{name}</a>      
    </div>
  )
}

export default NavItem
