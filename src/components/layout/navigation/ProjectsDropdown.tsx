import { ChevronDownIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";
import { useEffect, useMemo, useState } from "react";
import { useNavigation } from "../../../context/NavigationProvider";
import { projects } from "../../../resources/projects";
import { NavLink } from "./NavLink";
import { AnimatePresence, motion } from 'framer-motion';

interface ProjectsDropdownProps {
  handleNavigation: (hash: string) => void;
}

const itemDuration = 0.2;
const itemDelay = 0.2;

const parentDuration = projects.length * (itemDelay) - itemDuration
const parentHeight = (2.75 * projects.length) + (0.5 * projects.length) + 0.5;

export const ProjectsDropdown = ({ handleNavigation }: ProjectsDropdownProps) => {
  const [wasInView, setWasInView] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const { hash, inView } = useNavigation()
  const inProjects = useMemo(() => hash.startsWith("#projects"), [hash])

  useEffect(() => {
    const isInView = inView.some(i => i.startsWith('#projects'))
    if (wasInView && !isInView) {
      setExpanded(false)
    }

    setWasInView(isInView)
  }, [wasInView, inView])

  useEffect(() => {
    if (inProjects) {
      setExpanded(true)
    }
  }, [inProjects])

  return (
    <div className="flex flex-col">
      <NavLink 
        title="Projects" 
        icon={<ChevronDownIcon className={classNames({ 'rotate-180': expanded }, 'transition-all duration-500')} />} 
        disabled={inProjects}
        active={inProjects} 
        onClick={() => setExpanded(prev => !prev)}
        className={classNames(
          'bg-monokai-light ', 
          { 'transition-all delay-1000': !expanded },
          { 'rounded-b-none': expanded }
        )}
      />

      <AnimatePresence>
        {expanded && (
          <motion.div 
            initial={{ height: 0 }} 
            animate={{ height: parentHeight + 'rem' }}
            transition={{ duration: parentDuration, delay: 0 }}
            exit={{ height: 0, transition: { duration: parentDuration } }}
            className="flex flex-col bg-monokai-light rounded-b-md px-2 gap-2"
          >
            {projects.map(({ shortName, logo, link }, i) => (
              <motion.div 
                key={shortName} 
                initial={{ scale: 0 }} 
                animate={{ scale: 1 }}
                transition={{ duration: itemDuration, delay: (i + 1) * itemDelay }}
                exit={{ 
                  scale: 0, 
                  transition: { 
                    duration: itemDuration, 
                    delay: (projects.length - i - 1) * itemDelay/2
                  } 
                }}
              >
                <NavLink
                  inner
                  className={classNames(
                    { 'mt-2': i === 0 },
                    { 'mb-2': i === projects.length - 1},
                    "bg-monokai-dark"
                  )}
                  title={shortName} 
                  icon={<img src={logo} alt="ico" />}  
                  active={hash === link}          
                  onClick={() => handleNavigation(link)}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
};
