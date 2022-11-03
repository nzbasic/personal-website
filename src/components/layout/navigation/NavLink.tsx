import classNames from "classnames";

interface NavLinkProps {
  title: string;
  icon: JSX.Element;
  onClick?: () => void;
  active?: boolean;
  className?: string;
  disabled?: boolean;
}

export const NavLink = ({ title, icon, onClick, active, className, disabled }: NavLinkProps) => {
  return (
    <button 
      disabled={disabled}
      onClick={onClick} 
      className={classNames(className,
        "w-full flex items-center justify-between rounded-md p-2 hover:bg-function transition-all text-base",
        { 'bg-function': active },
      )}
    >
      <span className="font-medium">{title}</span>
      <div className="w-7 h-7 text-white">
        {icon}
      </div>
    </button>
  )
};
