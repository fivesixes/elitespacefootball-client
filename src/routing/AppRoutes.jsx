import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Home from '../pages/visitor/Home';
import Contact from '../pages/visitor/Contact';
import About from '../pages/visitor/About';
import Roster from '../pages/visitor/Roster';
import Alumni from '../pages/visitor/Alumni';
import Staff from '../pages/visitor/Staff';
import Enrollment from '../pages/visitor/Enrollment';
import PlayerProfile from '../pages/visitor/PlayerProfile';
import AdminSignIn from '../pages/admin/AdminSignIn';
import CreateAdmin from '../pages/admin/CreateAdmin';
import CreatePlayer from '../pages/admin/CreatePlayer';
import ModifyPlayer from '../pages/admin/ModifyPlayer';
import AdminHome from '../pages/admin/AdminHome';

export default function AppRoutes(  { responsiveThreshold }  ) {

  const location = useLocation();

  return(
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={ <Home responsiveThreshold={responsiveThreshold}/> } />
      <Route path="/about" element={ <About responsiveThreshold={responsiveThreshold}/> }/>
      <Route path="/contactus" element={ <Contact responsiveThreshold={responsiveThreshold}/> }/>
      <Route path="/academy/roster" element={ <Roster responsiveThreshold={responsiveThreshold}/> }/>
      <Route path="/academy/staff" element={ <Staff responsiveThreshold={responsiveThreshold}/> }/>
      <Route path="/academy/alumni" element={ <Alumni responsiveThreshold={responsiveThreshold}/> }/>
      <Route path="/academy/enrollment" element={ <Enrollment responsiveThreshold={responsiveThreshold}/> }/>
      <Route path="/academy/roster/:id" element={ <PlayerProfile responsiveThreshold={responsiveThreshold}/> }/>
      <Route path="/cookiespolicy" element={ <></> }/>
      <Route path="/admin/:id" element={ <AdminHome responsiveThreshold={responsiveThreshold}/> }/>
      <Route path="/admin/signin" element={ <AdminSignIn responsiveThreshold={responsiveThreshold}/> } />
      <Route path="/admin/create" element={ <CreateAdmin responsiveThreshold={responsiveThreshold}/> } />
      <Route path="/admin/:id/createplayer" element={ <CreatePlayer responsiveThreshold={responsiveThreshold}/> }/>
      <Route path="/admin/modifyplayer" element={ <ModifyPlayer responsiveThreshold={responsiveThreshold}/> }/>
    </Routes>
  );
}