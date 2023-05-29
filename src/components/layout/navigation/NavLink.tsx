import classNames from "classnames";
import { motion } from "framer-motion";

interface NavLinkProps {
  title: string;
  icon: JSX.Element;
  onClick?: () => void;
  active?: boolean;
  className?: string;
  disabled?: boolean;
  inner?: true
}

export const NavLink = ({ title, icon, onClick, active, className, inner, disabled }: NavLinkProps) => {
  return (
    <motion.button 
      initial={{ backgroundColor: inner ? '#192227' : '#263238' }}
      animate={{ backgroundColor: active ? '#26ABF4' : inner ? '#192227' : '#263238' }}
      transition={{ duration: 0.2 }}
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
    </motion.button>
  )
};
