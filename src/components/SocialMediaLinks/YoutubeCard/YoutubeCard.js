import React from 'react';
import { YouTube } from '@mui/icons-material';
import { Button } from '@mui/material';

export default function YoutubeCard( { style } ) {
  return (
    <Button variant="contained" sx={ { padding: '10px', backgroundColor: 'red', cursor: 'default', '&:hover': { backgroundColor: 'red'},  ...style} }>
      <YouTube sx={ { height: '150px', width: '150px' } }/>
    </Button>
    
  )
}
