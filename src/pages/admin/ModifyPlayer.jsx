import React from 'react';

import AdminPageHeader from '../../components/AdminPageHeader/AdminPageHeader';
import FullRoster from '../../components/FullRoster/FullRoster';
import { Typography } from '@mui/material';
import AltNav from '../../components/AltNav/AltNav';

export default function ModifyPlayer( { responsiveThreshold } ) {

  return(
    <React.Fragment>
      { window.innerWidth < responsiveThreshold ? <><AltNav /><Typography variant="h6" sx={ { textAlign: 'center', margin: '50px' } }>UNABLE TO ACCESS ADMIN PAGE ON THIS DEVICE</Typography></> : 
        <>
          <AdminPageHeader />
          <FullRoster editMode={true}/>
        </> 
      }
    </React.Fragment>
  );
}