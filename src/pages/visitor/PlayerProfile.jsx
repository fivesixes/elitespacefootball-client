import React from 'react';

import FullProfile from '../../components/FullProfile/FullProfile';
import AltNav from '../../components/AltNav/AltNav';
import MainHeader from '../../components/MainHeader/MainHeader';

export default function PlayerProfile( { responsiveThreshold } ) {

  return(
    <React.Fragment>
      { window.innerWidth < responsiveThreshold ?  <AltNav/> : <MainHeader selected="ACADEMY"/> }
      <FullProfile responsiveThreshold={responsiveThreshold}/>
    </React.Fragment>
  );
}