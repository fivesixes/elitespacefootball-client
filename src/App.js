import React, { useEffect, useSelector } from 'react';
import { Container, Typography, Button, ThemeProvider, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AuthForm from './components/AuthForm/AuthForm';
import AdminPageHeader from './components/AdminPageHeader/AdminPageHeader';

import './App.css';
import { getEntries } from './actions/entries';
import RosterEntryForm from './components/RosterEntryForm/RosterEntryForm';
import MainNav from './components/MainNav/MainNav';
import MainHeader from './components/MainHeader/MainHeader';
import PlayerCards from './components/PlayerCards/PlayerCards';
import MainFooter from './components/MainFooter/MainFooter';
import FullRoster from './components/FullRoster/FullRoster';
import FullProfile from './components/FullProfile/FullProfile';
import SectionHeader from './components/SectionHeader/SectionHeader';
import AboutSection from './components/AboutSection/AboutSection';
import AdminControlPanel from './components/AdminControlPanel/AdminControlPanel';
import SocialMediaLinks from './components/SocialMediaLinks/SocialMediaLinks';
import VideoContent from './components/VideoContent/VideoContent';
import ContactUs from './components/ContactUs/ContactUs';
import Staff from './components/Staff/Staff';
import EnrollmentDetails from './components/EnrollmentDetails/EnrollmentDetails';
import AltNav from './components/AltNav/AltNav';
import theme from './components/theme';
import AnimatedHeader from './components/AnimatedHeader/AnimatedHeader';

const responsiveThreshold = 900;

const App = () => {

  const dispatch = useDispatch();
  const entries = useSelector((state) => state.entries);

  useEffect(() => {
    const cachedData = localStorage.getItem('entries');

    if (!entries.length && !cachedData) {
      dispatch(getEntries());
    }
  }, [dispatch, entries]);

  useEffect(() => {
    localStorage.setItem('entries', JSON.stringify(entries));
  }, [entries]);

  return(
    <div className="App">
      <Container maxWidth="lg">
        <Router>
          <Routes>
            <Route path="/" element={
              <>
                { window.innerWidth < responsiveThreshold ?  <AltNav/> : <MainHeader selected="HOME"/> }
                { window.innerWidth < responsiveThreshold ? 
                  <AnimatedHeader animated={true} variant="h6" style={ { margin: '60px 0px 20px 0px', textAlign: 'center', color: 'white', textTransform: 'uppercase'}}/> 
                  : 
                  <AnimatedHeader animated={true} variant="h3" style={ { margin: '100px 0px 20px 0px', textAlign: 'center', color: 'white', textTransform: 'uppercase', fontWeight: 'bold'}}/> }
                <PlayerCards />
                {
                  window.innerWidth < responsiveThreshold ? 
                  <Box sx={{textAlign: 'center'}}>
                    <ThemeProvider theme={theme}><Button variant="text" onClick={() => {window.location.href = 'https://www.youtube.com/@elitespacefootball'}}><SectionHeader text="See the latest on our Channel" custom={true} style={ { margin: '20px 0px 10px 0px', fontSize: '25px', fontWeight: 'bold', textAlign: 'center', textTransform: 'uppercase', color: 'green' } }/></Button></ThemeProvider>
                  </Box> :
                  <>
                    <SectionHeader animated={true} text="What's Happening at the academy?" textVariant={window.innerWidth < responsiveThreshold ? 'h4' : 'h3'} custom={true} style={ { textTransform: 'uppercase',  fontWeight: 'bold', color: 'green', padding: '20px', textAlign: 'center'} }/>
                  </>
                }
                <VideoContent responsiveThreshold={responsiveThreshold} videoId={'GjmmCuJ5GjU'} videoTitle={'Elite Space FA v New Era FC (8 - 2) • ALL GOALS'} description={'Catch the latest highlights from the ELITE SPACE FOOTBALL Academy.'}/>
              </>
            } />
            <Route path="/about" element={
              <>
                { window.innerWidth < responsiveThreshold ?  <AltNav/> : <MainHeader selected="ABOUT"/> }
                <AboutSection responsiveThreshold={responsiveThreshold}/>
              </>
            }/>
            <Route path="/contactus" element={
              <>
                { window.innerWidth < responsiveThreshold ?  <AltNav/> : <MainHeader selected="CONTACT US"/> }
                <ContactUs responsiveThreshold={responsiveThreshold}/>
              </>
            }/>
            <Route path="/academy/roster" element={
              <>
                { window.innerWidth < responsiveThreshold ?  <AltNav/> : <MainHeader selected="ACADEMY"/> }
                <FullRoster editMode={false} responsiveThreshold={responsiveThreshold}/>
              </>
            }/>
            <Route path="/academy/staff" element={
              <>
                { window.innerWidth < responsiveThreshold ?  <AltNav/> : <MainHeader selected="ACADEMY"/> }
                <Staff />
              </>
            }/>
            <Route path="/academy/alumni" element={
              <>
                { window.innerWidth < responsiveThreshold ?  <AltNav/> : <MainHeader selected="ACADEMY"/> }
                <FullRoster alumni={true}/>
              </>
            }/>
            <Route path="/academy/enrollment" element={
              <>
                { window.innerWidth < responsiveThreshold ?  <AltNav/> : <MainHeader selected="ACADEMY"/> }
                <EnrollmentDetails responsiveThreshold={responsiveThreshold}/>
              </>
            }/>
            <Route path="/academy/roster/:id" element={
              <>
                { window.innerWidth < responsiveThreshold ?  <AltNav/> : <MainHeader selected="ACADEMY"/> }
                <FullProfile responsiveThreshold={responsiveThreshold}/>
              </>
            }/>
            <Route path="/cookiespolicy" element={
              <>
                { window.innerWidth < responsiveThreshold ?  <AltNav/> : <MainHeader selected="ABOUT"/> }
              </>
            }/>
            <Route path="/admin/" element={
              <>
                { window.innerWidth < responsiveThreshold ? <><AltNav /><Typography variant="h6" sx={ { textAlign: 'center', margin: '50px' } }>UNABLE TO ACCESS ADMIN PAGE ON THIS DEVICE</Typography></> : 
                  <>
                    <AdminPageHeader />
                    <AdminControlPanel />
                  </> 
                }  
              </>
            }/>
            <Route path="/admin/signin" element={
              <>
                { window.innerWidth < responsiveThreshold ? <><AltNav /><Typography variant="h6" sx={ { textAlign: 'center', margin: '50px' } }>UNABLE TO ACCESS ADMIN PAGE ON THIS DEVICE</Typography></> : 
                  <>
                  <AdminPageHeader />
                  <AuthForm
                  fields={  [ 
                    { label: 'Email', type: 'email' },
                    { label: 'Password', type: 'password' }, 
                  ] }
                  buttons={ [
                    { text: 'CREATE ADMIN'},
                    { text: 'SIGN IN'}
                  ] }
                  formName="SIGN IN" />
                  </> 
                }  
              </>
            } />
            <Route path="/admin/create" element={
              <>
                { window.innerWidth < responsiveThreshold ? <><AltNav /><Typography variant="h6" sx={ { textAlign: 'center', margin: '50px' } }>UNABLE TO ACCESS ADMIN PAGE ON THIS DEVICE</Typography></> : 
                  <>
                    <AdminPageHeader />
                    <AuthForm
                    fields={  [ 
                      { label: 'Email', type: 'email' },
                      { label: 'Password', type: 'password' },
                      { label: 'Confirm Password', type: 'password' },
                      { label: 'Referral Token', type: 'text' },
                    ] }
                    buttons={ [
                      { text: 'CREATE ADMIN'},
                      { text: 'SIGN IN'}
                    ] }
                    formName="CREATE ADMIN" />
                  </> 
                }
              </>
            } />
            <Route path="/admin/createplayer" element={
              <>
                { window.innerWidth < responsiveThreshold ? <><AltNav /><Typography variant="h6" sx={ { textAlign: 'center', margin: '50px' } }>UNABLE TO ACCESS ADMIN PAGE ON THIS DEVICE</Typography></> : 
                  <>
                    <AdminPageHeader />
                    <SectionHeader text="Enter Player Details" custom={true} style={ { fontWeight: 'bold', 
                      textAlign: 'center',
                      textTransform: 'uppercase', 
                      color: 'white', 
                      backgroundColor: 'green',
                      padding: '20px',
                      borderRadius: '10px' } } />
                    <RosterEntryForm />
                  </> 
                }
              </>
            }/>
            <Route path="/admin/modifyplayer" element={
              <>
              { window.innerWidth < responsiveThreshold ? <><AltNav /><Typography variant="h6" sx={ { textAlign: 'center', margin: '50px' } }>UNABLE TO ACCESS ADMIN PAGE ON THIS DEVICE</Typography></> : 
                  <>
                    <AdminPageHeader />
                    <FullRoster editMode={true}/>
                  </> 
                }
              </>
            }/>
          </Routes>
        </Router>
      </Container>
      <MainFooter />
    </div>
    
  );
}

export default App;