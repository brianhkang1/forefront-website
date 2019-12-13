import React from 'react';

type Props = {
  children: React.ReactNode;
}

const PictureFilter: React.FC<Props> = ({
  children,
}) => {
  return (
    <div 
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.2)'
      }}
    >
      {children}
    </div>
  )
}

export default PictureFilter;