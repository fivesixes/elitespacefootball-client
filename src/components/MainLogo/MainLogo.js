import React from 'react';

import mainLogo1 from '../../esf-logo-1.png';
import mainLogo from '../../esf-logo.png';
import styles from './styles';


export default function MainLogo(props) {

  return (
    <img src={props.alt ? mainLogo1 : mainLogo} style={{...styles.main, ...props.style}} alt="Main logo"/>
  );
}