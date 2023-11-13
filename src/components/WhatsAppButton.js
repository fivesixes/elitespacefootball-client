import React from "react";

import { Button, Typography } from "@mui/material";

import ReactWhatsApp from 'react-whatsapp';
import { WhatsApp } from "@mui/icons-material";

export default function WhatsAppButton() {

  const sendWhatsAppMessage = () => {
    const phoneNumber = '+2348030412484';
    const message = 'Contacting Elite Space Football.';

    return (
      <ReactWhatsApp
        number={phoneNumber}
        message={message}
        style={{all: 'unset'}}
      >
        <Button variant="contained" sx={{ marginTop: '30px', textTransform: 'capitalize', width: window.innerWidth < 900 ? '340px' : '380px', height: '70px', height: '70px', '&:hover': {color: 'green', backgroundColor: 'white'} }}>
          <Typography variant="h6" sx={{fontSize: window.innerWidth < 900 ? '16px' : '20px', margin: '0px 5px 0px 0px'}}>Send us a message on WhatsApp</Typography><WhatsApp/>
        </Button>
      </ReactWhatsApp>
    );
  };

  return sendWhatsAppMessage();
};