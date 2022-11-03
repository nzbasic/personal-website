import { InView } from "react-intersection-observer";
import { useNavigation } from "../../context/NavigationProvider";

interface HashSectionProps {
  hash: string;
  children?: React.ReactNode;
  className?: string;
  initial?: true;
}

export const HashSection = ({ hash, children, className, initial }: HashSectionProps) => {
  const { enterView, exitView } = useNavigation()

  const handleChange = (inView: boolean, entry: any) => {
    if (inView) {
      enterView(hash)
    } else {
      exitView(hash)
    }
  };

  return (
    <InView as="div" id={hash} onChange={handleChange} className={className} initialInView={initial} threshold={0.1} >
      {children}
    </InView>
  )
};
