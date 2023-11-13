import React from 'react';

import { Box, ThemeProvider, Button } from '@mui/material';

import AnimatedHeader from '../../components/AnimatedHeader/AnimatedHeader';
import Billboard from '../../components/Billboard/Billboard';
import AltBillboard from '../../components/Billboard/AltBillboard';
import AltBillboard1 from '../../components/Billboard/AltBillboard1';
import Billboard1 from '../../components/Billboard/BillBoard1';
import AltBillboard2 from '../../components/Billboard/AltBillboard2';
import Billboard2 from '../../components/Billboard/BillBoard2';
import MainHeader from '../../components/MainHeader/MainHeader';
import PlayerCards from '../../components/PlayerCards/PlayerCards';
import VideoContent from '../../components/VideoContent/VideoContent';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import AltNav from '../../components/AltNav/AltNav';

import theme from '../../components/theme';

export default function Home( {responsiveThreshold} ) {

  return(
    <React.Fragment>
      { window.innerWidth < responsiveThreshold ?  <AltNav/> : <MainHeader selected="HOME"/> }
        { window.innerWidth < responsiveThreshold ? 
          <AnimatedHeader animated={true} variant="h6" style={ { margin: '50px 0px 20px 0px', textAlign: 'center', color: 'white', textTransform: 'uppercase', width: '100%'}}/> 
          : 
          <AnimatedHeader animated={true} variant="h3" style={ { margin: '100px 0px 20px 0px', textAlign: 'center', color: 'white', textTransform: 'uppercase', fontWeight: 'bold'}}/> }
        { window.innerWidth < responsiveThreshold ? <AltBillboard/> : <Billboard/> }
        <PlayerCards responsiveThreshold={responsiveThreshold}/>
        { window.innerWidth < responsiveThreshold ? <AltBillboard1/> : <Billboard1/> }
        { window.innerWidth < responsiveThreshold ? <AltBillboard2/> : <Billboard2/> }
        {
          window.innerWidth < responsiveThreshold ? 
          <Box sx={{textAlign: 'center'}}>
            <ThemeProvider theme={theme}><Button variant="text" onClick={() => {window.location.href = 'https://www.youtube.com/@elitespacefootball'}}><SectionHeader text="See the latest at the academy" custom={true} style={ { margin: '20px 0px 10px 0px', fontSize: '25px', fontWeight: 'bold', textAlign: 'center', textTransform: 'uppercase', color: 'green' } }/></Button></ThemeProvider>
          </Box> :
          <>
            <SectionHeader animated={true} text="What's Happening at the academy?" textVariant={window.innerWidth < responsiveThreshold ? 'h4' : 'h3'} custom={true} style={ { textTransform: 'uppercase',  fontWeight: 'bold', color: 'green', padding: '20px', textAlign: 'center'} }/>
          </>
        }
        <VideoContent responsiveThreshold={responsiveThreshold} videoId={'GjmmCuJ5GjU'}/>
    </React.Fragment>
  );
}