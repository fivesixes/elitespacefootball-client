import React from 'react';

import AltNav from '../../components/AltNav/AltNav';
import MainHeader from '../../components/MainHeader/MainHeader';
import FullRoster from '../../components/FullRoster/FullRoster';

export default function Roster( { responsiveThreshold } ) {

  return(
    <React.Fragment>
      { window.innerWidth < responsiveThreshold ?  <AltNav/> : <MainHeader selected="ACADEMY"/> }
      <FullRoster editMode={false} responsiveThreshold={responsiveThreshold}/>
    </React.Fragment>
  );
}