import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";
import { useEffect, useMemo, useState } from "react";
import { useNavigation } from "../../../context/NavigationProvider";
import { NavLink } from "./NavLink";

import BBD from '../../../resources/logos/bbd.svg';
import Time from '../../../resources/logos/time.svg';
import OT from '../../../resources/logos/ot256.png';
import MPD from '../../../resources/logos/mpd.png';
import SEX from '../../../resources/logos/simex.png';
import CH from '../../../resources/logos/ch.png';
import SNZ from '../../../resources/logos/snipe.png';

const projects = [
  { title: "BBD", link: "#projects-bbd", icon: BBD, },
  { title: 'osuTracker', link: '#projects-osutracker', icon: OT },
  { title: 'Māori PD', link: '#projects-maori-pronunciation-dictionary', icon: MPD },
  { title: 'Simulate Exchange', link: '#projects-simulate-exchange', icon: SEX },
  { title: 'Time Tracker', link: '#projects-time-tracker', icon: Time },
  { title: 'Collection Helper', link: '#projects-collection-helper', icon: CH },
  { title: 'snipe.nz', link: '#projects-snipe-nz', icon: SNZ },
]

export const ProjectsDropdown = () => {
  const [expanded, setExpanded] = useState(false);
  const { scrollTo, hash } = useNavigation()
  const inProjects = useMemo(() => hash.startsWith("#projects"), [hash])

  useEffect(() => {
    if (inProjects) {
      setExpanded(true)
    }
  }, [inProjects])
  
  return (
    <div className="flex flex-col">
      <NavLink 
        title="Projects" 
        icon={<ChevronDownIcon className={classNames({ 'rotate-180': expanded }, 'transition-all')} />} 
        disabled={inProjects}
        active={inProjects} 
        onClick={() => setExpanded(prev => !prev)}
        className={classNames('bg-monokai-light', { 'rounded-b-none': expanded })}
      />

      {expanded && (
        <div className="flex flex-col bg-monokai-light rounded-b-md p-2 gap-2">
          {projects.map(({ title, icon, link }) => (
            <NavLink
              className="bg-monokai-dark"
              key={title}
              title={title} 
              icon={<img src={icon} alt="ico" />}  
              active={hash === link}          
              onClick={() => scrollTo(link)}
            />
          ))}
        </div>
      )}
    </div>
  )
};
