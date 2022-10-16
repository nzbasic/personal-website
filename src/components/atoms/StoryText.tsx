import React from 'react';
import classNames from 'classnames';

interface PropTypes { 
  title: string;
  text: string;
  className?: string;
}

export const StoryText = ({ title, text, className }: PropTypes) => {
  if (!text) return null;

  return (
    <p className={classNames(className, "flex flex-col")}>
      <span className="font-semibold text-lg">{title}:</span>
      <span>{text}</span>
    </p>
  )
};
