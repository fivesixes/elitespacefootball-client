import React, { useEffect, useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import TextField from '@mui/material/TextField';
import { Button, Typography, Box, CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import { useNavigate } from 'react-router-dom';
import { createAdminEntry } from '../../actions/admin';
import { _baseURL } from '../../constants/endpoints';
import { createAdmin } from '../../api';


const creationFormState = {
  email: '',
  password: '',
  confirmPassword: '',
  referralToken: '',
  formSubmitted: false,
  response: null
}

const loginFormState = {
  email: '',
  password: '',
  confirmPassword: '',
  referralToken: '',
  formSubmitted: false,
  response: null
}

export default function AuthForm(props) {

  const [ data, setData ] = useState(props.formName === 'CREATE ADMIN' ? creationFormState : loginFormState);

  const defaultVariant = "outlined";
  const fields = props.fields;
  const buttons = props.buttons;
  const formName = props.formName;

  const navigate = useNavigate();

  useEffect( () => {

    async function submitForm() {
      if (data.formSubmitted) {
        if (props.formName === 'CREATE ADMIN'){
          const serverResponse = await createAdmin({ email: data.email, password: data.password, referralToken: data.referralToken });
  
          if (serverResponse) {
            setData({...data, response: serverResponse});
          }
        }
        else {
          const serverResponse = await adminAuth({ email: data.email, password: data.password });
  
          if (serverResponse) {
            setData({...data, response: serverResponse});
          }
        }
        
      }
    }

    submitForm();
    
  }, [data.formSubmitted]);

  useEffect( () => {

    if (data.response?.status === 200){
      navigate('/admin/signin');
    }
    else {
      setData( {
        email: '',
        password: '',
        confirmPassword: '',
        referralToken: '',
        formSubmitted: false,
        response: data.response
      } );
    }
  }, [data.response] );

  const handleSignIn = (e) => {
    
    e.preventDefault();

    if (!validEmail()) {
      return;
    }

    setData( {...data, formSubmitted: true} );
  }

  const handleCreateAdmin = (e) => {
    e.preventDefault();

    if (data.password !== data.confirmPassword) {
      return;
    }

    if ( !validEmail() ) {
      return;
    }

    setData( {...data, formSubmitted: true} );
  }

  const showCreateAdmin = () => {
    navigate('/admin/create');
  };

  const showSignIn = () => {
    navigate('/admin/signin');
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (field, e) => {
    setData( { ...data, ...field.label === 'Password' ? {password: e.target.value} : {confirmPassword: e.target.value} } );
  }

  const validEmail = () => {
    const emailPattern = /^[A-Za-z0-9._%+-]+@[^@]+\.[A-Za-z]{2,}$/;

    if (emailPattern.test(data.email)) {
        return true;
    }
    return false;
  }

  const showMessage = (field) => {
    if (!validEmail() && field.label === 'Email' && data.email.length > 0) {
      return <Typography variant="body1" style={{color: 'red', fontSize: '10px', marginLeft: '15px'}}>That is not a valid email address</Typography>
    }
    return <></>
  }

  const handleEmailChange = (field, e) => {

    showMessage(field);
    setData( {...data, response: null, ...field.label === 'Email' ? {email: e.target.value} : {referralToken: e.target.value} } );
  } 

  // Render form fields and buttons based on props
  const formFields = fields.map((field, index) => {

    if (field.type === 'password') {
      return (
        <FormControl key={index} size="small" variant={defaultVariant} style={styles.formField}>
            <InputLabel htmlFor={`outlined-adornment-password-${index}`}>{field.label}</InputLabel>
            <OutlinedInput id={`outlined-adornment-password-${index}`} type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label={field.label} onChange={(e) => handlePasswordChange(field, e)}
              style={data.password !== data.confirmPassword && data.confirmPassword.length > 0 ? { borderColor: 'red' } : {}}/>
              {props.formName === 'CREATE ADMIN' && data.password !== data.confirmPassword && data.confirmPassword.length > 0 ? <Typography variant="body1" style={{color: 'red', fontSize: '10px', marginLeft: '5px'}}>Passwords do not match</Typography> : <></>}
          </FormControl>
      );
    }

    return (
      <div key={index}>
          <TextField variant={defaultVariant} size="small" label={field.label} type={field.type} onChange={ (e) => handleEmailChange(field, e)} style={styles.formField} />
          {showMessage(field)}
      </div>
    );
  });

  const formButtons = buttons.map((button, index) => {

    if (formName === button.text){
      return (
        <div key={index}>
          <Button type="submit" variant="contained" onClick={button.text === 'CREATE ADMIN' ? (e) => handleCreateAdmin(e) : (e) => handleSignIn(e)} style={styles.button}>{button.text}</Button><br/>
        </div>
      );
    }

    return (
      <div key={index}>
        <Button type="submit" variant="outlined" onClick={button.text === 'CREATE ADMIN' ? showCreateAdmin : showSignIn} style={styles.button}>{button.text}</Button><br/>
      </div>
    ); 
  });

  return (
    data.formSubmitted && !data.response?
    <Box sx={ {display: 'flex', flexDirection:'column', alignItems: 'center', height: '300px', padding: '150px'} }>
      <ThemeProvider theme={theme}>
        <CircularProgress/><Typography variant="h4" sx={{margin: '20px'}}>Creating admin...</Typography>
      </ThemeProvider>
    </Box> 
    :
    <Box component="form" autoComplete="off">
      <ThemeProvider theme={theme}>
        <div style={styles.main}>
          {formFields}
          {data.response?.status === 401 ? <Typography variant="h6" sx={ {margin:'20px 0px 20px 0px', color: 'red'} }>Your referral token is invalid</Typography> : <></>}
          {data.response?.status === 409 ? <Typography variant="h6" sx={ {margin:'20px 0px 20px 0px', color: 'red'} }>This user already exists</Typography> : <></>}
          {formButtons}
        </div>
      </ThemeProvider>
    </Box>
  );
}