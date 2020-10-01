import React from 'react'
import styles from '../styles/signup-form.module.css'

const SignUp = () => {
return (

    <div className={styles.Signup_Form_Container} >
        <form className={styles.Signup_Form} action="Sign Up">
            <h1>Sign Up For Alerts</h1>
        <label htmlFor="Name:">
            <input type="text" name="name"/>
        </label>
        <input type="text" name="name"/>
        </form>
    </div>

)
}

export default SignUp