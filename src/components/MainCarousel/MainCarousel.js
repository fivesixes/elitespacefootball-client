import React from 'react';
import Carousel from 'react-material-ui-carousel';
import CardTrio from '../CardTrio/CardTrio';
import PlayerCard from '../PlayerCards/PlayerCard/PlayerCard';
import { Box } from '@mui/material';

import styles from './styles';

export default function MainCarousel({ rosterEntries }) {
  // Take only the first 6 elements from the rosterEntries array
  const first6Players = rosterEntries.slice(0, 6);

  // Create an array to store CardTrio components
  const cardComponents = [];

  if (window.innerWidth < 900){
    for (let i = 0; i < first6Players.length; i++) {
      cardComponents.push(<Box key={i} sx={ { display: 'flex', justifyContent: 'center', alignItems: 'center' } }><PlayerCard id={first6Players[i]._id} playerName={`${first6Players[i].firstName} ${first6Players[i].lastName}`} imgURL={first6Players[i].cardPhoto} /></Box>);
    }  
  } else {
    for (let i = 0; i < first6Players.length; i += 3) {
      const trioData = first6Players.slice(i, i + 3);
      cardComponents.push(<CardTrio members={trioData} key={i} />);
    }
  }

  return (
    <Carousel animation="slide" sx={styles.main}>
      {cardComponents}
    </Carousel>
  );
}
