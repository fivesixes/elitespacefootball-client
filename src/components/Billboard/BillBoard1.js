import React, { useState, useEffect, useRef } from 'react';
import { Box, Button, ThemeProvider, Typography } from '@mui/material';
import {styled, keyframes} from '@mui/system';

import img0 from '../../static/billboard1-images/image0.png';
import img1 from '../../static/billboard1-images/image1.png';
import img2 from '../../static/billboard1-images/image2.png';

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

const ImageAnimations = [
  keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
  `,
  keyframes`
    0% {
      opacity: 0;
      transform: translateX(100px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  `,
];

const backgroundAnimation = keyframes`
  0% {
    width: 0%;
    border: 2px solid rgba(0,0,0,0);
  }
  50% {
    width: 100%;
    border: 2px solid rgba(0,0,0,0);
  }
  100% {
    border: 2px solid green;

  }
`;

const BoardHeader = styled('h1')`
  margin: 10px 0px 10px 30px;
  font-size: 45px;
  color: green;
  font-weight: bold;
  animation: ${textAnimations[0]} 1.5s ease-in-out;
`;

const BoardBody = styled('p')`
  margin: 10px 0px 10px 30px;
  font-size: 25px;
  font-weight: 300;
  animation: ${textAnimations[1]} 2s ease-in-out;
`;

const BoardBackground = styled('div')`
  height: 600px;
  width: 105%;
  z-index: 1;
  position: absolute;
  left: -10px;
  border: 2px solid green;
  background-color: #cbff99;
  animation: ${backgroundAnimation} 1.5s ease-in-out;
`;

const BoardStartImage = styled('img')`
  padding: 0px;
  margin: 0px;
  z-index: 2;
  border-width: 0px 0px 2px 0px;
  animation: ${ImageAnimations[0]} 1.5s ease-in;
`;

const BoardEndImage = styled('img')`
  padding: 0px;
  margin: 0px;
  z-index: 2;
  animation: ${ImageAnimations[1]} 1.5s ease-in;
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
        <Box style={ { display: 'flex', alignItems: 'center', textAlign: 'center', height: '600px', zIndex: '0', margin: '100px 0px 0px 0px',} }>
          <BoardStartImage src={img1}/>
          <Box sx={{display: 'flex', flexDirection: 'column', zIndex: '2'}}>
            <Typography>
              <BoardHeader>KEEP UP WITH UPDATED VIDEO CONTENT</BoardHeader>
              <BoardBody>Track the progress of teenagers with exciting potential, catching the latest action from competitions and friendlies.</BoardBody>
            </Typography>
          </Box>
          <BoardEndImage src={img2}/>
          <BoardBackground/>
        </Box>
      }
    </div>
  );
};