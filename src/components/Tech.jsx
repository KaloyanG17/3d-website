import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { skillGroups, technologies } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

// Skills as plain, searchable text, grouped the way job ads list them.
// A filter box lets someone check for a keyword ("Stripe", "SQL") at a glance.
const Tech = () => {
  const [query, setQuery] = useState('');
  const q = query.trim().toLowerCase();
  const total = useMemo(() => skillGroups.reduce((n, g) => n + g.items.length, 0), []);
  const matches = q ? skillGroups.reduce((n, g) => n + g.items.filter((s) => s.toLowerCase().includes(q)).length, 0) : total;

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I work with</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>

      <div className='mt-10 flex flex-wrap justify-center gap-6 sm:gap-8'>
        {technologies.map((technology) => (
          <div className='w-20 h-20 sm:w-24 sm:h-24' key={technology.name} title={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>

      <motion.div variants={fadeIn('up', 'spring', 0.1, 0.75)} className='mt-12 flex flex-wrap items-center gap-4'>
        <label className='relative flex-1 min-w-[240px] max-w-md'>
          <span className='sr-only'>Filter skills</span>
          <input
            type='search'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Search skills, e.g. Stripe, SQL, React'
            className='w-full rounded-full bg-tertiary border border-white/10 px-5 py-3 text-[15px] text-white placeholder:text-secondary/70 outline-none focus:border-[#915eff]'
          />
        </label>
        <p className='text-[14px] text-secondary' aria-live='polite'>
          {q ? `${matches} of ${total} match` : `${total} skills across ${skillGroups.length} areas`}
        </p>
      </motion.div>

      <div className='mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3'>
        {skillGroups.map((group, index) => {
          const hits = group.items.filter((s) => !q || s.toLowerCase().includes(q)).length;
          return (
            <motion.section
              key={group.title}
              variants={fadeIn('up', 'spring', 0.06 * index, 0.75)}
              className={`rounded-[20px] border bg-tertiary/80 p-5 transition-opacity duration-300 ${
                index === skillGroups.length - 1 ? 'md:col-span-2 xl:col-span-3' : ''
              } ${
                q && hits === 0 ? 'opacity-35 border-white/5' : 'border-white/10'
              }`}
            >
              <h3 className='flex items-baseline justify-between text-white text-[17px] font-bold'>
                {group.title}
                <span className='text-[12px] font-medium text-secondary tabular-nums'>{group.items.length}</span>
              </h3>
              <ul className='mt-4 flex flex-wrap gap-2'>
                {group.items.map((skill) => {
                  const hit = q && skill.toLowerCase().includes(q);
                  return (
                    <li
                      key={skill}
                      className={`rounded-full px-3 py-1.5 text-[13px] transition-colors duration-200 ${
                        hit
                          ? 'bg-[#915eff] text-white'
                          : q
                          ? 'bg-white/[0.04] text-white/35'
                          : 'bg-white/[0.06] text-white/85'
                      }`}
                    >
                      {skill}
                    </li>
                  );
                })}
              </ul>
            </motion.section>
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, 'skills');
