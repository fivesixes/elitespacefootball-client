import { Button, Grid, Typography } from '@mui/material';
import React from 'react';

import styles from './styles';
import MainLogo from '../MainLogo/MainLogo';
import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks';

export default function MainFooter() {

  return (
    <Grid container justifyContent="center" alignContent="center" sx={styles.main}>
      <Grid item xs={12} sx={{textAlign: 'center'}}>
        <SocialMediaLinks />
      </Grid>
      <Grid item xs={12} sx={{textAlign: 'center'}}>
        <MainLogo style={ {marginBottom: '10px'} }/>
        <Typography variant="body1" sx={ {color: '#cdcdcd'} }>The official website of ELITE SPACE FOOTBALL</Typography>
      </Grid>
      <Grid item xs={12} sx={{textAlign: 'center'}}>
        <Button variant="text" sx={ {color: 'white', textTransform: 'capitalize', fontWeight: 'light'} }>Cookies </Button>|
        <Button variant="text" sx={ {color: 'white', textTransform: 'capitalize', fontWeight: 'light'} }>Support</Button> |
        <Button variant="text" sx={ {color: 'white', textTransform: 'capitalize', fontWeight: 'light'} }>Privacy Policy</Button>
      </Grid>
    </Grid>
  );
}