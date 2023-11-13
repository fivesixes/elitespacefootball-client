import React, { useState, useEffect, useRef } from 'react';
import { Box, Button, ThemeProvider, Typography } from '@mui/material';
import {styled, keyframes} from '@mui/system';

import img0 from '../../static/billboard2-images/image0.png';

function randomInt(min, max) {
  if (min > max) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const textAnimations =  [
  keyframes`
0% {
  opacity: 0;
  transform: translateY(200px);
}
100% {
  opacity: 1;
  transform: translateY(0px);
}
`,
keyframes`
0% {
  opacity: 0;
  transform: translateY(-50px);
}
50% {
  opacity: 0;
}
100% {
  opacity: 1;
  transform: translateY(0px);
}
`
];

const BoardHeader = styled('h1')`
  margin: 0px 20px 0px 20px;
  font-size: 40px;
  background-image: linear-gradient(to right, white, #cbff99);
  -webkit-background-clip: text;
  font-weight: bold;
  color: transparent;
  animation: ${textAnimations[0]} 1.5s ease-in-out;
`;

const BoardBody = styled('p')`
  margin: 10px 20px 10px 20px;
  font-size: 20px;
  font-weight: 300;
  color: white;
  animation: ${textAnimations[1]} 2s ease-in-out;
`;

const BoardImage = styled('img')`
  height: 70px;
  margin-top: 30px;
  animation: ${textAnimations[1]} 2.5s ease-in;
`;


export default function AltBillboard2() {
  const componentRef1 = useRef(null);
  const [isVisible1, setIsVisible1] = useState(false);

  useEffect(() => {
    const observer1 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible1(true);
          observer1.disconnect();
        }
      });
    });

    observer1.observe(componentRef1.current);

    return () => {
      observer1.disconnect();
    };
  }, []);

  return (
    <div ref={componentRef1}>
      {
      isVisible1 && 
        <Box style={ { display: 'flex', alignItems: 'center', textAlign: 'center', height: '400px', zIndex: '0', margin: '100px 0px 60px 0px', padding: '50px 0 30px 0', backgroundColor: 'green'} }>  
          <Typography>
            <BoardHeader>PARTNER WITH US</BoardHeader>
            <BoardBody>Help us facilitate the career transition of aspiring amateur African players and tell us how we can better achieve our goals.</BoardBody>
            <BoardImage src={img0}/>
          </Typography>
        </Box>
      }
    </div>
  );
};