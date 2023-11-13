import React, { useState, useEffect, useRef } from 'react';
import { Box, Button, ThemeProvider, Typography } from '@mui/material';
import {styled, keyframes} from '@mui/system';

import img0 from '../../static/billboard1-images/ball-image.png';

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
  margin: 0px 0px 0px 10px;
  font-size: 40px;
  background-image: linear-gradient(to right, green, #67aa55);
  -webkit-background-clip: text;
  font-weight: bold;
  color: transparent;
  animation: ${textAnimations[0]} 1.5s ease-in-out;
`;

const BoardBody = styled('p')`
  margin: 10px 10px 10px 10px;
  font-size: 20px;
  font-weight: 300;
  animation: ${textAnimations[1]} 2s ease-in-out;
`;

const BoardImage = styled('img')`
  height: 70px;
  margin-top: 30px;
  animation: ${textAnimations[1]} 2.5s ease-in;
  opacity: .9;
`;


export default function Billboard1() {
  const componentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      });
    });

    observer.observe(componentRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={componentRef}>
      {
      isVisible && 
        <Box style={ { display: 'flex', alignItems: 'center', textAlign: 'center', height: '400px', zIndex: '0', margin: '80px 0px 150px 0px',} }>  
          <Typography>
            <BoardHeader>KEEP UP WITH UPDATED VIDEO CONTENT</BoardHeader>
            <BoardBody>Track the progress of teenagers with exciting potential, catching the latest action from competitions and friendlies.</BoardBody>
            <BoardImage src={img0}/>
          </Typography>
        </Box>
      }
    </div>
  );
};