import { Typography } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
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
  overflow: hidden;
  white-space: nowrap;
  animation: ${typingAnimation} 2s steps(20, end);
`;

const FadingText = styled('div')`
  animation: ${fadeInAnimation} 2s ease-in;
`;

export default function CustomTypography(props) {
  const componentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const texts = [
    props.text,
    "Don't miss anything",
    "See what's new on our channel",
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
      <Typography variant={props.variant} sx={ props.style }>
        {props.animated ? <div>
        {textIndex === 0 && (
          isVisible && <TypingText>{texts[0]}</TypingText>
        )}
        {textIndex === 1 && (
          isVisible && <FadingText>{texts[1]}</FadingText>
        )}
        {textIndex === 2 && (
          isVisible && <div>{texts[2]}</div>
        )}
      </div> : props.text}
      </Typography>
      }
    </div>
  );
};