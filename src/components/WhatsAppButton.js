import React from "react";

import { Button, Typography } from "@mui/material";

import ReactWhatsApp from 'react-whatsapp';

export default function WhatsAppButton() {

  const sendWhatsAppMessage = () => {
    const phoneNumber = '+2348032536840';
    const message = 'Contacting Elite Space Football.';

    return (
      <ReactWhatsApp
        number={phoneNumber}
        message={message}
        style={{all: 'unset'}}
      >
        <Button variant="contained" sx={{ marginTop: '30px', textTransform: 'capitalize', width: '350px', height: '70px', }}>
          <Typography variant="h6">Send us a message on WhatsApp</Typography>
        </Button>
      </ReactWhatsApp>
    );
  };

  return sendWhatsAppMessage();
};