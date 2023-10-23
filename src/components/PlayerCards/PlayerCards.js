import React from 'react';
import { Box, Grid, ThemeProvider, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from './styles';
import SectionHeader from '../SectionHeader/SectionHeader';
import NavArrow from '../NavArrow/NavArrow';
import MainCarousel from '../MainCarousel/MainCarousel';
import CustomButton from '../CustomButton';
import theme from '../theme';

export default function PlayerCards() {

  const entries = useSelector( ( state ) => { return state.entries } );
  const navigate = useNavigate();

  const handleFullRosterClick = () => {
    navigate('/academy/roster');
  }

  return (
    
    <ThemeProvider theme={theme}>
      <Grid container justifyContent="center" alignContent="center" style={ {...styles.main, }}>
        <Grid item sx={ { width: '100%' } }>
          <SectionHeader text="SPOTLIGHT" />
        </Grid>
        <Grid item sx={ { width: '100%'} }>
          <Box sx={ { textAlign: 'center', minHeight: '400px', padding: !entries.length ? '200px 0px 0px 0px': '0px' } }>
            {!entries.length ? <CircularProgress/> : <MainCarousel rosterEntries={entries[0]}/>}
          </Box>
        </Grid> 
        <Grid item><CustomButton customProps={ {variant: 'outlined'} } text="VIEW FULL ROSTER" onClick={handleFullRosterClick} style={styles.customButton}></CustomButton></Grid>
      </Grid>
    </ThemeProvider>
    
  );
}