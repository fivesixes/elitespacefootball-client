import React, { useState, useEffect } from 'react';
import { Box, Button, ThemeProvider, Typography } from '@mui/material';
import {styled, keyframes} from '@mui/system';

import img0 from '../../static/billboard-images/low-res/image0.jpg';
import img1 from '../../static/billboard-images/low-res/image1.jpg';
import img2 from '../../static/billboard-images/low-res/image2.jpg';
import img3 from '../../static/billboard-images/low-res/image3.jpg';
import img4 from '../../static/billboard-images/low-res/image4.jpg';
import { useNavigate } from 'react-router-dom';
import theme from '../theme';
import { billboardContent } from '../../page-data';

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
      transform: translateX(-50px);
      border-radius: 0px;
    }
    70% {
      opacity: 1;
      transform: translateX(0px);
      border-radius: 0px;
    }
    100% {
      border-radius: 15px 15px 0 0;
    }
  `,
  keyframes`
    0% {
      opacity: 0;
      transform: translateX(50px);
      border-radius: 0;
    }
    70% {
      opacity: 1;
      border-radius: 0;
      transform: translateX(0px);
    }
    100% {
    
      border-radius: 15px 15px 0 0;
    }
  `,
  keyframes`
    0% {
      opacity: 0;
      transform: translateY(50px);
      border-radius: 0;
    }
    70% {
      opacity: 1;
      transform: translateY(0px);
      border-radius: 0;
    }
    100% {
      border-radius: 15px 15px 0 0;
    }
  `,
];

const boardContent = billboardContent;

const Board = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  height: ${2*110}px;
  width: ${3*110}px;
  margin: 0px;
  background: url(${props => boardContent[props.currentImageIndex].image});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  backgound-position: center center;
  background-color: rgba(240, 240, 240, 0);
  border-radius: 15px 15px 0 0;
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
      transform: translateY(10px);
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

const BoardHeader = styled('h4')`
  margin: 10px 0px 10px 10px;
  background-image: linear-gradient(to right, white, #cbff99);
  -webkit-background-clip: text;
  color: transparent;
  font-weight: 800;
  animation: ${textAnimations[0]} 1.5s ease-in-out;
`;

const BoardBody = styled('p')`
  margin: 5px 0px 5px 10px;
  font-size: 15px;
  font-weight: 300;
  color: white;
  animation: ${textAnimations[1]} 1s ease-in-out;
`;

const BoardTextBackground = styled('h3')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin: 0px;
  padding: 10px 5px 20px 5px;
  font-family: Roboto;
  background-color: green;
  animation: ${textAnimations[2]} .5s ease-in-out;
`;

export default function AltBillboard() {

  const [imgindex, setImgIndex] = useState(0);
  const [animationIndex, setAnimationIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setImgIndex((imgindex + 1) % boardContent.length);
      setAnimationIndex(randomInt(0, boardAnimations.length - 1));
    }, 7000);

    return () => {
      clearTimeout(timer);
    };
  }, [imgindex]);


  const handleLearnMore = () => {
    window.scrollTo(0,0);
    navigate('/about');
  }

  return(
    <Box style={ { display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid green', padding: '18px 0px 0px 0px', borderRadius: '20px', backgroundColor: '#cbff99'} }>
      <Board currentImageIndex={imgindex >= 0 ? imgindex : 0} animation={boardAnimations[animationIndex]} key={animationIndex} style={{zIndex: '1' }}>
      </Board>
      <BoardTextBackground>
          <BoardHeader>
            <Typography variant="h5" sx={{fontWeight: 'bolder'}}>{boardContent[imgindex].headerText}</Typography>
          </BoardHeader>
          <BoardBody>
            <Typography sx={{fontWeight: 'light'}}>{boardContent[imgindex].bodyText}</Typography>
          </BoardBody>
        </BoardTextBackground>
      <ThemeProvider theme={theme}>
        <Button variant="outlined" onClick={handleLearnMore} sx={ { borderRadius: '40px', margin: '40px', zIndex: '0' } }><Typography variant={window.innerWidth < 900 ? 'h6' : 'h5'} sx={ { fontWeight: 'light' } }>Learn More</Typography></Button>  
      </ThemeProvider>
    </Box>
  );
}