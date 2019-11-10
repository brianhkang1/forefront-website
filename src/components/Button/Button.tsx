import React from 'react';
import styles from './Button.module.css';
import { classNames } from '../../util';

interface Props {
  className?: string;
  type?: 'submit' | 'button' | 'reset';
  size?: 'small' | 'medium' | 'large';
  variant?: 'solid' | 'outlined' | 'text';
  fullWidth?: boolean;
  onClick?: any;
};

const Button: React.FunctionComponent<Props> = ({
  className,
  children,
  size = 'medium',
  variant = 'outlined',
  fullWidth,
  ...props
}) => (
  <button
    className={classNames(
      styles.button,
      styles.roundedCorners,
      styles[size],
      styles[variant],
      fullWidth ? styles.fullWidth : null,
      className
    )}
    {...props}
  >
    {children}
  </button>
);

export default Button;
