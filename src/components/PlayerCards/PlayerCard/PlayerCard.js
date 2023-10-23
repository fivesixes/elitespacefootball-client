import React, { useEffect, useState } from 'react';
import { Button, Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { fetchPlaylistId } from '../../../api/youtube';
import styles from './styles';

export default function PlayerCard(props) {
  const [playlistId, setPlaylistId] = useState(null);

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

  return (
    <Card variant="outlined" style={styles.main}>
      <CardMedia height="70%" component="img" image={props.imgURL} alt={props.playerName} title={props.playerName} sx={styles.cardMedia} />
      <CardContent style={styles.cardContent}>
        <Box style={styles.box}><Typography style={styles.typography}>{props.playerName}</Typography></Box><br />
        <Button variant="contained" onClick={handleWatchVideos} style={styles.button}>Watch Videos</Button><br />
        <Link to={`/academy/roster/${props.id}`} style={styles.link}>View full Profile→</Link>
      </CardContent>
    </Card>
  );
}
