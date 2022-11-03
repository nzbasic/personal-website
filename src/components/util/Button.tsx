import React from 'react';

type Colors = 'blue' | 'green' | 'red' | 'transparent' | 'dblue';

interface PropTypes {
  color?: Colors,
  onClick?: () => void,
  disabled?: boolean,
  children?: React.ReactNode,
  className?: string,
  type?: 'button' | 'submit' | 'reset'
}

interface ColorData {
  default: string,
  hover: string,
}

const colorMap: Record<Colors, ColorData> = {
  blue: {
    default: 'bg-sky-500',
    hover: 'hover:bg-sky-600',
  },
  green: {
    default: 'bg-emerald-600',
    hover: 'hover:bg-emerald-700',
  },
  red: {
    default: 'bg-red-600',
    hover: 'hover:bg-red-700',
  },
  transparent: {
    default: 'bg-transparent',
    hover: 'hover:bg-transparent',
  },
  dblue: {
    default: 'bg-sky-600',
    hover: 'hover:bg-sky-700',
  },
};

const Button: React.FC<PropTypes> = ({
  color = 'blue',
  type = 'button',
  onClick = () => {},
  disabled = false,
  children = null,
  className = '',
}) => (
  <button
    type={type}
    className={`
      ${colorMap[color].default} 
      ${colorMap[color].hover} 
      px-2 py-1 text-sm md:text-base md:px-4 md:py-2 rounded text-white font-semibold transition-colors disabled:opacity-50
      ${className}
    `}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
