import Hamburger from 'hamburger-react'
import { useNavigation } from '../../../context/NavigationProvider';

interface HeaderProps {
  open: boolean;
  toggle: () => void;
}

export const Header = ({ open, toggle }: HeaderProps) => {
  const { title } = useNavigation();

  return (
    <div className="flex items-center justify-between w-full h-16 z-[100] px-4 bg-monokai-dark">
      <h2>{title}</h2>
      <Hamburger toggled={open} toggle={toggle} />
    </div>
  );
};
