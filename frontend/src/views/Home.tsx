import React from 'react'
import { Link } from 'react-router-dom'


import styles from '../styles/home.module.css'
import Image from '../images/Concert_Logo .png'

const Home = () => {
  return (
    <div className={styles.landing}>
       <div className={styles.MainHeader} >
          <div  className={styles.headerLogo}>
            <img className={styles.concertLogoImg} src={Image} alt="header-logo"></img>
            </div>
          <div className={styles.button_container}> <Link to={'/table'} className={styles.viewConcertBtn}>View Upcoming Concerts</Link>
          </div>
    </div>

    <div className={styles.GridContainer}>
      <div className={styles.aboutUs}>
        {/* <h1>The One and Only Place</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ex similique, dolorum minima autem veritatis tempore ea qui alias, et nisi fuga necessitatibus in cumque quisquam soluta accusantium rerum maxime impedit quaerat delectus. Illo nobis fugit delectus sint reprehenderit a ad quaerat cum, minima commodi suscipit adipisci veniam et laboriosam blanditiis ipsa, natus cupiditate temporibus deleniti consectetur distinctio. Adipisci qui dignissimos necessitatibus inventore, placeat accusamus debitis praesentium impedit nostrum amet natus, exercitationem, quos modi maxime excepturi? Natus necessitatibus voluptates quia nobis dicta, quas libero vitae sint sequi illo voluptatum nesciunt, quod sunt corrupti! Itaque, esse natus! Fugiat enim nam sunt.</p> */}
      </div>
     </div>
    </div>
  )
}

export default Home


