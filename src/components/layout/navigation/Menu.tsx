import { CogIcon, HomeIcon } from "@heroicons/react/20/solid"
import { useNavigation } from "../../../context/NavigationProvider"
import { Logo } from "../Logo"
import { Contacts } from "../../Contacts"
import { NavLink } from "./NavLink"
import { ProjectsDropdown } from "./ProjectsDropdown"

const navigation = [
  { title: "Home", hash: "#about", icon: <HomeIcon /> },
  { title: "Skills", hash: "#skills", icon: <CogIcon /> }
]

interface MenuProps {
  onNavigate?: () => void;
}

export const Menu = ({ onNavigate }: MenuProps) => {
  const { scrollTo, hash } = useNavigation()

  const handleNavigation = (hash: string) => {
    if (onNavigate) onNavigate();
    scrollTo(hash)
  };

  return (
    <div className="sticky flex flex-col items-center justify-between w-full h-full min-h-[calc(100vh-4rem)]">
      <div className="mt-4 flex flex-col gap-4 w-full">
        <div className="hidden lg:block self-center">
          <Logo />
        </div>
        
        <div className="flex flex-col px-2 gap-2">
          {navigation.map((item) => (
            <NavLink 
              {...item}
              className="bg-monokai-light"
              key={item.title}
              active={hash === item.hash} 
              onClick={() => handleNavigation(item.hash)} 
            />
          ))}

          <ProjectsDropdown handleNavigation={handleNavigation} />
        </div>
      </div>
    </div>
  )
}
