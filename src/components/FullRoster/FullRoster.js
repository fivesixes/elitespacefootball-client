import React from 'react';
import { Grid, ThemeProvider, CircularProgress, Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import SectionHeader from '../SectionHeader/SectionHeader';
import styles from './styles';
import RosterElement from './RosterElement/RosterElement';
import theme from '../theme';

export default function FullRoster( { editMode, alumni, responsiveThreshold } ) {

  const entries = useSelector( ( state ) => { return state.entries } );
  const alumniEntries = alumni ? useSelector( (state) => { return state.alumniEntries } ) : null;

  return (
    <>
    {
      window.innerWidth < responsiveThreshold ?
      <Grid container style={ { display: 'flex', flexDirection: 'column', ...window.innerWidth < responsiveThreshold ? { marginTop: '30px' } : {} } }>
        <Grid item sx={ {width: '100%', textAlign: 'center'} }>
          <SectionHeader text="ROSTER" custom={true} style={styles.sectionHeader} />
        </Grid>
         
        {!entries.length ? <ThemeProvider theme={theme}><Box sx={ { minHeight: '200px', textAlign: 'center', paddingTop: '100px' } }><CircularProgress/><Typography variant={window.innerWidth < responsiveThreshold ? 'body1' : 'h4'} sx={{margin: '20px'}}>Fetching Players...</Typography></Box></ThemeProvider> :
          entries[0].map((player, index) => (
          <Grid key={index} item sx={{}}>
            <RosterElement id={player._id} imgURL={player.passportPhoto} playerName={`${player.firstName} ${player.lastName}`} height={player.height} position={player.positions[0].shorthand} editMode={editMode} responsiveThreshold={responsiveThreshold}/>
          </Grid>
        ))}
      </Grid> 
      :
       <Grid container style={ {paddingBottom: '50px'} }>
         <Grid item sx={ {width: '100%', textAlign: 'center'} }>
           <SectionHeader text="ROSTER" custom={true} style={styles.sectionHeader} />
         </Grid>
         
         {!entries.length ? <ThemeProvider theme={theme}><Box sx={ { display: 'flex', flexDirection: 'column', margin: '100px 350px 100px 350px', justifyContent: 'center', alignItems: 'center', alignContent: 'center', minHeight: '200px', padding: '100px' } }><CircularProgress/><Typography variant={window.innerWidth < responsiveThreshold ? 'body1' : 'h3'} sx={{margin: '20px'}}>Fetching Players...</Typography></Box></ThemeProvider> :
           entries[0].map((player, index) => (
           <Grid key={index} item sx={styles.gridItem}>
             <RosterElement id={player._id} imgURL={player.passportPhoto} playerName={`${player.firstName} ${player.lastName}`} height={player.height} position={player.positions[0].shorthand} editMode={editMode}/>
           </Grid>
         ))}
       </Grid>
    }
    </>
  );
}
