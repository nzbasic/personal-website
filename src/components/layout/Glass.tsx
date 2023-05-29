import React from 'react';
import cx from 'classnames';

interface GlassProps {
  className?: string;
  onClick?: React.MouseEventHandler;
  children: React.ReactNode;
}

export const Glass: React.FC<GlassProps> = ({ children, className, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={cx(
        className,
        'rounded-xl bg-gray-900 bg-opacity-75 backdrop-blur-md backdrop-brightness-110 backdrop-saturate-200 border-gray-600 border'
      )}
    >
      {children}
    </div>
  );
};
