import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';

import './App.css';
import { getEntries } from './actions/entries';

import MainFooter from './components/MainFooter/MainFooter';

import ScrollToTop from './utils/ScrollToTop';
import AppRoutes from './routing/AppRoutes';
import AltNav from './components/AltNav/AltNav';
import MainHeader from './components/MainHeader/MainHeader';

const responsiveThreshold = 900;

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    
    dispatch(getEntries());

  }, [ dispatch ]);

  return(
    <div className="App">
      <Container maxWidth="lg" sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0px 5px 0px 5px'}}>
        <Router>
          <ScrollToTop/>
          <AppRoutes responsiveThreshold={responsiveThreshold}/>
        </Router>
      </Container>
      <MainFooter />
    </div>
    
  );
}

export default App;