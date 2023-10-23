import React from "react";

import { Button, Typography } from "@mui/material";

export default function EmailButton() {

  const sendEmail = () => {
    const emailAddress = 'elitespacefootball@gmail.com';
    const subject = 'Contacting Elite Space Football';

    const mailtoLink = `mailto:${emailAddress}?subject=${subject}`;

    return (
      <a href={mailtoLink} style={ { all: 'unset' } }>
        <Button variant="contained" sx={{ marginTop: '30px', textTransform: 'capitalize', width: '350px', height: '70px', }}>
          <Typography variant="h6">Send us an email</Typography>
        </Button>
      </a>
    );
  };

  return sendEmail();
  
};
