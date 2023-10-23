import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';

import styles from './styles';
import { Button, ThemeProvider, Typography } from '@mui/material';
import theme from '../theme';
import EmailButton from '../EmailButton';
import WhatsAppButton from '../WhatsAppButton';

export default function ContactUs( { responsiveThreshold } ) {
  const [selectedTab, setSelectedTab] = useState(0);
  const navigate = useNavigate();

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };

  const menuItems = ['Partnership and Feedback', 'Academy Enrollment',];

  const tabContent = [
    'ELITE SPACE FOOTBALL is a for-profit private organization requiring capital for day-to-day operation and is thus always open to contact from potential sponsors. We are also open to other forms of partnership aimed at enabling us achieve our various goals and terms of any form of partnership will be determined, and details on our organizational structure and function will be provided on contact. Interested parties can reach out to us through our various channels of communication and all types of feedback is appreciated so interested parties are encouraged to let us know how you think we can better achieve our goals. ',
    'The ELITE SPACE FOOTBALL academy only accepts applications in person for those interested in joining the academy. Information on eligibitily as well as other terms and conditions can be found by following the link below and any information not provided will be given to applicants and interested parties in person. Admission is not guaranteed as applicants must also pass the screening test holding for a specified period after application. Channels of communication are always open for enquiries on enrollment in the academy, but before you send us a message, see further ',
  ];

  const selectedStyle = (index) => {
    if (selectedTab == index) {
      return {
        cursor: 'default',
        color: 'green',
        backgroundColor: window.innerWidth < responsiveThreshold ? '#dedede' : 'white'
      }
    }
    if (selectedTab == index) {
      return {
        cursor: 'default',
        color: 'green',
        backgroundColor: window.innerWidth < responsiveThreshold ? '#dedede' : 'white',
      }
    }
  }

  const handleEnrollmentDetails = () => {
    navigate('/academy/enrollment');
  }

  const handleAbout = () => {
    navigate('/about');
  }

  const enrollmentDetails = (selectedTab) => {
    if (selectedTab == 1) {
      return <Button variant="text" onClick={handleEnrollmentDetails} sx={{color: 'green', textTransform: 'none', padding: '0px', textDecoration: 'underline', fontSize: 'inherit'}}>details on academy enrollment.</Button>
    }
  }

  const handleTeamRoster = () => {
    navigate('/academy/roster');
  }

  const about = (selectedTab) => {
    if (selectedTab == 0) {
      return <Button variant="text" onClick={handleAbout} sx={{color: 'green', textTransform: 'none', padding: '0px', margin: '0px 5px 1px 5px', textDecoration: 'underline', fontSize: 'inherit'}}>Find out more on ELITE SPACE FOOTBALL.</Button>
    }
  }

  const teamRoster = (selectedTab) => {
    if (selectedTab == 0) {
      return (
        <Typography variant="body1" sx={ { textAlign: 'left', fontSize: '18px', marginBottom: '70px' } }>
          The players presented in the 
          <Button variant="text" onClick={handleTeamRoster} sx={{color: 'green', textTransform: 'none', padding: '0px', margin: '0px 5px 1px 5px', textDecoration: 'underline', fontSize: 'inherit'}}>team roster</Button>
           are for the consideration of agents, scouts and relevant football club personnel, particularly those associated with football clubs in Europe looking to partner with us in enabling the career transition of said players by facilitating transfers to football clubs in Europe. Information on each player is available on each player's profile page and we are open to contact from interested parties.
        </Typography>
      )
    }
  }

  return (
    <Grid container sx={{display: 'flex', flexDirection: 'column', ...styles.main}}>
        <Grid item sx={{display: 'flex', flexDirection: 'row'}}>
          {menuItems.map((item, index) => (
            <Paper
              key={index}
              elevation={selectedTab === index ? 3 : 0}
              onClick={() => handleTabClick(index)}
              style={ {cursor: 'pointer', color: 'white', backgroundColor: 'green', ...selectedTab == index ? selectedStyle(index) : {}, width: '50%', padding: window.innerWidth < responsiveThreshold ? '30px 10px 20px 10px' : '30px 0px 0px 0px', textAlign: 'center' } }
            >
              <Typography variant={ window.innerWidth < responsiveThreshold ? 'body1' : 'h4'} sx={ { textTransform: 'uppercase' } }>{item}</Typography>
            </Paper>
          ))}
        </Grid>
        <Grid item>
          <Box sx={ { padding: window.innerWidth < responsiveThreshold ? '20px 0px 20px 0px' : '50px', minHeight: '400px', backgroundColor: window.innerWidth < responsiveThreshold ? '#dedede' : 'white' } }>
            <Typography variant="body1" sx={ { textAlign: 'left', fontSize: '18px', marginBottom: '70px' } }>{teamRoster(selectedTab)}{tabContent[selectedTab]}{enrollmentDetails(selectedTab)}{about(selectedTab)}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sx={{textAlign: 'center', padding: '40px 0px 0px 0px'}}>
          <Typography variant="h5" sx={{fontWeight: 'bold'}}>For more enquiries</Typography>
        </Grid>
        <Grid item xs={12}>
          <Box sx={ { textAlign: 'center', display: 'flex', flexDirection: 'column' } }>
            <ThemeProvider theme={theme}>
              <EmailButton />
              <WhatsAppButton />
            </ThemeProvider>
          </Box>
        </Grid>
      </Grid>
  );
}
