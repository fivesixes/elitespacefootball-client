import React from 'react';

import threads from './threads.png';
import { Button, Grid, Typography } from '@mui/material';

export default function Threads() {

  const handleClick = () => {
    window.location.href = 'https://www.threads.net/elitespacefootball';
  }

  return (
    <Button disableElevation onClick={handleClick} variant="text" sx={ {border: '2px solid green', color: 'white', padding: '40px', '&:hover': { backgroundColor: 'black', color: 'white', opacity: '.7' }} }>
      <Grid container justifyContent="center" alignContent="center" rowSpacing={1} sx={ {width: '80px'} }>
        <Grid item>
          <img src={threads} alt="Threads Icon" style={ {width: '50px', height: '50px'} }/>
        </Grid>
        <Grid item>
          <Typography variant="body1" sx={ {textTransform: 'lowercase'} }>@elitespacefootball</Typography>
        </Grid> 
      </Grid>
    </Button>
  )
}
