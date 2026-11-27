import { GITHUB_USER, LAB_URL } from '../constants';
import { styles } from '../styles';

const Footer = () => (
  <footer className={`${styles.paddingX} relative z-10 border-t border-white/10`}>
    <div className='max-w-7xl mx-auto py-8 flex flex-wrap items-center justify-between gap-4 text-[14px] text-secondary'>
      <span>© {new Date().getFullYear()} Kaloyan Gaydarov</span>
      <nav className='flex gap-6'>
        <a href='#projects' className='hover:text-white'>Projects</a>
        <a href={LAB_URL} className='hover:text-white'>Lab</a>
        <a href={`https://github.com/${GITHUB_USER}`} target='_blank' rel='noreferrer' className='hover:text-white'>
          GitHub ↗
        </a>
      </nav>
    </div>
  </footer>
);

export default Footer;
