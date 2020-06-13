import React from 'react';
import useIsMobile from '../../hooks/useIsMobile';

type Props = {
  src: string;
  width: string;
  height: string;
  mobileWidth?: string;
  mobileHeight?: string;
  className?: string;
  backgroundSize?: 'cover' | 'contain';
};

const Picture: React.FC<Props> = ({
  src,
  width,
  height,
  mobileWidth,
  mobileHeight,
  backgroundSize = 'cover',
  className,
  children,
}) => {
  const isMobile = useIsMobile();

  return (
    <div
      className={className}
      style={{
        background: `url("${src}") no-repeat center center / ${backgroundSize}`,
        position: 'relative',
        width: isMobile && mobileWidth ? mobileWidth : width,
        height: isMobile && mobileWidth ? mobileHeight : height,
      }}
    >
      {children}
    </div>
  );
};

export default Picture;
