import React from 'react';

import AuthForm from '../../components/AuthForm/AuthForm';
import AdminPageHeader from '../../components/AdminPageHeader/AdminPageHeader';
import { Typography } from '@mui/material';
import AltNav from '../../components/AltNav/AltNav';

export default function AdminSignIn( { responsiveThreshold } ) {

  return(
    <React.Fragment>
      { window.innerWidth < responsiveThreshold ? <><AltNav /><Typography variant="h6" sx={ { textAlign: 'center', margin: '50px' } }>UNABLE TO ACCESS ADMIN PAGE ON THIS DEVICE</Typography></> : 
        <>
          <AdminPageHeader />
          <AuthForm
          fields={  [ 
            { label: 'Email', type: 'email' },
            { label: 'Password', type: 'password' }, 
          ] }
          buttons={ [
            { text: 'CREATE ADMIN'},
            { text: 'SIGN IN'}
          ] }
          formName="SIGN IN" />
        </> 
      } 
    </React.Fragment>
  );
}