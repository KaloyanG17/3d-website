import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const parse = (ym) => {
  const [y, m] = ym.split('-').map(Number);
  return { y, m };
};
const label = (ym) => {
  const { y, m } = parse(ym);
  return `${MONTHS[m - 1]} ${y}`;
};

// "1 yr 10 mos", counting the current month for roles that are still going.
const duration = (start, end) => {
  const a = parse(start);
  const now = new Date();
  const b = end ? parse(end) : { y: now.getFullYear(), m: now.getMonth() + 1 };
  const months = (b.y - a.y) * 12 + (b.m - a.m) + 1;
  const yrs = Math.floor(months / 12);
  const mos = months % 12;
  return [yrs && `${yrs} yr${yrs > 1 ? 's' : ''}`, mos && `${mos} mo${mos > 1 ? 's' : ''}`].filter(Boolean).join(' ');
};

const TYPE_STYLES = {
  Work: 'text-[#38ef7d] border-[#38ef7d]/30 bg-[#38ef7d]/10',
  Internship: 'text-[#56ccf2] border-[#56ccf2]/30 bg-[#56ccf2]/10',
  Education: 'text-[#c9a7ff] border-[#915eff]/30 bg-[#915eff]/10',
};

const Entry = ({ experience, index, last }) => {
  const current = experience.end === null;
  const ref = useRef(null);
  // the rail below this entry fills as the entry passes the middle of the screen
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 65%', 'end 45%'] });
  const fill = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <motion.li
      ref={ref}
      variants={fadeIn('up', 'spring', 0.1 * index, 0.75)}
      className='relative grid gap-4 md:grid-cols-[200px_1fr] md:gap-10 pl-10 md:pl-0'
    >
      {/* dates */}
      <div className='md:text-right md:pt-6'>
        <p className='text-white text-[15px] font-semibold'>
          {label(experience.start)} — {current ? 'Present' : label(experience.end)}
        </p>
        <p className='text-secondary text-[13px] mt-1'>{duration(experience.start, experience.end)}</p>
      </div>

      {/* rail: line + node (mobile on the left edge, desktop between columns) */}
      {!last && (
        <span aria-hidden className='absolute left-[11px] md:left-[219px] top-7 w-px h-[calc(100%+2.5rem)] bg-white/10'>
          <motion.span
            style={{ scaleY: fill }}
            className='absolute inset-0 origin-top bg-gradient-to-b from-[#38ef7d] via-[#915eff] to-[#bf61ff]'
          />
        </span>
      )}
      <span
        aria-hidden
        className={`absolute left-[4px] md:left-[212px] top-6 h-[15px] w-[15px] rounded-full border-2 ${
          current ? 'border-[#38ef7d] bg-[#38ef7d] shadow-[0_0_18px_#38ef7d]' : 'border-[#915eff] bg-primary'
        }`}
      />

      {/* card */}
      <div className={`md:ml-8 p-[1px] rounded-[22px] ${current ? 'green-pink-gradient' : 'bg-white/[0.08]'}`}>
        <article className='bg-tertiary rounded-[21px] p-6 sm:p-7'>
          <header className='flex items-start gap-4'>
            <div
              className='w-12 h-12 shrink-0 rounded-xl grid place-items-center'
              style={{ background: experience.iconBg }}
            >
              <img src={experience.icon} alt='' className='w-8 h-8 object-contain' />
            </div>
            <div className='flex-1 min-w-0'>
              <div className='flex flex-wrap items-center gap-2'>
                <h3 className='text-white text-[21px] sm:text-[23px] font-bold leading-tight'>{experience.title}</h3>
                <span
                  className={`rounded-full border px-2.5 py-0.5 text-[11px] uppercase tracking-[0.1em] ${TYPE_STYLES[experience.type]}`}
                >
                  {current ? 'Now' : experience.type}
                </span>
              </div>
              <p className='text-secondary text-[15px] font-medium mt-1'>{experience.company_name}</p>
            </div>
          </header>

          <ul className='mt-5 space-y-2.5'>
            {experience.points.map((point) => (
              <li key={point} className='flex gap-3 text-white-100/90 text-[14.5px] leading-[23px]'>
                <span aria-hidden className='mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#915eff]' />
                {point}
              </li>
            ))}
          </ul>

          <div className='mt-5 flex flex-wrap items-center gap-2'>
            {experience.tags.map((tag) => (
              <span key={tag} className='rounded-full bg-white/[0.06] px-3 py-1 text-[12px] text-white/75'>
                {tag}
              </span>
            ))}
            {experience.link && (
              <a
                href={experience.link.href}
                target='_blank'
                rel='noreferrer'
                className='ml-auto text-[13px] font-medium text-[#c9a7ff] hover:text-white transition-colors'
              >
                {experience.link.label} ↗
              </a>
            )}
          </div>
        </article>
      </div>
    </motion.li>
  );
};

const Experience = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Work and education</p>
      <h2 className={styles.sectionHeadText}>Experience.</h2>
    </motion.div>

    <ol className='mt-14 flex flex-col gap-10'>
      {experiences.map((experience, index) => (
        <Entry
          key={`${experience.company_name}-${experience.start}`}
          experience={experience}
          index={index}
          last={index === experiences.length - 1}
        />
      ))}
    </ol>
  </>
);

export default SectionWrapper(Experience, 'work');
