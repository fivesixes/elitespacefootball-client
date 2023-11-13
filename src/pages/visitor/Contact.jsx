import React from 'react';

import AltNav from '../../components/AltNav/AltNav';
import MainHeader from '../../components/MainHeader/MainHeader';
import ContactUs from '../../components/ContactUs/ContactUs';

export default function Contact( { responsiveThreshold } ) {

  return(
    <React.Fragment>
      { window.innerWidth < responsiveThreshold ?  <AltNav/> : <MainHeader selected="CONTACT US"/> }
      <ContactUs responsiveThreshold={responsiveThreshold}/>
    </React.Fragment>
  );
}