import React from 'react';

import SectionHeader from '../../components/SectionHeader/SectionHeader';
import AdminPageHeader from '../../components/AdminPageHeader/AdminPageHeader';
import RosterEntryForm from '../../components/RosterEntryForm/RosterEntryForm';
import AltNav from '../../components/AltNav/AltNav';
import { Typography } from '@mui/material';

export default function CreatePlayer( { responsiveThreshold } ) {

  return(
    <React.Fragment>
      { window.innerWidth < responsiveThreshold ? <><AltNav /><Typography variant="h6" sx={ { textAlign: 'center', margin: '50px' } }>UNABLE TO ACCESS ADMIN PAGE ON THIS DEVICE</Typography></> : 
        <>
          <AdminPageHeader />
          <SectionHeader text="Enter Player Details" custom={true} style={ { fontWeight: 'bold', 
            textAlign: 'center',
            textTransform: 'uppercase', 
            color: 'white', 
            backgroundColor: 'green',
            padding: '20px',
            borderRadius: '10px' } } />
          <RosterEntryForm />
        </> 
      }
    </React.Fragment>
  );
}