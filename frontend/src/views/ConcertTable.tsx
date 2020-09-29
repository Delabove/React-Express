import React, { useEffect, useState } from 'react'
import { RouteProps } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import client from '../client/index'

import styles from '../styles/concert-table.module.css'

const ConcertTable = ({ routeProps }: Props) => {
    console.log('route props', routeProps)
    const [concerts, setConcerts] = useState<Concert[]>([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {

        const fetchSongs = async (): Promise<void> => {
            try {
              const { data } = (await client.get('/concerts')) as ConcertApiResponse
              // update the state with the result of the API call.
              setConcerts(data)
            } catch (error) {
              console.error('error', error)
              // something went wrong with the request. Show the error page, or something.
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
              <h1>Songs</h1>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Genre</th>
                  </tr>
                </thead>
                <tbody>
                  {concerts.map(concert => (
                    <tr key={uuid()}>
                      <td>{concert.artist}</td>
                      <td>{concert.location}</td>
                      <td>{concert.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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