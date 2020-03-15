import React from 'react';

type Props = {
  src: string;
  width: string;
  height: string;
  className?: string;
  alt?: string;
}

const Picture: React.FC<Props> = ({
  src,
  width,
  height,
  alt,
  className
}) => {
  return(
    <img
      src={src}
      className={className}
      style={{
        width,
        height,
      }}
      alt={alt}
    />
  )
}

export default Picture;