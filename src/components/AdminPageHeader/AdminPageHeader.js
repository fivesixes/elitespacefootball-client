import React, { useEffect, useState } from 'react';
import { Avatar, ThemeProvider, Button } from '@mui/material';
import { Box } from '@mui/material';

import MainLogo from '../MainLogo/MainLogo';
import styles from './styles';
import theme from '../theme';

export default function AdminPageHeader() {

  const [ admin, setAdmin ] = useState(JSON.parse(localStorage.getItem('profile')));

  useEffect( () => {
    const token = admin?.token;

    setAdmin(JSON.parse(localStorage.getItem('profile')));
  }, [] );
  
  return (
    <ThemeProvider theme={theme}>
      <Box style={styles.main}>
        <MainLogo/>
        {admin ? (
          <>
            <Avatar></Avatar>
            <Button variant="contained">Logout</Button>
          </>
        ) : (
          <></>
        )}
      </Box>
    </ThemeProvider>
    
  );
}