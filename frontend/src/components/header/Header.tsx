
import React, { useState } from 'react'
import styles from './styles/header.module.css'
import Form from '../../views/SignUp'

const Header = () =>{
    // export type EventHandlerProps = {
    //     onClick: (e: React.MouseEvent) => void;
    //   }

    //   export function EventHandler({ onClick }: EventHandlerProps) {
    //     // handle focus events in a separate function
    //     function onFocus(e: React.FocusEvent) {
    //       console.log('Focused!', e.currentTarget)
    //     }
   
    return  <div className={styles.Navbar}>
        <a href={'../../views/SignUp.tsx'} onClick={e =>{
              alert("Link Clicked")

        }}>Sign Up

        </a>
       <a href={'../../views/SignUp.tsx'}  onClick={e =>{


        }}>Log In</a>
    </div>

    
}



export default Header