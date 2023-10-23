import { Box } from '@mui/material';
import React from 'react';

import PlayerCard from '../PlayerCards/PlayerCard/PlayerCard';
import styles from './styles';

export default function CardTrio(props) {

  return (
    <Box style={styles.main}>
      <PlayerCard playerName={`${props.members[0].firstName} ${props.members[0].lastName}`} imgURL={props.members[0].cardPhoto} id={props.members[0]._id} />
      <PlayerCard playerName={`${props.members[1].firstName} ${props.members[1].lastName}`} imgURL={props.members[1].cardPhoto} id={props.members[1]._id} />
      <PlayerCard playerName={`${props.members[2].firstName} ${props.members[2].lastName}`} imgURL={props.members[2].cardPhoto} id={props.members[2]._id} />
    </Box>
  );
}