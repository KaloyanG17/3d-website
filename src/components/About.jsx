import { motion } from 'framer-motion';

import { styles } from '../styles';
import { focusAreas, GITHUB_USER, PORTFOLIO_REPOS, profile } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const pad = (n) => String(n).padStart(2, '0');


const FocusCard = ({ index, title, icon, blurb, stack, proof }) => (
  <motion.article
    variants={fadeIn('up', 'spring', 0.12 * index, 0.75)}
    className='group green-pink-gradient p-[1px] rounded-[22px] shadow-card'
  >
    <div className='h-full bg-tertiary rounded-[21px] p-6 flex flex-col gap-5 transition-colors duration-500 group-hover:bg-[#1b1440]'>
      <div className='flex items-start justify-between'>
        <div className='w-14 h-14 rounded-2xl bg-black-200 grid place-items-center'>
          <img src={icon} alt='' className='w-9 h-9 object-contain' />
        </div>
        <span className='text-[13px] font-semibold text-white/30 tabular-nums'>{pad(index + 1)}</span>
      </div>
      <div>
        <h3 className='text-white text-[21px] font-bold leading-tight'>{title}</h3>
        <p className='mt-2 text-secondary text-[14px] leading-[23px]'>{blurb}</p>
      </div>
      <ul className='flex flex-wrap gap-2'>
        {stack.map((tech) => (
          <li key={tech} className='rounded-full bg-white/[0.06] px-3 py-1 text-[12px] text-white/80'>
            {tech}
          </li>
        ))}
      </ul>
      <p className='mt-auto pt-4 border-t border-white/10 text-[13px] text-secondary'>
        Seen in{' '}
        {proof.map((p, i) => (
          <span key={p.name}>
            {i > 0 && ' · '}
            <a href={p.href} className='text-white hover:text-[#915eff] transition-colors'>
              {p.name}
            </a>
          </span>
        ))}
      </p>
    </div>
  </motion.article>
);

const About = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>

    <div className='mt-8 grid gap-10 lg:grid-cols-[1.45fr_1fr]'>
      <motion.div variants={fadeIn('', '', 0.1, 1)}>
        <p className='inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[13px] text-white/85'>
          <span className='relative flex h-2 w-2'>
            <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-[#38ef7d] opacity-60' />
            <span className='relative inline-flex h-2 w-2 rounded-full bg-[#38ef7d]' />
          </span>
          Currently a web developer at Secure.bg
        </p>

        <h3 className='mt-6 text-white text-[32px] sm:text-[40px] font-black leading-[1.1]'>{profile.role}</h3>
        <ul className='mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[15px] sm:text-[17px] font-medium text-[#c9a7ff]'>
          {profile.headlineStack.map((tech, i) => (
            <li key={tech}>
              {i > 0 && <span className='mr-3 text-white/25'>/</span>}
              {tech}
            </li>
          ))}
        </ul>

        <p className='mt-6 text-secondary text-[17px] leading-[30px] max-w-3xl'>{profile.summary}</p>

        <div className='mt-8 flex flex-wrap gap-3'>
          <a
            href='#contact'
            className='rounded-full bg-[#915eff] px-6 py-3 text-[15px] font-semibold text-white hover:bg-[#a57bff] transition-colors'
          >
            Get in touch
          </a>
          <a
            href={`https://github.com/${GITHUB_USER}`}
            target='_blank'
            rel='noreferrer'
            className='rounded-full border border-white/20 px-6 py-3 text-[15px] font-medium text-white hover:border-white/50 transition-colors'
          >
            GitHub ↗
          </a>
          <a
            href='#skills'
            className='rounded-full border border-white/20 px-6 py-3 text-[15px] font-medium text-white hover:border-white/50 transition-colors'
          >
            Full skills list ↓
          </a>
        </div>
      </motion.div>

      <motion.aside
        variants={fadeIn('left', 'spring', 0.2, 0.75)}
        aria-label='At a glance'
        className='green-pink-gradient p-[1px] rounded-[22px] shadow-card self-start'
      >
        <div className='bg-tertiary rounded-[21px] p-6'>
          <p className='text-[12px] uppercase tracking-[0.16em] text-secondary'>At a glance</p>
          <dl className='mt-4 divide-y divide-white/10'>
            {profile.glance.map((row) => (
              <div key={row.label} className='grid grid-cols-[110px_1fr] gap-4 py-3'>
                <dt className='text-[13px] text-secondary pt-0.5'>{row.label}</dt>
                <dd className='text-[15px] text-white font-medium leading-snug'>
                  {row.value}
                  {row.detail && <span className='block text-[13px] text-secondary font-normal mt-0.5'>{row.detail}</span>}
                </dd>
              </div>
            ))}
            <div className='grid grid-cols-[110px_1fr] gap-4 py-3'>
              <dt className='text-[13px] text-secondary pt-0.5'>Portfolio</dt>
              <dd className='text-[15px] text-white font-medium'>
                {pad(PORTFOLIO_REPOS.length)} live projects, all with source
              </dd>
            </div>
          </dl>
        </div>
      </motion.aside>
    </div>

    <div className='mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4'>
      {focusAreas.map((area, index) => (
        <FocusCard key={area.title} index={index} {...area} />
      ))}
    </div>
  </>
);

export default SectionWrapper(About, 'about');
