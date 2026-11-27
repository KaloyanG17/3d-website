import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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

// Projects as a stack of pinned cards: each one sticks near the top while the
// next slides up over it, and the ones underneath shrink and dim.
const StackCard = ({ project, index, total, progress }) => {
  const frame = useRef(null);
  const last = index === total - 1;
  const range = [index / total, 1];
  const scale = useTransform(progress, range, [1, last ? 1 : 1 - (total - index) * 0.035]);
  const dim = useTransform(progress, range, [0, last ? 0 : 0.55]);

  // inside the card, the cover settles from a slight zoom as the card arrives
  const { scrollYProgress: arrive } = useScroll({ target: frame, offset: ['start end', 'start start'] });
  const imageScale = useTransform(arrive, [0, 1], [1.25, 1]);

  return (
    <div ref={frame} className='h-[88vh] sticky top-0 flex items-start justify-center pt-[96px]'>
      <motion.article
        style={{ scale, top: `${index * 14}px` }}
        className='relative w-full origin-top green-pink-gradient p-[1px] rounded-[26px] shadow-card'
      >
        <div className='relative overflow-hidden bg-tertiary rounded-[25px] p-4 sm:p-6 grid lg:grid-cols-[1.35fr_1fr] gap-5 lg:gap-8 items-center'>
          <a
            href={project.demo_link ?? project.source_code_link}
            {...(isExternal(project.demo_link ?? project.source_code_link) ? { target: '_blank', rel: 'noreferrer' } : {})}
            className='relative block overflow-hidden rounded-2xl aspect-[2/1]'
            aria-label={`Open ${project.name}`}
          >
            <motion.img
              style={{ scale: imageScale }}
              src={project.image}
              alt={`${project.name} cover`}
              loading={index < 2 ? 'eager' : 'lazy'}
              className='w-full h-full object-cover'
            />
            <span className='absolute top-3 left-3'>
              <Kind>{project.kind}</Kind>
            </span>
          </a>
          <div className='flex flex-col gap-3 sm:gap-4 px-1 pb-1'>
            <p className='flex items-baseline gap-3 text-[12px] uppercase tracking-[0.18em] font-semibold'>
              <span className='text-white/35 tabular-nums'>
                {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
              {index === 0 && <span className='text-[#915eff]'>Featured</span>}
            </p>
            <h3 className='text-white font-black text-[26px] sm:text-[38px] leading-none'>{project.name}</h3>
            <p className='text-secondary text-[14px] sm:text-[16px] leading-[24px] sm:leading-[27px] line-clamp-3 lg:line-clamp-none'>
              {project.description}
            </p>
            <Tags tags={project.tags} />
            <div className='mt-1'>
              <ProjectLinks {...project} size='lg' />
            </div>
          </div>
          {/* darkens the card as later ones stack on top of it */}
          <motion.div aria-hidden style={{ opacity: dim }} className='pointer-events-none absolute inset-0 bg-primary' />
        </div>
      </motion.article>
    </div>
  );
};

const ProjectStack = ({ projects }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ['start start', 'end end'] });
  return (
    <div ref={container} className='relative mt-6'>
      {projects.map((project, index) => (
        <StackCard
          key={project.source_code_link}
          project={project}
          index={index}
          total={projects.length}
          progress={scrollYProgress}
        />
      ))}
    </div>
  );
};

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

      <ProjectStack projects={projects} />

      <EarlierWork />
    </>
  );
};

export default SectionWrapper(Works, 'projects');
