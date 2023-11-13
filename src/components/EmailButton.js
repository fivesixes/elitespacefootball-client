import React from "react";

import { Button, Typography } from "@mui/material";
import { Email } from "@mui/icons-material";

export default function EmailButton() {

  const sendEmail = () => {
    const emailAddress = 'elitespacefootball@gmail.com';
    const subject = 'Contacting Elite Space Football';

    const mailtoLink = `mailto:${emailAddress}?subject=${subject}`;

    return (
      <a href={mailtoLink} style={ { all: 'unset' } }>
        <Button variant="contained" sx={{ marginTop: '30px', textTransform: 'capitalize', width: window.innerWidth < 900 ? '340px' : '380px', height: '70px', '&:hover': {color: 'green', backgroundColor: 'white'} }}>
          <Typography variant="h6" sx={{fontSize: window.innerWidth < 900 ? '16px' : '20px', margin: '0px 5px 0px 0px'}}>Send us an email</Typography><Email/>
        </Button>
      </a>
    );
  };

  return sendEmail();
  
};
