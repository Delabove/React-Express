import React, { useEffect, useState } from 'react'
import { RouteProps } from 'react-router-dom'
import { Link } from 'react-router-dom'


import styles from '../styles/home.module.css'
import Image from '../images/Concert_Logo .png'

import RockImage from '../images/rock.png'
import client from '../client/index'

import { Concert } from '../interfaces/concerts'


const Home = ({ routeProps }: Props) => {
  console.log('route props', routeProps)
  const [concerts, setConcerts] = useState<Concert[]>([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {

      const fetchConcerts = async (): Promise<void> => {
          try {
            const { data } = (await client.get('/concerts')) as ConcertApiResponse

            setConcerts(data)
          } catch (error) {
            console.error('error', error)

          } finally {
            setIsLoading(false)
          }
        }
        fetchConcerts()
      }, [])

  return (
    <div className={styles.landing}>
       <div className={styles.MainHeader} >
          <div  className={styles.headerLogo}>
            <img className={styles.concertLogoImg} src={Image} alt="header-logo"></img>
            </div>
          <div className={styles.button_container}> <Link to={'/table'} className={styles.viewConcertBtn}>View Upcoming Concerts</Link>
          </div>
    </div>

    <div className={styles.Card_Container}>

    {concerts.map(concert => (
        <div className={styles.card}>
          <div className={styles.card_header}>
            <img className={styles.card_image} src={RockImage} alt=""/>
          </div>
          <div className={styles.card_body}>

                    <tr key={concert.id}>
                      <td>{concert.artist}</td>
                      <td>{concert.location}</td>
                      <td>{concert.date}</td>
                    </tr>

          </div>
        </div>

        ))}
      </div>
    </div>
  )
}
  interface Props {
    routeProps: RouteProps
  }
  interface ConcertApiResponse {
    data: Concert[]
  }

export default Home


 {/* <img className={styles.nested_grid_image} src={RockImage} alt=""/>
          <img className={styles.nested_grid_image} src={HipHopImage} alt=""/>
          <img className={styles.nested_grid_image} src={PopImage} alt=""/>
          <img className={styles.nested_grid_image} src={Rock2Image} alt=""/> */}