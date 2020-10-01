import React, {useEffect, useState} from 'react';
import {RouteProps} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Image from '../images/Concerts_Logo.png';
// import { v4 as uuid } from 'uuid'

import client from '../client/index';

import {Concert} from '../interfaces/concerts';

import styles from '../styles/concert-table.module.css';

const ConcertTable = ({routeProps}: Props) => {
  console.log('route props', routeProps);
  const [concerts, setConcerts] = useState<Concert[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchConcerts = async (): Promise<void> => {
      try {
        const {data} = (await client.get('/')) as ConcertApiResponse;

        setConcerts(data);
      } catch (error) {
        console.error('error', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchConcerts();
  }, []);

  return isLoading ? (
    <h1>Loading..</h1>
  ) : (
    <>
      <div className={styles.MainHeader}>
        <div className={styles.headerLogo}>
          <img
            className={styles.concertLogoImg}
            src={Image}
            alt="header-logo"
          ></img>
        </div>
      </div>
      <div>
        <h1>Your Artists</h1>
        <tbody>
          <tr className={styles.favorite_list}>
            <td className={styles.favorite_cell}>Favorite 1 </td>
          </tr>
        </tbody>

      </div>

      <h1 className={styles.table_title}>Coming Soon To a Stage Near You</h1>
      <div className={styles.table_container}>
        <table className={styles.table}>
          <tbody>
            {concerts.map((concert) => (
              <tr key={concert.id}>
                <td>
                  <div className={styles.table_artist}>{concert.artist}</div>
                  <div className={styles.subscribe_container} >
                  <button className={styles.subscribe_btn}>Subscribe</button>
                </div>
                </td>

                <td>
                  <div className={styles.table_location}>{concert.location}</div>
                  <div className={styles.table_date}>{concert.date}</div>
                </td>

                <td className={styles.table_btn_cell}>
                  <Link to={'/table'} className={styles.table_btn}>
                    Buy Tickets
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
interface Props {
  routeProps: RouteProps;
}
interface ConcertApiResponse {
  data: Concert[];
}

export default ConcertTable;
