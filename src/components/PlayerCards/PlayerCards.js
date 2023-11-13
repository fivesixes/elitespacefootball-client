import React from 'react';
import { Box, Grid, ThemeProvider, CircularProgress, Typography, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from './styles';
import SectionHeader from '../SectionHeader/SectionHeader';
import NavArrow from '../NavArrow/NavArrow';
import MainCarousel from '../MainCarousel/MainCarousel';
import CustomButton from '../CustomButton';
import theme from '../theme';

export default function PlayerCards({responsiveThreshold}) {

  const entries = useSelector( ( state ) => { return state.entries } );
  const navigate = useNavigate();

  const handleFullRosterClick = () => {
    window.scrollTo(0,0);
    navigate('/academy/roster');
  }

  return (
    <ThemeProvider theme={theme}>
      {
        !entries.length ? <></> :
        <Grid container justifyContent="center" alignContent="center" style={ {...styles.main, }}>
        <Grid item sx={ { width: '100%' } }>
          <SectionHeader text="SPOTLIGHT" />
        </Grid>
        <Grid item sx={ { width: '100%'} }>
          <Box sx={ { textAlign: 'center', minHeight: '250px', padding: !entries.length ? '200px 0px 0px 0px': '0px' } }>
            {!entries.length ? <Box><CircularProgress/><Typography variant={window.innerWidth < responsiveThreshold ? 'body1' : 'h4'} sx={{margin: '20px'}}>Turning on spotlight...</Typography></Box> : <MainCarousel rosterEntries={entries[0]}/>}
          </Box>
        </Grid> 
        <Grid item>
          <Button variant="outlined" onClick={handleFullRosterClick} sx={ { borderRadius: '40px', margin: '40px', zIndex: '0' } }><Typography variant={window.innerWidth < 900 ? 'h6' : 'h5'} sx={ { fontWeight: 'light' } }>View Full Roster</Typography></Button>
        </Grid>
      </Grid>
      }
    </ThemeProvider>
  );
}