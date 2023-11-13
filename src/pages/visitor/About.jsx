import React from 'react';

import AboutSection from '../../components/AboutSection/AboutSection';
import MainHeader from '../../components/MainHeader/MainHeader';
import AltNav from '../../components/AltNav/AltNav';

export default function About({responsiveThreshold}) {

  return(
    <React.Fragment>
      { window.innerWidth < responsiveThreshold ?  <AltNav/> : <MainHeader selected="ABOUT"/> }
      <AboutSection responsiveThreshold={responsiveThreshold}/>
    </React.Fragment>
  );
}