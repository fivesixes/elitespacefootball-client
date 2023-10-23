import React from 'react';
import { Box, Card, CardContent, Grid, Typography, Button, ThemeProvider } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

import styles from './styles';
import theme from '../../theme';

export default function StaffProfileCard ( { name, imageURL, position, description, linkedInURL } ) {
  
  return (
    <Card variant="outlined" sx={{ display: 'flex' }}>
      {imageURL ? <CardMedia component="img" sx={{ width: '300px' }} image={imageURL} alt={`${name} Profile Photo`}/> : <AccountCircle/>}
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant="h5">{name}</Typography>
          <Typography variant="subtitle1">{position}</Typography>
        </CardContent>
        <Typography variant="body1">
          {description}
        </Typography>
        <ThemeProvider theme={theme}>
          <Button variant="text" sx={ {textTransform: 'none'} }>View LinkedIn Profile →</Button>
        </ThemeProvider>
      </Box>
      
    </Card>
  )
}
