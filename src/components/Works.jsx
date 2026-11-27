import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { useGithubProjects } from '../hooks/useGithubProjects';
import { earlierProjects, GITHUB_USER } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const isExternal = (href) => /^https?:/.test(href);

// Live demo and source buttons, shared by the featured card and the grid.
const ProjectLinks = ({ name, demo_link, source_code_link, size = 'sm' }) => {
  const pad = size === 'lg' ? 'px-5 py-3 text-[15px]' : 'px-4 py-2 text-[13px]';
  return (
    <div className='flex flex-wrap gap-3'>
      {demo_link && (
        <a
          href={demo_link}
          {...(isExternal(demo_link) ? { target: '_blank', rel: 'noreferrer' } : {})}
          aria-label={`Open ${name}`}
          className={`${pad} rounded-full bg-[#915eff] text-white font-semibold hover:bg-[#a57bff] transition-colors`}
        >
          {isExternal(demo_link) ? 'Live demo ↗' : 'Open →'}
        </a>
      )}
      <a
        href={source_code_link}
        target='_blank'
        rel='noreferrer'
        aria-label={`${name} source code on GitHub`}
        className={`${pad} rounded-full border border-white/15 text-white/90 font-medium hover:border-white/40 hover:text-white transition-colors inline-flex items-center gap-2`}
      >
        <img src={github} alt='' className='w-4 h-4 object-contain' />
        Code
      </a>
    </div>
  );
};

const Tags = ({ tags }) => (
  <ul className='flex flex-wrap gap-x-3 gap-y-1'>
    {tags.map((tag) => (
      <li key={tag.name} className={`text-[13px] ${tag.color}`}>
        #{tag.name}
      </li>
    ))}
  </ul>
);

const Kind = ({ children }) => (
  <span className='inline-block rounded-full bg-black/55 backdrop-blur px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-white/85'>
    {children}
  </span>
);

const FeaturedProject = (project) => (
  <motion.article
    variants={fadeIn('up', 'spring', 0.1, 0.75)}
    className='green-pink-gradient p-[1px] rounded-[24px] shadow-card'
  >
    <div className='bg-tertiary rounded-[23px] p-5 sm:p-7 grid lg:grid-cols-[1.25fr_1fr] gap-7 items-center'>
      <a
        href={project.demo_link ?? project.source_code_link}
        target='_blank'
        rel='noreferrer'
        className='group relative block overflow-hidden rounded-2xl aspect-[2/1]'
      >
        <img
          src={project.image}
          alt={`${project.name} cover`}
          className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]'
        />
      </a>
      <div className='flex flex-col gap-4'>
        <p className='text-[12px] uppercase tracking-[0.18em] text-[#915eff] font-semibold'>
          Featured · {project.kind}
        </p>
        <h3 className='text-white font-black text-[34px] sm:text-[44px] leading-none'>{project.name}</h3>
        <p className='text-secondary text-[16px] leading-[27px]'>{project.description}</p>
        <Tags tags={project.tags} />
        <div className='mt-2'>
          <ProjectLinks {...project} size='lg' />
        </div>
      </div>
    </div>
  </motion.article>
);

const ProjectCard = ({ index, ...project }) => (
  <motion.article variants={fadeIn('up', 'spring', 0.08 * index, 0.75)} className='group h-full'>
    <Tilt options={{ max: 8, scale: 1.02, speed: 600 }} className='h-full'>
      <div className='card-frame h-full p-[1px] rounded-[22px]'>
        <div className='h-full bg-tertiary rounded-[21px] p-4 flex flex-col'>
          <div className='relative overflow-hidden rounded-2xl aspect-[2/1]'>
            <img
              src={project.image}
              alt={`${project.name} cover`}
              loading='lazy'
              className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]'
            />
            <div className='absolute top-3 left-3'>
              <Kind>{project.kind}</Kind>
            </div>
          </div>
          <div className='mt-5 flex-1 flex flex-col gap-3 px-1'>
            <h3 className='text-white font-bold text-[22px] leading-tight'>{project.name}</h3>
            <p className='text-secondary text-[14px] leading-[23px] line-clamp-4'>{project.description}</p>
            <div className='mt-auto pt-2 flex flex-col gap-4'>
              <Tags tags={project.tags} />
              <ProjectLinks {...project} />
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  </motion.article>
);

const EarlierWork = () => (
  <motion.div variants={fadeIn('up', 'spring', 0.2, 0.75)} className='mt-16'>
    <p className={styles.sectionSubText}>Earlier work</p>
    <ul className='mt-4 divide-y divide-white/10 border-y border-white/10'>
      {earlierProjects.map((p) => (
        <li key={p.repo} className='flex flex-wrap items-center gap-x-6 gap-y-1 py-4'>
          <span className='text-white font-semibold text-[17px] min-w-[180px]'>{p.name}</span>
          <span className='text-secondary text-[14px] flex-1'>{p.stack}</span>
          <span className='flex gap-5 text-[14px]'>
            {p.demo && (
              <a href={p.demo} target='_blank' rel='noreferrer' className='text-white/80 hover:text-white'>
                Live ↗
              </a>
            )}
            <a
              href={`https://github.com/${GITHUB_USER}/${p.repo}`}
              target='_blank'
              rel='noreferrer'
              className='text-white/80 hover:text-white'
            >
              Code ↗
            </a>
          </span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const Works = () => {
  const { projects, live } = useGithubProjects();
  const [featured, ...rest] = projects;
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Things I've designed and built end to end, from games and 3D experiments to shops and tools people use.
        Each one links to its code and a live version you can try.
        {live && ' This list is loaded live from my GitHub.'}
      </motion.p>

      <div className='mt-14 flex flex-col gap-7'>
        {featured && <FeaturedProject {...featured} />}
        <div className='grid gap-7 md:grid-cols-2 lg:grid-cols-3'>
          {rest.map((project, index) => (
            <ProjectCard key={project.source_code_link} index={index} {...project} />
          ))}
        </div>
      </div>

      <EarlierWork />
    </>
  );
};

export default SectionWrapper(Works, 'projects');
