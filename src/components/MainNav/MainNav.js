import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { useNavigate } from "react-router-dom";

import theme from '../theme';
import styles from "./styles";

export default function MainNav(props) {

  const items = ['HOME', 'ABOUT', 'CONTACT US', 'ACADEMY']; // Added 'HOME' option
  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();

  const handleAcademyClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAcademyClose = () => {
    setAnchorEl(null);
  };

  const handleHomeClick = () => {
    navigate('/');
  }

  const handleAboutclick = () => {
    navigate('/about');
  }

  const handleContactUsclick = () => {
    navigate('/contactus');
  }

  const handleRosterClick = () => {
    handleAcademyClose();
    navigate('/academy/roster');
  }

  const handleStaffClick = () => {
    handleAcademyClose();
    navigate('/academy/staff');
  }

  const handleAlumniClick = () => {
    handleAcademyClose();
    navigate('/academy/alumni');
  }

  const handleEnrollmentClick = () => {
    handleAcademyClose();
    navigate('/academy/enrollment');
  }

  return (
    <Box justifyContent="center" alignContent="center" sx={{ flexGrow: 1, position: 'relative', overflow: 'visible'}} style={styles.main}>
      <ThemeProvider theme={theme}>
        <Button disableElevation variant={props.selected === items[0] ? 'contained' : 'text'} onClick={handleHomeClick} disableRipple={props.selected === items[0]} style={styles.navButton}>
          <Typography style={styles.typography}>{items[0]}</Typography>
        </Button>
        <Button disableElevation variant={props.selected === items[1] ? 'contained' : 'text'} onClick={handleAboutclick} disableRipple={props.selected === items[1]} style={styles.navButton}>
          <Typography style={styles.typography}>{items[1]}</Typography>
        </Button>
        <Button disableElevation variant={props.selected === items[2] ? 'contained' : 'text'} onClick={handleContactUsclick} disableRipple={props.selected === items[2]} style={styles.navButton}>
          <Typography style={styles.typography}>{items[2]}</Typography>
        </Button>
        <Button disableElevation variant={props.selected === items[3] ? 'contained' : 'text'} aria-haspopup="true" onClick={handleAcademyClick} style={styles.navButton}>
          <Typography style={styles.typography}>{items[3]}</Typography>
        </Button>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleAcademyClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' } } transformOrigin={{ vertical: 'top', horizontal: 'center', } } PaperProps={{ style: { borderRadius: '0px', boxShadow: 'none'} } }>
          <MenuItem onClick={handleRosterClick} sx={{ ...styles.menuItem, "&:hover": { backgroundColor: "green", color: "white" } }}>
            Roster
          </MenuItem>
          {/* <MenuItem onClick={handleStaffClick} sx={{ ...styles.menuItem, "&:hover": { backgroundColor: "green", color: "white" } }}>
            Staff
          </MenuItem>
          <MenuItem onClick={handleAlumniClick} sx={{ ...styles.menuItem, "&:hover": { backgroundColor: "green", color: "white" } }}>
            Alumni
          </MenuItem> */}
          <MenuItem onClick={handleEnrollmentClick} sx={{ ...styles.menuItem, "&:hover": { backgroundColor: "green", color: "white" } }}>
            Enrollment
          </MenuItem>
        </Menu>
      </ThemeProvider>
    </Box>
  );
}
