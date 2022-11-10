import classNames from 'classnames';
import React from 'react';
import ReactTooltip from 'react-tooltip';
import { contacts } from '../resources/contacts';

export const Contacts = () => {
  return (
    <div className="flex flex-col lg:flex-row flex-wrap gap-2">
      {contacts.map(({ site, name, link, icon, mobile }) => (
        <a 
          data-tip={name} 
          key={site} 
          href={link} 
          target="_blank" 
          rel="noreferrer"
          className={classNames(
            { 'block': mobile },
            { 'hidden lg:block': !mobile },
            "flex items-center gap-2"
          )}
        >
          <img 
            src={icon} 
            alt={site}
            className="w-8 h-8" 
          />
          <span className="lg:hidden">{name}</span>
        </a>
      ))}
      <div className="hidden lg:block">
        <ReactTooltip place="bottom" effect="solid" type="light" />
      </div>
    </div>
  );
};
