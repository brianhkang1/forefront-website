import React from 'react';

type Props = {
  padding?: string;
  opacity?: number;
}

const PictureText: React.FC<Props> = ({
  padding = '1rem',
  opacity = 0.8,
  children,
}) => {
  return (
    <span style={{
      backgroundColor: 'black',
      color: 'white',
      padding,
      opacity
      }}
    >
      {children}
    </span>
  )
}

export default PictureText;