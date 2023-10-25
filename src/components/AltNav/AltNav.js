import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton, Drawer, List, ListItem, ListItemText, ThemeProvider, Box, Collapse, Button, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import theme from '../theme';
import MainLogo from '../MainLogo/MainLogo';

export default function MobileNavigationMenu() {
  const [open, setOpen] = useState(false);
  const [academyOpen, setAcademyOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (isOpen) => {
    setOpen(isOpen);
  };

  const toggleAcademyMenu = () => {
    setAcademyOpen(!academyOpen);
  };

  const handleMenuItemClick = (menuItem) => {
    switch (menuItem) {
      case 'HOME':
        navigate('/');
        break;
      case 'ABOUT':
        navigate('/about');
        break;
      case 'CONTACT US':
        navigate('/contactus');
        break;
      case 'ACADEMY':
        toggleAcademyMenu();
        return;
      case 'Enrollment':
        navigate('/academy/enrollment');
        toggleDrawer(false);
        return;
      case 'Roster':
        navigate('/academy/roster');
        toggleDrawer(false);
        return;
      case 'Cookies':
        // navigate('/cookiespolicy');
        break;
      case 'Support':
        // Handle the 'Support' click.
        break;
      case 'Privacy Policy':
        // Handle the 'Privacy Policy' click.
        break;
      default:
        // Handle any other menu item clicks.
        break;
    }

    // Close the menu after handling the click (optional).
    toggleDrawer(false);
  };

  const menuItems = ['HOME', 'ABOUT', 'CONTACT US', 'ACADEMY'];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={ { display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '92%', marginTop: '30px', position: 'fixed', zIndex: '2', top: '0', backgroundColor: '#dedede', padding: '10px', borderRadius: '5px' } }>
        <ThemeProvider theme={theme}><Button variant="text" onClick={ () => navigate('/') }><MainLogo style={ {width: `${(100/1.3).toString()}px`, height: `${(35/1.3).toString()}px`} }/></Button></ThemeProvider>
        <ThemeProvider theme={theme}>
          <IconButton
            onClick={() => toggleDrawer(true)}
            edge="start"
            aria-label="menu"
          >
            {/* <Typography variant="h6" sx={ { margin: '0px 10px 0px 10px', fontWeight: 'bold' } }>MENU</Typography> */}
            <MenuIcon />
          </IconButton>
        </ThemeProvider>
        <Drawer anchor="left" open={open} onClose={() => toggleDrawer(false)}>
          <Box sx={ { display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', position: 'relative' } }>
            <Box>
              <List>
                {menuItems.map((item, index) => (
                  <ListItem
                    button
                    key={index}
                    onClick={() => handleMenuItemClick(item)}
                    sx={ {padding: '20px 50px 20px 50px'} }
                  >
                    {item === 'ACADEMY' ? (
                      <ListItemText primary={item} primaryTypographyProps={ { fontWeight: academyOpen ? 'normal' : 'bold' } } sx={ { color: 'green' } } />
                    ) : (
                      <ListItemText primary={item} primaryTypographyProps={ { fontWeight: 'bold' } } sx={{ color: 'green' }} />
                    )}
                  </ListItem>
                ))}
              </List>
            </Box>
            <Collapse in={academyOpen}>
              <List>
                <ListItem button onClick={() => handleMenuItemClick('Roster')} sx={ {padding: '10px 50px 10px 50px'} }>
                  <ListItemText primary="Roster" sx={ { color: 'green' } }/>
                </ListItem>
                <ListItem button onClick={() => handleMenuItemClick('Enrollment')} sx={ {padding: '10px 50px 10px 50px'} }>
                  <ListItemText primary="Enrollment" sx={ { color: 'green' } }/>
                </ListItem>
              </List>
            </Collapse>
          </Box>
            <Box sx={ { marginTop: '300%', position: 'absolute' } }>
                <List>
                  <ListItem button onClick={() => handleMenuItemClick('Cookies')} sx={ {padding: '10px 50px 10px 50px'} }><ListItemText primary="Cookies"/></ListItem>
                  <ListItem button onClick={() => handleMenuItemClick('Support')} sx={ {padding: '10px 50px 10px 50px'} }><ListItemText primary="Support"/></ListItem>
                  <ListItem button onClick={() => handleMenuItemClick('Privacy Policy')} sx={ {padding: '10px 50px 10px 50px'} }><ListItemText primary="Privacy policy" primaryTypographyProps={ {overflow: 'no-wrap'} } /></ListItem>
                </List>
            </Box>
        </Drawer>
      </Box>
    </ThemeProvider>
  );
}
