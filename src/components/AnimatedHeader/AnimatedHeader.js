import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { styled, keyframes} from '@mui/system';

const typingAnimation = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`;

const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const TypingText = styled('div')`
  padding: 10px;
  background-color: green;
  border-radius: 10px;
  overflow: hidden;
  white-space: nowrap;
  animation: ${typingAnimation} 2s steps(20, end);
`;

const FadingText = styled('div')`
  padding: 10px;
  background-color: green;
  border-radius: 10px;
  animation: ${fadeInAnimation} 2s ease-in;
`;

export default function AnimatedHeader(props) {

  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    'Looking for soccer talent?',
    'Find the best at our academy',
    'Ready to compete'
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (textIndex === 0) {
        setTextIndex(1);
      } else if (textIndex === 1) {
        setTextIndex(2);
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, [textIndex]);

  return (
    <Typography variant={props.variant} sx={ props.style }>
      {props.animated ? <div>
      {textIndex === 0 && (
        <TypingText>{texts[0]}</TypingText>
      )}
      {textIndex === 1 && (
        <FadingText>{texts[1]}</FadingText>
      )}
      {textIndex === 2 && (
        <TypingText>{texts[2]}</TypingText>
      )}
    </div> : props.text}
    </Typography>
  );
}