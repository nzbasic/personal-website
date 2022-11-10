import { contentUrl } from '../resources/env';

interface RepoLinkProps {
  link: string;
}

export const RepoLink = ({ link }: RepoLinkProps) => {
  return (
    <a className="flex items-center gap-2 link" href={link} target="_blank" rel="noreferrer">
      <img src={contentUrl + '/logos/github.png'} alt="github" className="w-8" />
      <span>Repo</span>
    </a>
  )
};
