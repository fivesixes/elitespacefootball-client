import React, { useState } from 'react';
import Typography from '@mui/material/Typography';

const ReadMore = ({ text, maxLength, style, mainTextStyle }) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleReadMore = () => {
    setShowFullText(!showFullText);
  };

  const trimmedText = showFullText ? text : text.slice(0, maxLength);

  return (
    <div>
      <Typography variant="body1" sx={ mainTextStyle }>
        {trimmedText}
        {!showFullText && (
          <span
            style={style}
            onClick={toggleReadMore}
          >{ '...' }<br />
            {' Read more'}
          </span>
        )}
        {showFullText && (
          <span
            style={style}
            onClick={toggleReadMore}
          >
            {' Read less'}
          </span>
        )}
      </Typography>
    </div>
  );
};

export default ReadMore;
