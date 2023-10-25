import React from 'react';
import { Box } from '@mui/material';

import styles from './styles';
import CustomTypography from '../CustomTypgraphy';
import ReadMore from '../ReadMore/ReadMore';

export default function ProfileDataUnit(props) {

  switch (props.fieldType) {

    case 'BASIC':
      return ( 
        <Box justifyContent="center" alignContent="center" style={{...styles.main, textTransform: 'capitalize'}}>
          <CustomTypography text={props.fieldName} style={ { fontSize: '15px', color: '#999999' } } />
          <CustomTypography text={props.value} style={ { fontSize: '25px', fontWeight: 'bold' } } />
        </Box>
      );

    case 'HEADER':
      return (
        <Box justifyContent="center" alignContent="center" style={styles.main}>
          <CustomTypography variant="h4" text={props.value} style={ {textTransform: 'uppercase'} } />
        </Box>
      );
    
    case 'SUBHEADER':
      return (
        <Box justifyContent="center" alignContent="center" style={styles.main}>
          <CustomTypography variant="h6" text={props.value} style={ {textTransform: 'uppercase', fontWeight: 'light'} } />
        </Box>
      );

    case 'EMPHATIC':
      return ( 
        <Box justifyContent="center" alignContent="center" style={styles.main}>
          <CustomTypography text={props.fieldName} style={ { fontSize: '15px', color: '#999999' } } />
          <CustomTypography text={props.value} style={ { fontSize: '25px', fontWeight: 'bold' } } />
        </Box>
      );

    case 'DESCRIPTIVE':
      const maxLength = 200;
      
      return (
        <Box justifyContent="center" alignContent="center" style={styles.main}>
          <CustomTypography text={props.fieldName} style={ { fontSize: '15px', color: '#999999' } } />
          <ReadMore text={props.value} maxLength={maxLength} style={ { color: 'black', cursor: 'pointer', fontWeight: 'bold' } } mainTextStyle={ { maxWidth: '100%' } }/>
        </Box>
      );

    default:
      return (
        <CustomTypography text="Nothing to display" />
      );
  }

}
