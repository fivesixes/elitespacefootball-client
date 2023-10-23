import React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';

import styles from './styles';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import { useNavigate } from 'react-router-dom';

export default function AuthForm(props) {

  const state = null;

  const defaultVariant = "outlined";
  const fields = props.fields;
  const buttons = props.buttons;
  const formName = props.formName;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const googleSuccess = async (res) => {
    console.log(res);

    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch( { type: 'AUTH', data: { result, token } } );
    } catch (error) {
      console.log(error);
    }
  }

  const googleFailure = (error) => {
    console.log(`Google sign in was not successful. Try again later. ${error}`);
  }

  const handleSignIn = () => {
    // api call
  }

  const handleCreateAdmin = () => {
    // api call 
  }

  const showCreateAdmin = () => {
    navigate('/admin/create');
  }

  const showSignIn = () => {
    navigate('/admin/signin');
  }

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // Render form fields and buttons based on props
  const formFields = fields.map((field, index) => {

    if (field.type === 'password') {
      return (
        <div>
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
              label={field.label}/>
          </FormControl><br/><br/>
        </div>
      );
    } else {
      return (
        <div>
            <TextField key={index} variant={defaultVariant} size="small" label={field.label} type={field.type} style={styles.formField} /><br/><br/>
        </div>
      );
    }
  });

  const formButtons = buttons.map((button, index) => {

    if (formName === button.text){
      return (
        <div>
          <Button type="submit" key={index} variant="contained" onClick={button.text === 'CREATE ADMIN' ? handleCreateAdmin : handleSignIn} style={styles.button}>{button.text}</Button><br/>
        </div>
      );
    } else {
      return (
        <div>
          <Button type="submit" key={index} variant="outlined" onClick={button.text === 'CREATE ADMIN' ? showCreateAdmin : showSignIn} style={styles.button}>{button.text}</Button><br/>
        </div>
      ); 
    }
  });

  return (
    <Box component="form" autoComplete="off">
      <ThemeProvider theme={theme}>
        <div style={styles.main}>
          {formFields}
          {formButtons}
        </div>
      </ThemeProvider>
    </Box>
  );
}