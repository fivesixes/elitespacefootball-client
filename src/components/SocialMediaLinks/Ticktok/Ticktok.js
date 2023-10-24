import React from 'react';
import { Button, Typography, Grid } from '@mui/material';

import tickTock from './ticktok.png';

export default function Ticktok() {

  const handleClick = () => {
    window.location.href = 'https://www.ticktok.com/elitespacefootball';
  }

  return (
    <Button disableElevation onClick={handleClick} variant="text" sx={ {color: 'white', padding: '40px', '&:hover': { backgroundColor: 'black', color: 'white', opacity: '.7' }} }>
      <Grid container justifyContent="center" alignContent="center" rowSpacing={1} sx={ {width: '80px'} }>
        <Grid item>
          <img src={tickTock} alt="TickTok logo" style={ {width: '43px', height: '50px'} }/>
        </Grid>
        <Grid item>
          <Typography variant="body1" sx={ {textTransform: 'lowercase'} }>@elitespacefootball</Typography>
        </Grid> 
      </Grid>
    </Button>
  )
}
