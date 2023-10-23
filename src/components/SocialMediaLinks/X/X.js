import React from 'react';

import x from './x.png';
import { Button, Grid, Typography } from '@mui/material';

export default function X() {

  const handleClick = () => {
    window.location.href = 'https://www.twitter.com/_elitespace_';
  }

  return (
    <Button disableElevation onClick={handleClick} variant="text" sx={ {border: '2px solid green', color: 'white', padding: '40px', '&:hover': { backgroundColor: 'black', color: 'white', opacity: '.7' }} }>
      <Grid container justifyContent="center" alignContent="center" rowSpacing={1} sx={ {width: '80px'} }>
        <Grid item>
          <img src={x} alt="X Icon" style={ {width: '44px', height: '44px'} }/>
        </Grid>
        <Grid item>
          <Typography variant="body1" sx={ {textTransform: 'lowercase', marginTop: '6px'} }>@_elitespace_</Typography>
        </Grid> 
      </Grid>
      
    </Button>
  )
}
