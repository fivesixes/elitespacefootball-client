import React, { useState, useEffect } from 'react';
import { Box, Typography, CircularProgress, ThemeProvider } from '@mui/material';
import MediaCard from '../MediaCard/MediaCard';
import { fetchPlaylistId, fetchPlaylist } from '../../api/youtube';
import theme from '../theme';

import styles from './styles';

export default function ProfileVideos(props) {

  const [videos, setVideos] = useState([]);
  const [playlistId, setPlaylistId] = useState(null);

  const maxVideos = 5;

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const videos = await fetchPlaylist(props.playlistTitle);
        const videos_ = videos.length > maxVideos ? videos.slice(0, 5) : videos;
        setVideos(videos_);
      } catch (error) {
        console.error('Error fetching playlist videos:', error);
        setVideos([]);
      }
    };

    async function getPlaylistId() {
      try {
        const id = await fetchPlaylistId(props.playlistTitle);
        setPlaylistId(id);
      } catch (error) {
        console.error("Error fetching playlist ID: ", error);
      }
    }

    getPlaylistId();

    fetchVideos();
  }, [props.playlistTitle]);

  return (
    !videos.length ? (
      <ThemeProvider theme={theme}>
        <Box sx={{ marginLeft: '50%', marginTop: '15%' }}>
          <CircularProgress sx={{ top: '50%', left: '50%' }} />
        </Box>
      </ThemeProvider>
    ) : (
      <Box style={{ ...styles.main, ...props.style }}>
        <Typography variant="h5" sx={styles.typography}>VIDEOS</Typography>
        {videos.map((video, index) => (
          <MediaCard
            key={index}
            videoId={video.videoId}
            description={video.description}
            contentName={'Compilation'}
            playlistId={playlistId}
          />
        ))}
      </Box>
    )
  );
}
