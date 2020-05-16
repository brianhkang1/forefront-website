import React from 'react';

type Props = {
  src: string;
  width: string;
  height: string;
  className?: string;
  backgroundSize?: 'cover' | 'contain';
}

const Picture: React.FC<Props> = ({
  src,
  width,
  height,
  backgroundSize = 'cover',
  className,
  children
}) => {
  return(
    <div
      className={className}
      style={{
        background: `url("${src}") no-repeat center center / ${backgroundSize}`,
        position: 'relative',
        width,
        height,
      }}
    >
      {children}
    </div>
  )
}

export default Picture;