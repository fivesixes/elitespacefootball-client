import React from 'react';
import { Button, Typography, Card, CardContent, ThemeProvider } from '@mui/material';
import ReadMore from '../ReadMore/ReadMore';
import YouTube from 'react-youtube';

import { fetchPlaylistId } from '../../api/youtube';

import styles from './styles';
import theme from '../theme';

export default function MediaCard({ playlistId, videoId, contentName, description }) {

  const handleSeeMore = () => {
    if (playlistId) {
      const youtubeUrl = `https://www.youtube.com/playlist?list=${playlistId}`;
      window.location.href = youtubeUrl;
    }
  };

  const opts = {
    height: '253',
    width: '450',
    playerVars: {
      autoplay: 1,
      mute: 1,
      controls: 0,
    },
  };

  return (
    <Card style={styles.main}>
      <div style={{ position: 'relative', }}>
        <YouTube videoId={videoId} opts={opts} />
      </div>
      <CardContent>
        <Typography variant="h5" sx={styles.typography0} >{contentName}</Typography>
        <ReadMore text={description} maxLength={100} style={ { color: 'white', cursor: 'pointer', fontWeight: 'bold' } } mainTextStyle={ { color: 'white' } }/>
        <ThemeProvider theme={theme}>
          <Button variant="text" onClick={handleSeeMore}>
            <Typography variant="body1" sx={ { ...styles.typography1, textTransform: 'capitalize' }}>See more →</Typography>
          </Button>
        </ThemeProvider>
        
      </CardContent>
    </Card>
  );
};
