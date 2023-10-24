import React from 'react'
import { Facebook } from '@mui/icons-material'
import { Button, Grid, Typography } from '@mui/material'

export default function FacebookCard() {
  
  const handleClick = () => {
    window.location.href = 'https://www.facebook.com/elitespacefootball';
  }

  return (
    <a style={{all: 'unset'}}>
      <Button disableElevation onClick={handleClick} variant="text" sx={ {color: 'white', padding: '40px', '&:hover': { backgroundColor: '#3b5998', color: 'white', opacity: '.7' }} }>
        <Grid container justifyContent="center" alignContent="center" rowSpacing={1} sx={ {width: '80px'} }>
          <Grid item>
            <Facebook sx={ { height: '50px', width: '50px' } }/>
          </Grid>
          <Grid item>
            <Typography variant="body1" sx={ {textTransform: 'lowercase'} }>@elitespacefootball</Typography>
          </Grid> 
        </Grid>
      </Button>
    </a>
  )
}
