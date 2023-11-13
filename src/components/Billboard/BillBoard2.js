import React, { useState, useEffect, useRef } from 'react';
import { Box, Button, ThemeProvider, Typography } from '@mui/material';
import {styled, keyframes} from '@mui/system';

import img0 from '../../static/billboard2-images/image0.png';
import img1 from '../../static/billboard2-images/image1.png';

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
    height: 0%;
  }
  100% {
    height: 100%;
  }
`;

const BoardHeader = styled('h1')`
  margin: 10px 0px 10px 30px;
  font-size: 45px;
  color: #cbff99;
  font-weight: bold;
  animation: ${textAnimations[0]} 2s ease-in-out;
`;

const BoardBody = styled('p')`
  margin: 10px 70px 10px 70px;
  font-size: 25px;
  color: white;
  font-weight: 300;
  animation: ${textAnimations[1]} 2.5s ease-in-out;
`;

const BoardBackground = styled('div')`
  height: 100%;
  width: 100%;
  z-index: 1;
  position: absolute;
  left: 0px;
  top: 0px;
  border-radius: 0 0 20px 20px;
  background-color: green;
  animation: ${backgroundAnimation} 1s ease-in-out;
`;

const BoardStartImage = styled('img')`
  padding: 0px;
  margin: 0px 0px 50px 0px;
  height: 120px;
  z-index: 2;
  border-width: 0px 0px 2px 0px;
  animation: ${ImageAnimations[0]} 1.5s ease-in;
`;

const BoardEndImage = styled('img')`
  padding: 0px;
  margin: 50px 0px 0px 0px;
  height: 120px;
  z-index: 2;
  animation: ${ImageAnimations[1]} 1.5s ease-in;
`;

export default function Billboard2() {
  const componentRef0 = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer0 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer0.disconnect();
        }
      });
    });

    observer0.observe(componentRef0.current);

    return () => {
      observer0.disconnect();
    };
  }, []);

  return (
    <div ref={componentRef0}>
      {
      isVisible && 
        <Box style={ { display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', height: '600px', zIndex: '0', margin: '0px 0px 100px 0px', position: 'relative', padding: '50px'} }>
          <BoardStartImage src={img0}/>
          <Box sx={{display: 'flex', flexDirection: 'column', zIndex: '2'}}>
            <Typography>
              <BoardHeader>PARTNER WITH US</BoardHeader>
              <BoardBody>Help us facilitate the career transition of aspiring amateur African players and tell us how we can better achieve our goals.</BoardBody>
            </Typography>
          </Box>
          <BoardEndImage src={img1}/>
          <BoardBackground/>
        </Box>
      }
    </div>
  );
};