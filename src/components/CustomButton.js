import { Button } from '@mui/material';
import React from 'react';

export default function CustomButton(props) {

  return (
    <Button variant={props.customProps.variant} onClick={props.onClick} style={props.style}>{props.text}</Button>
  );
}