import { motion } from 'framer-motion';

import { styles } from '../styles';
import { focusAreas, PORTFOLIO_REPOS } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const pad = (n) => String(n).padStart(2, '0');

// A few facts, all taken from the rest of the site so they stay true.
const facts = [
  { value: pad(PORTFOLIO_REPOS.length), label: 'Live projects you can try below' },
  { value: 'BSc', label: 'Computer Science, University of Exeter' },
  { value: '2:1', label: 'Results in every year of my degree' },
];

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

    <div className='mt-8 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-end'>
      <motion.div variants={fadeIn('', '', 0.1, 1)}>
        <p className='inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[13px] text-white/85'>
          <span className='relative flex h-2 w-2'>
            <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-[#38ef7d] opacity-60' />
            <span className='relative inline-flex h-2 w-2 rounded-full bg-[#38ef7d]' />
          </span>
          Currently a web developer at Secure.bg
        </p>
        <p className='mt-6 text-white text-[22px] sm:text-[26px] leading-[1.4] font-medium max-w-3xl'>
          I build web products end to end, from the database and payments to the last detail of the interface,
          and I like making the web feel <span className='text-[#915eff]'>alive</span> with 3D and motion.
        </p>
        <p className='mt-5 text-secondary text-[17px] leading-[30px] max-w-3xl'>
          I'm a Computer Science graduate from the University of Exeter. By day I work across JavaScript and PHP on
          production systems; outside work I ship my own projects in TypeScript, Next.js and Three.js, from a bilingual
          shop with Stripe checkout to an auto-battler game and a PDF editor that translates invoices.
        </p>
      </motion.div>

      <motion.dl variants={fadeIn('left', 'spring', 0.2, 0.75)} className='grid gap-3'>
        {facts.map((f) => (
          <div
            key={f.label}
            className='flex items-baseline gap-5 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4'
          >
            <dt className='text-[30px] font-black text-white leading-none min-w-[84px]'>{f.value}</dt>
            <dd className='text-secondary text-[14px] leading-snug'>{f.label}</dd>
          </div>
        ))}
      </motion.dl>
    </div>

    <div className='mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4'>
      {focusAreas.map((area, index) => (
        <FocusCard key={area.title} index={index} {...area} />
      ))}
    </div>
  </>
);

export default SectionWrapper(About, 'about');
