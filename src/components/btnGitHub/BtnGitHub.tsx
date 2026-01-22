import gitHubIcon from './gitHub-black.svg';
import './style.css';

type BtnGitHubProps = {
  link: string;
};

const BtnGitHub = ({ link }: BtnGitHubProps) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      <img src={gitHubIcon} alt="" />
      GitHub repo
    </a>
  );
};

export default BtnGitHub;
