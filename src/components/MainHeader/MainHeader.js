import React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles'
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import MainNav from '../MainNav/MainNav';
import MainLogo from '../MainLogo/MainLogo';
import theme from '../theme';
import styles from './styles';

export default function MainHeader(props){

  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  }

  return (
    <Box style={styles.main}>
      <ThemeProvider theme={theme}>
        <Box style={styles.footer}>
          <Button variant="text" onClick={handleLogoClick}><MainLogo /></Button>
          <MainNav selected={props.selected} />
        </Box>
        
      </ThemeProvider>
    </Box>
  );
}