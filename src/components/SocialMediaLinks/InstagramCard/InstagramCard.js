import React from 'react';
import { Instagram } from '@mui/icons-material';
import { Button, Grid, Typography } from '@mui/material';

export default function InstagramCard() {

  const handleClick = () => {
    window.location.href = 'https://www.instagram.com/elitespacefootball';
  }

  return (
    <Button disableElevation onClick={handleClick} variant="text" sx={ {border: '2px solid green', color: 'white', padding: '40px', '&:hover': { backgroundColor: 'palevioletred', color: 'white', opacity: '.7' }} }>
      <Grid container justifyContent="center" alignContent="center" rowSpacing={1} sx={ {width: '80px'} }>
        <Grid item>
          <Instagram sx={ { height: '50px', width: '50px' } }/>
        </Grid>
        <Grid item>
          <Typography variant="body1" sx={ {textTransform: 'lowercase'} }>@elitespacefootball</Typography>
        </Grid> 
      </Grid>
      
    </Button>
  )
}
