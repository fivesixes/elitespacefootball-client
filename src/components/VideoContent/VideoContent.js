import React from 'react';
import YouTube from 'react-youtube';
import { Card, CardContent, Box, Button, Typography, Grid } from '@mui/material';

import { styled, keyframes} from '@mui/system';

import styles from './styles';
import YoutubeCard from '../SocialMediaLinks/YoutubeCard/YoutubeCard';

const typingAnimation = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`;

const TypingText = styled('div')`
  overflow: hidden;
  white-space: nowrap;
  animation: ${typingAnimation} 2s steps(20);
`;

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
      opts.height = 253 / 1.5;
      opts.width = 450 / 1.5;
    }

    return opts;
  }

  const handleWatchMore = () => {
    window.location.href = 'https://www.youtube.com/@elitespacefootball';
  }

  const handleSubscribe = () => {
    window.location.href = 'https://www.youtube.com/@elitespacefootball?view_as=subscriber?sub_confirmation=1';
    
  }

  return (
    <Grid container justifyContent="center" alignContent="center" sx={{ ...styles.main, display: 'flex', flexDirection: 'column', transition: 'transform 1s ease', '&:hover': { transform: 'scale(1.01)' } }}>
      <Grid item xs={12}>
        <Box sx={ { margin: '10px 0px 10px 0px', textAlign: 'center', minHeight: 235 / 1.5, minWidth: 450 / 1.5 } }>
          { <YouTube videoId={videoId} opts={handleOptsResponsiveness()} style={{border: '2px solid green', textAlign: 'center'}}/> || <YoutubeCard style={ { margin: '30px', } } /> }
        </Box>
      </Grid>
      <Grid item xs={12} sx={ { display: 'flex', alignContent: 'center', justifyContent: 'center' } }>
        <Box>
            <Box sx={{minWidth: window.innerWidth < responsiveThreshold ? '100px' : 450, backgroundColor: 'green', padding: '30px', borderRadius: '0px 0px 20px 20px', color: 'white'}}>
              <Typography variant={window.innerHeight < responsiveThreshold ? 'h6' : 'h5'} sx={{margin: '0px 0px 20px 0px'}}>{videoTitle}</Typography>
              { window.innerWidth < responsiveThreshold ? <></> : <TypingText><Typography variant={window.innerHeight < responsiveThreshold ? 'body1' : 'h6'} sx={ { fontWeight: 'light' } }>{description}</Typography></TypingText>}
            </Box>
            <Box sx={ {textAlign: 'center'} }>
              <Button disableElevation variant="contained" onClick={handleWatchMore} sx={ { color: 'white', backgroundColor: 'red', margin: '20px', '&:hover': { color: 'red', backgroundColor: 'white'} } }><Typography variant="h6">Watch More</Typography></Button>
              <Button disableElevation variant="contained" onClick={handleSubscribe} sx={ { color: 'white', backgroundColor: 'red', margin: '20px', '&:hover': { color: 'red', backgroundColor: 'white'} } }><Typography variant="h6">Subscribe</Typography></Button>
            </Box>
        </Box>
      </Grid>
    </Grid>
  )
}
