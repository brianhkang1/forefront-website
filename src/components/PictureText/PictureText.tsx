import React from 'react';

type Props = {
  padding?: string;
  opacity?: number;
  className?: string;
  children?: React.ReactNode;
};

const PictureText = ({ padding = '1rem', opacity = 0.8, children, className }: Props) => {
  return (
    <div
      style={{
        backgroundColor: 'white',
        color: 'black',
        position: 'absolute',
        padding,
        opacity,
      }}
      className={className}
    >
      {children}
    </div>
  );
};

export default PictureText;
