import { Box, Typography } from '@mui/material';
import React from 'react';

import styles from './styles';

export default function PlayerMediaLink( { playerName } ) {

  return(
    <Box style={styles.main}>
      <Typography variant="h6" sx={ { textTransform: 'uppercase', fontWeight: 'bold' } }>Watch {playerName} play</Typography>
    </Box>
  );
}