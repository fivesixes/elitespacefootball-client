import React from 'react';

import AdminPageHeader from '../../components/AdminPageHeader/AdminPageHeader';
import AdminControlPanel from '../../components/AdminControlPanel/AdminControlPanel';
import AltNav from '../../components/AltNav/AltNav';
import { Typography } from '@mui/material';

export default function AdminHome( { responsiveThreshold } ) {

  return(
    <React.Fragment>
      { window.innerWidth < responsiveThreshold ? <><AltNav /><Typography variant="h6" sx={ { textAlign: 'center', margin: '50px' } }>UNABLE TO ACCESS ADMIN PAGE ON THIS DEVICE</Typography></> : 
        <>
          <AdminPageHeader />
          <AdminControlPanel />
        </> 
      }  
    </React.Fragment>
  );
}