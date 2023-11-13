import React, { useState, useEffect, useRef } from 'react';
import YouTube from 'react-youtube';
import { Card, CardContent, Box, Button, Typography, Grid } from '@mui/material';

import { styled, keyframes} from '@mui/system';

import styles from './styles';
import YoutubeCard from '../SocialMediaLinks/YoutubeCard/YoutubeCard';

export default function VideoContent({videoTitle, description, videoId, responsiveThreshold}) {

  const opts = {
    height: 253 * 2,
    width: 450 * 2,
    playerVars: {
      autoplay: 1,
      mute: 1,
      controls: 0,
    },
  };

  const handleOptsResponsiveness = () => {
    if (responsiveThreshold  && window.innerWidth < responsiveThreshold){
      opts.height = 253 / 1.3;
      opts.width = 450 / 1.3;
    }

    return opts;
  }

  const handleWatchMore = () => {
    window.location.href = 'https://www.youtube.com/@elitespacefootball';
  }

  return (
    <Grid container justifyContent="center" alignContent="center" sx={{ ...styles.main, display: 'flex', backgroundColor: 'green', border: '1px solid #cbff99', flexDirection: 'column', transition: 'transform 1s ease', '&:hover': { transform: 'scale(1.01)' } }}>
      <Grid item>
        <Box sx={ { margin: '10px 0px 10px 0px', textAlign: 'center', minHeight: 235 / 1.5, minWidth: 450 / 1.5 } }>
          { <YouTube videoId={videoId} opts={handleOptsResponsiveness()} style={{borderRadius: '2px', backgroundColor: 'green', textAlign: 'center', padding: '5px'}}/> || <YoutubeCard style={ { margin: '30px', } } /> }
        </Box>
      </Grid>
      <Grid item justifyContent="center" alignContent="center" alignItems="center" sx={ { width: '100%', textAlign: 'center' } }>
        <Box sx={ { textAlign: 'center' } }>
          <Button variant="contained" disableElevation onClick={handleWatchMore} sx={ { color: 'white', backgroundColor: '#dc3326', margin: '20px', width: window.innerWidth < responsiveThreshold ? '250px' : '500px', '&:hover': { color: '#dc3326', backgroundColor: 'white'} } }><Typography variant="h6">Visit our channel</Typography></Button>
        </Box>
      </Grid>
    </Grid>
  )
}
