import React, {
  createContext, useContext, useCallback, useState, useMemo,
} from 'react';

interface Navigation {
  inView: string[];
  enterView: (hash: string) => void;
  exitView: (hash: string) => void;
  hash: string;
  title: string;
  scrollTo: (hash: string) => void;
}

const defaultContext: Navigation = {
  inView: [],
  enterView: () => null,
  exitView: () => null,
  hash: "#about",
  title: 'Home',
  scrollTo: () => null,
}

export const NavigationContext = createContext<Navigation>(defaultContext);

const hashMap = new Map<string, string>([
  ['#about', 'Home'],
  ['#skills', 'Skills'],
  ['#projects', 'Projects'],
  ['#projects-bbd', 'BBD'],
  ['#projects-osutracker', 'osuTracker'],
  ['#projects-maori-pronunciation-dictionary', 'Māori PD'],
  ['#projects-simulate-exchange', 'Simulate Exchange'],
  ['#projects-time-tracker', 'Time Tracker'],
  ['#projects-collection-helper', 'Collection Helper'],
  ['#projects-snipe-nz', 'snipe.nz']
])

const NavigationProvider = ({ children }: any) => {
  const [inView, setInView] = useState<string[]>([]);

  const [hash, title] = useMemo(() => {
    const activeHash = inView.length ? inView[0] : '#about';
    window.location.hash = activeHash;
    const title = hashMap.get(activeHash) ?? 'Home'
    return [activeHash, title]
  }, [inView])

  const scrollTo = useCallback((hash: string) => {
    const el = document.getElementById(hash)
    if (el) {
      window.scrollTo(0, el.offsetTop + 100)
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const enterView = (hash: string) => {
    if (!inView.includes(hash)) setInView(prev => [...prev, hash]);
  };

  const exitView = (hash: string) => {
    setInView(prev => prev.filter(i => i !== hash))
  }

  return (
    <NavigationContext.Provider
      value={{ hash, title, scrollTo, inView, enterView, exitView }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => useContext(NavigationContext);

export default NavigationProvider;
