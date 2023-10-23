import React, { useState, useEffect } from 'react';
import { Box, ThemeProvider, CircularProgress, Grid, Typography, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { fetchPlaylistId } from '../../api/youtube';

import styles from './styles';
import ProfileDataUnit from '../ProfileDataUnit/ProfileDataUnit';
import ProfileVideos from '../ProfileVideos/ProfileVideos';
import theme from '../theme';
import PlayerPassportPhoto from '../PlayerPassportPhoto/PlayerPassportPhoto';
import PlayerMediaLink from '../PlayerMediaLink/PlayerMediaLink';

export default function FullProfile( { responsiveThreshold } ) {

  const { id } = useParams(); 
  const entries = useSelector((state) => state.entries);

  const entry = entries.length? entries[0].find((player) => player._id === id) : undefined;

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const profileVideos = entry.media.map( (video, index) => {
    return { title: video.videoTitle, content: video.videoContent, description: video.description }
  } );

  const [playlistId, setPlaylistId] = useState(null);

  useEffect(() => {
    async function getPlaylistId() {
      try {
        const entry_ = await entry;
        const id = entry_ ? await fetchPlaylistId(`${entry.firstName.toUpperCase()} ${entry.lastName.toUpperCase()}`) : null;
        setPlaylistId(id);
      } catch (error) {
        console.error("Error fetching playlist ID: ", error);
      }
    }
    getPlaylistId();
  }, [`${entry.firstName.toUpperCase()} ${entry.lastName.toUpperCase()}`]);

  const handleWatchClick = () => {
    if (playlistId) {
      const youtubeUrl = `https://www.youtube.com/playlist?list=${playlistId}`;
      window.location.href = youtubeUrl;
    }
  };

  return (
    <>
      {
        window.innerWidth < responsiveThreshold ?
        !entry ? <ThemeProvider theme={theme}><Box sx={ { marginLeft: '50%', marginTop: '15%' } }><CircularProgress sx={ { top: '50%', left: '50%' } }/></Box></ThemeProvider> :
        <Grid container sx={ { display: 'flex', flexDirection: 'column' } }>
          <Grid item justifyContent="center" alignContent="center">
            <PlayerPassportPhoto imgURL={entry.passportPhoto} alt={`${entry.firstName} photo`} style={ { margin: '15px' } }/>
          </Grid>
          <Grid item>
            <ProfileDataUnit fieldType="HEADER" fieldName="Name" value={`${entry.firstName} ${entry.lastName} ${entry.otherNames}`} />
            <ProfileDataUnit fieldType="SUBHEADER" fieldName="Position" value={entry.positions[0].full} />
          </Grid>
          <Grid item>
            <ProfileDataUnit fieldType="BASIC" fieldName="DOB" value={formatDate(entry.birthDate)} />
          </Grid>
          <Grid item>
            <ProfileDataUnit fieldType="BASIC" fieldName="Weight" value={`${entry.weight}kg`} />
          </Grid>
          <Grid item>
            <ProfileDataUnit fieldType="BASIC" fieldName="Stronger Foot" value={entry.strongerFoot} />
          </Grid>
          <Grid item>
            <ProfileDataUnit fieldType="EMPHATIC" fieldName="Height" value={`${entry.height}cm`} />
          </Grid>
          <Grid item>
            <ProfileDataUnit fieldType="BASIC" fieldName="Nationality" value={entry.nationality} />
          </Grid>
          <Grid item>
            <ProfileDataUnit fieldType="DESCRIPTIVE" fieldName="About" value={entry.about} />
          </Grid>
          <Grid item>
            <ThemeProvider theme={theme}><Button variant="contained" fullWidth onClick={handleWatchClick} sx={ { textAlign: 'left', padding: '0px', maxHeight: '70px', margin: '10px 0px 10 0px' } }><PlayerMediaLink playerName={entry.firstName} /></Button></ThemeProvider>
          </Grid>
          <Grid item>
            <Typography variant="h6" sx={ { margin: '30px 0px 30px 5px' } }>TACTICAL</Typography>
            <ProfileDataUnit fieldType="BASIC" fieldName="Pace(Time in 100m sprint)" value={`${entry.pace}secs`} />
          </Grid>
        </Grid>
        :
        !entry ? <ThemeProvider theme={theme}><Box sx={ { marginLeft: '50%', marginTop: '15%' } }><CircularProgress sx={ { top: '50%', left: '50%' } }/></Box></ThemeProvider> :
        <Grid container sx={ { display: 'flex', flexDirection: 'row', backgroundColor: 'white', marginTop: '50px' } }>
          <Grid container item sx={ { ...styles.main, width: '60%', display: 'flex', flexDirection: 'column'} }>
            <Grid item sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingBottom: '20px'}}>
              <Box>
                <ProfileDataUnit fieldType="HEADER" fieldName="Name" value={`${entry.firstName} ${entry.lastName} ${entry.otherNames}`} />
                <ProfileDataUnit fieldType="SUBHEADER" fieldName="Position" value={entry.positions[0].full} />
              </Box>
              <PlayerPassportPhoto imgURL={entry.passportPhoto} alt={`${entry.firstName} photo`} style={ { margin: '15px' } }/>
            </Grid>
            <Grid item sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingBottom: '20px'}}>
              <ProfileDataUnit fieldType="BASIC" fieldName="DOB" value={formatDate(entry.birthDate)} />
              <ProfileDataUnit fieldType="BASIC" fieldName="Weight" value={`${entry.weight}kg`} />
            </Grid>
            <Grid item sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingBottom: '20px'}}>
              <ProfileDataUnit fieldType="BASIC" fieldName="Stronger Foot" value={entry.strongerFoot} />
              <ProfileDataUnit fieldType="EMPHATIC" fieldName="Height" value={`${entry.height}cm`} />
            </Grid>
            <Grid item>
              <ProfileDataUnit fieldType="BASIC" fieldName="Nationality" value={entry.nationality} />
            </Grid>
            <Grid item>
              <ProfileDataUnit fieldType="DESCRIPTIVE" fieldName="About" value={entry.about} />
            </Grid>
            <Grid item sx={ { position: 'sticky'} }>
            <ThemeProvider theme={theme}><Button variant="contained" fullWidth onClick={handleWatchClick} sx={ { textAlign: 'left', padding: '0px', maxHeight: '100px', margin: '20px 0px 20px 0px' } }><PlayerMediaLink playerName={entry.firstName} /></Button></ThemeProvider>
            </Grid>
            <Grid item>
              <Typography variant="h6" sx={ { margin: '30px 0px 30px 5px' } }>TACTICAL</Typography>
              <ProfileDataUnit fieldType="BASIC" fieldName="Pace(Time in 100m sprint)" value={`${entry.pace}secs`} />
            </Grid>
          </Grid>
          <Grid container item sx={ { width: '40%', minHeight: '100%' } }>
            <ProfileVideos playlistTitle={`${entry.firstName.toUpperCase()} ${entry.lastName.toUpperCase()}`} videos={profileVideos} mediaDetails={entry.media} />
          </Grid>
        </Grid>
      }
    </>
    
  );
}