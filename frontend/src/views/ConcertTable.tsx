import React, { useEffect, useState } from 'react'
import { RouteProps } from 'react-router-dom'
// import { v4 as uuid } from 'uuid'

import client from '../client/index'

import { Concert } from '../interfaces/concerts'

import styles from '../styles/concert-table.module.css'

const ConcertTable = ({ routeProps }: Props) => {
    console.log('route props', routeProps)
    const [concerts, setConcerts] = useState<Concert[]>([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {

        const fetchConcerts = async (): Promise<void> => {
            try {
              const { data } = (await client.get('/')) as ConcertApiResponse

              setConcerts(data)
            } catch (error) {
              console.error('error', error)

            } finally {
              setIsLoading(false)
            }
          }
          fetchConcerts()
        }, [])

        return isLoading ? (
            <h1>Loading..</h1>
          ) : (
            <>
            <div className={styles.table_container}>
              {/* <h1>Concert List</h1> */}
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th className={styles.table_header}>Artist</th>
                    <th className={styles.table_header}>Location</th>
                    <th className={styles.table_header}>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {concerts.map(concert => (
                    <tr key={concert.id}>
                      <td>{concert.artist}</td>
                      <td>{concert.location}</td>
                      <td>{concert.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
            </>
          )
        }
        interface Props {
            routeProps: RouteProps
          }
        interface ConcertApiResponse {
            data: Concert[]
          }

          export default ConcertTable