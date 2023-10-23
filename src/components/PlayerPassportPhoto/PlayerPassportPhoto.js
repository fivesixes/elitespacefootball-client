import React from 'react';

import styles from './styles';
import { CardMedia, Paper } from '@mui/material';

export default function PlayerPassportPhoto(props) {

  return(
    <img src={props.imgURL} alt={props.alt} style={ { ...props.style, height: '100px', border: '2px solid green' } }/>
  );
}