import React from 'react';

type Props = {
  padding?: string;
  opacity?: number;
  className?: string;
};

const PictureText: React.FC<Props> = ({
  padding = '1rem',
  opacity = 0.8,
  children,
  className,
}) => {
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
