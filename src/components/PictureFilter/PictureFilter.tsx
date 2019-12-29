import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
}

const PictureFilter: React.FC<Props> = ({
  children,
  className
}) => {
  return (
    <div
      className={className}
      style={{
        position: 'relative',
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