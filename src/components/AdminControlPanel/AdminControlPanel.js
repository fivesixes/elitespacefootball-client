import React from 'react';
import { Box, Button, Grid, ThemeProvider } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import styles from './styles';
import theme from '../theme';

export default function AdminControlPanel() {

  const navigate = useNavigate();

  const handleCreatePlayer = () => {
    navigate('/admin/createplayer');
  }

  const handleModify = () => {
    navigate('/admin/modifyplayer');
  }

  return (
    <Box style={styles.main}>
      <Grid container rowSpacing={3} sx={ { marginLeft: '37.5%'} }>
        <Grid item xs={10}>
          <ThemeProvider theme={theme}>
            <Button variant="contained" onClick={handleCreatePlayer} sx={ { width: '30%' } }>Create Player</Button>
          </ThemeProvider>
        </Grid>
        <Grid item xs={10}>
          <ThemeProvider theme={theme}>
            <Button variant="contained" onClick={handleModify} sx={ { width: '30%' } }>Modify</Button>
          </ThemeProvider>
        </Grid>
      </Grid>
    </Box>
  );
}