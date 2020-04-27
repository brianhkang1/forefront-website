import React from 'react';

type Props = {
  src: string;
  width: string;
  height: string;
  className?: string;
}

const Picture: React.FC<Props> = ({
  src,
  width,
  height,
  className,
  children
}) => {
  return(
    <div
      className={className}
      style={{
        background: `url("${src}") no-repeat center center`,
        backgroundSize: 'cover',
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