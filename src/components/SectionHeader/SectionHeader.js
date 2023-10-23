import React from "react";
import { Box } from "@mui/material";

import CustomTypography from '../CustomTypgraphy';
import styles from './styles';

export default function SectionHeader(props) {

  return (
    <Box justifyContent="center" alignContent="center" style={ props.custom? props.style: styles.main }>
      <CustomTypography animated={props.animated} variant={props.textVariant ? props.textVariant : 'h4'} text={props.text} style={ props.custom ? props.style : styles.customTypography } />
    </Box>
  );
}