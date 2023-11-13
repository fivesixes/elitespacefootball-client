import React from 'react';

import StaffDetail from '../../components/Staff/StaffDetail';
import AltNav from '../../components/AltNav/AltNav';
import MainHeader from '../../components/MainHeader/MainHeader';

export default function Staff( { responsiveThreshold } ) {

  return(
    <React.Fragment>
      { window.innerWidth < responsiveThreshold ?  <AltNav/> : <MainHeader selected="ACADEMY"/> }
      <StaffDetail />
    </React.Fragment>
  );
}