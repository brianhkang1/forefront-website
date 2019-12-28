import React from 'react';

type Props = {
  height?: string;
}

const Spacer = ({ height = '1rem' }: Props) => {
  return (
    <div 
      style={{
        display: 'block', 
        width: '100vw',
        height: height
      }}
    />
  )
}

export default Spacer; 