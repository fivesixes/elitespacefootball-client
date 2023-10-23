import { Box } from '@mui/material';
import React from 'react';

export default function FullPlayerImage(props) {

  return (
    <Box style={ { border: '2px solid green', ...props.style } }>
      <img src={props.imageURL} style={ { height: 'inherit', marginLeft: '20px' } }/>
    </Box>
    
  );
}