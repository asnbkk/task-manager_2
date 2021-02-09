import React from 'react';
import TextStyle from './TextStyle';

const Text = ({ weight, size, color, margin, children }) => {
  return (
    <TextStyle weight={weight} size={size} color={color} margin={margin}>
      {children}
    </TextStyle>
  );
};

Text.defaultProps = {
  weight: 'regular',
  size: '16px',
  color: 'black',
  margin: 0,
};

export default Text;
