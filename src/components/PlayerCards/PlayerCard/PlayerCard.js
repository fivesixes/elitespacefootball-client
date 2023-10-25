import React, { useEffect, useState } from 'react';
import { Button, Card, CardContent, CardMedia, Typography, Box, ThemeProvider } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { fetchPlaylistId } from '../../../api/youtube';
import styles from './styles';
import theme from '../../theme';

export default function PlayerCard(props) {
  const [playlistId, setPlaylistId] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    async function getPlaylistId() {
      try {
        const id = await fetchPlaylistId(props.playerName.toUpperCase());
        setPlaylistId(id);
      } catch (error) {
        console.error("Error fetching playlist ID: ", error);
      }
    }
    getPlaylistId();
  }, [props.playerName]);

  const handleWatchVideos = () => {
    if (playlistId) {
      const youtubeUrl = `https://www.youtube.com/playlist?list=${playlistId}`;
      window.location.href = youtubeUrl;
    }
  };

  const handleViewProfile = () => {
    navigate(`/academy/roster/${props.id}`);
  }

  return (
    <Card variant="outlined" style={styles.main}>
      <CardMedia height="70%" component="img" image={props.imgURL} alt={props.playerName} title={props.playerName} sx={styles.cardMedia} />
      <CardContent style={styles.cardContent}>
        <Box style={styles.box}><Typography style={styles.typography}>{props.playerName}</Typography></Box><br />
        <Button variant="contained" onClick={handleWatchVideos} style={styles.button}>Watch Videos</Button><br />
        <ThemeProvider theme={theme}><Button variant="text" onClick={handleViewProfile} style={{textTransform: 'none', color: 'black', marginBottom: '10px'}}>View full Profile→</Button></ThemeProvider>
      </CardContent>
    </Card>
  );
}
