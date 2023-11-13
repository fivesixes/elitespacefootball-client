import React from 'react';

import AltNav from '../../components/AltNav/AltNav';
import AuthForm from '../../components/AuthForm/AuthForm';
import AdminPageHeader from '../../components/AdminPageHeader/AdminPageHeader';
import { Typography } from '@mui/material';

export default function CreateAdmin( { responsiveThreshold } ) {

  return(
    <React.Fragment>
      { window.innerWidth < responsiveThreshold ? <><AltNav /><Typography variant="h6" sx={ { textAlign: 'center', margin: '50px' } }>UNABLE TO ACCESS ADMIN PAGE ON THIS DEVICE</Typography></> : 
        <>
          <AdminPageHeader />
          <AuthForm
          fields={  [ 
            { label: 'Email', type: 'email' },
            { label: 'Password', type: 'password' },
            { label: 'Confirm Password', type: 'password' },
            { label: 'Referral Token', type: 'text' },
          ] }
          buttons={ [
            { text: 'CREATE ADMIN'},
            { text: 'SIGN IN'}
          ] }
          formName="CREATE ADMIN" />
        </> 
      }
    </React.Fragment>
  );
}