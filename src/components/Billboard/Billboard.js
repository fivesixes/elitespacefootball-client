import React, { useState, useEffect } from 'react';
import { Box, Button, ThemeProvider, Typography } from '@mui/material';
import {styled, keyframes} from '@mui/system';

import img0 from '../../static/billboard-images/high-res/image0.jpg';
import img1 from '../../static/billboard-images/high-res/image1.jpg';
import img2 from '../../static/billboard-images/high-res/image2.jpg';
import img3 from '../../static/billboard-images/high-res/image3.jpg';
import img4 from '../../static/billboard-images/high-res/image4.jpg';
import { billboardContent } from '../../page-data';
import { useNavigate } from 'react-router-dom';
import theme from '../theme';

function randomInt(min, max) {
  if (min > max) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const boardAnimations = [
  keyframes`
    0% {
      opacity: 0;
      transform: translateX(-400px);

    }
    70% {
      opacity: 1;
      transform: translateX(0px);

    }
    100% {
      
    }
  `,
  keyframes`
    0% {
      opacity: 0;
      transform: translateX(400px);

    }
    70% {
      opacity: 1;
      transform: translateX(0px);

    }
    100% {
      
    }
  `,
  keyframes`
    0% {
      opacity: 0;
      transform: translateY(400px);
    }
    70% {
      opacity: 1;
      transform: translateY(0px);
    }
    100% {
      
    }
  `,
];

const boardContent = billboardContent;

const Board = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  height: ${2*370}px;
  width: ${3*370}px;
  background: url(${props => boardContent[props.currentImageIndex].image});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  backgound-position: center center;
  background-color: rgba(240, 240, 240, 0);
  font-family: roboto;
  animation: ${props => props.animation} 1s ease-in;
`;

const textAnimations = [
  keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100px);
    background-position: 0% 50%;
  }
  50% {
    opacity: 1;
    transform: translateY(0px);
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
  `,
  keyframes`
    0% {
      opacity: 0;
      transform: translateY(50px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  `,
  keyframes`
    0% {
      width: 0%;
      opacity: 0;
    }
    100% {
      width: 100%;
      opacity: 1;
    }
  `,
];

const BoardHeader = styled('h1')`
  margin: 10px 0px 10px 30px;
  background-image: linear-gradient(to right, white, #cbff99);
  -webkit-background-clip: text;
  color: transparent;
  font-weight: bold;
  animation: ${textAnimations[0]} 2.5s ease-in-out;
`;

const BoardBody = styled('h3')`
  margin: 1px 0px 1px 30px;
  font-weight: normal;
  color: white;
  animation: ${textAnimations[1]} 2s ease-in-out;
`;

const BoardBodyBackground = styled('h3')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 20px 0px 20px 0px;
  background-color: green;
  animation: ${textAnimations[2]} 1s ease-in-out;
`;

export default function Billboard() {

  const [imgindex, setImgIndex] = useState(0);
  const [animationIndex, setAnimationIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setImgIndex((imgindex + 1) % boardContent.length);
      setAnimationIndex(randomInt(0, boardAnimations.length - 1));
    }, 8000);

    return () => {
      clearTimeout(timer);
    };
  }, [imgindex]);


  const handleLearnMore = () => {
    navigate('/about');
  }

  return(
    <Box style={ { display: 'flex', flexDirection: 'column', alignItems: 'center', } }>
      <Board currentImageIndex={imgindex >= 0 ? imgindex : 0} animation={boardAnimations[animationIndex]} key={animationIndex} style={{zIndex: '1' }}>
        <BoardBodyBackground>
          <BoardHeader>
            {boardContent[imgindex].headerText}
          </BoardHeader>
          <BoardBody>
            {boardContent[imgindex].bodyText}
          </BoardBody>
        </BoardBodyBackground>
      </Board>
      <ThemeProvider theme={theme}>
        <Button variant="outlined" onClick={handleLearnMore} sx={ { borderRadius: '40px', margin: '40px', zIndex: '0' } }><Typography variant={window.innerWidth < 900 ? 'h6' : 'h5'} sx={ { fontWeight: 'light' } }>Learn More</Typography></Button>  
      </ThemeProvider>
    </Box>
  );
}