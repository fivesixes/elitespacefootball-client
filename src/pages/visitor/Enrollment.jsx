import React from 'react';

import EnrollmentDetails from '../../components/EnrollmentDetails/EnrollmentDetails';
import AltNav from '../../components/AltNav/AltNav';
import MainHeader from '../../components/MainHeader/MainHeader';

export default function Enrollment( { responsiveThreshold } ) {

  return(
    <React.Fragment>
      { window.innerWidth < responsiveThreshold ?  <AltNav/> : <MainHeader selected="ACADEMY"/> }
      <EnrollmentDetails responsiveThreshold={responsiveThreshold}/>
    </React.Fragment>
  );
}