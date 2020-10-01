import React, {useEffect, useState} from 'react';
import {RouteProps} from 'react-router-dom';
import {Link} from 'react-router-dom';
import imageFilename from '../images/10.png';

import Image from '../assets/Concert_Logo .png';
import styles from '../styles/home.module.css';

import client from '../client/index';

import {Concert} from '../interfaces/concerts';

const Home = ({routeProps}: Props) => {
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

  return (
    <div className={styles.landing}>
      <div className={styles.MainHeader}>
        <div className={styles.headerLogo}>
          <img
            className={styles.concertLogoImg}
            src={Image}
            alt="header-logo"
          ></img>
        </div>
        <div className={styles.button_container}>
          <Link to={'/table'} className={styles.viewConcertBtn}>
            View Upcoming Concerts
          </Link>
        </div>
      </div>
      <div className={styles.search_container}>
        <div className={styles.search_box}>Search here</div>
        <div className={styles.search_button_container}>
          <a href="#" className={styles.search_button}>Search</a>
          <a href="#" className={styles.add_artist_button}>Add Artist</a>
        </div>
      </div>
      <div>
        <h1 className={styles.card_section_title}>Upcoming Shows</h1>
      </div>
      <div className={styles.Card_Container}>
        {concerts.slice(0, 3).map((concert) => (
          <div className={styles.card} key={concert.id}>
            <div className={styles.card_header}>
            </div>
            <div className={styles.card_body}>
              <h3 className={styles.card_artist}>{concert.artist}</h3>
              <h5 className={styles.card_location}>{concert.location}</h5>
              <h6 className={styles.card_date}>{concert.date}</h6>
              <div className={styles.home_card_container}></div>
              <Link className={styles.home_card_btn} to={'/table'}>
                Buy Tickets
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
interface Props {
  routeProps: RouteProps;
}
interface ConcertApiResponse {
  data: Concert[];
}

export default Home;

{
  /* <img className={styles.nested_grid_image} src={RockImage} alt=""/>
          <img className={styles.nested_grid_image} src={HipHopImage} alt=""/>
          <img className={styles.nested_grid_image} src={PopImage} alt=""/>
          <img className={styles.nested_grid_image} src={Rock2Image} alt=""/> */
}
