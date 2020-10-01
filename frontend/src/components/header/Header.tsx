
import React, { useState, useEffect } from 'react'
import { RouteProps } from 'react-router-dom'

import styles from './styles/header.module.css'
import Form from '../../views/SignUp'



const Header = () =>{


// function

    return (

    <div className={styles.Navbar}>

      <div className={styles.link_container} >
        {/* <a className={styles.nav_item} href={'/form'} onClick={onClick}> Sign Up</a>
          { showForm ? <Form /> : null } */}
        <a href={'/form'} className={styles.nav_item}>Log In</a>
      </div>

     </div>

    )



}


export default Header