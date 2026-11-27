import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import { styles } from '../styles';
import { labCover } from '../assets';
import { LAB_URL } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

// Teaser for Kaloyan's Lab, which lives at /lab on this same site. The lab
// has its own Swiss "ink" look, so the card borrows its red as a hint.
const Lab = () => {
  const card = useRef(null);
  // the screenshot drifts against the card for a little depth
  const { scrollYProgress } = useScroll({ target: card, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-9%', '9%']);
  return (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Side projects</p>
      <h2 className={styles.sectionHeadText}>
        The Lab<span className='text-[#ff3b1f]'>.</span>
      </h2>
    </motion.div>

    <motion.a
      ref={card}
      href={LAB_URL}
      variants={fadeIn('up', 'spring', 0.15, 0.75)}
      className='group mt-10 block p-[1px] rounded-[24px] bg-white/[0.08] hover:bg-[#ff3b1f] transition-colors duration-500'
    >
      <div className='bg-tertiary rounded-[23px] p-5 sm:p-7 grid lg:grid-cols-[1fr_1.25fr] gap-7 items-center'>
        <div className='flex flex-col gap-4 order-2 lg:order-1'>
          <p className='text-[12px] uppercase tracking-[0.18em] text-[#ff3b1f] font-semibold'>
            kaloyan.vercel.app/lab
          </p>
          <h3 className='text-white font-black text-[30px] sm:text-[40px] leading-[1.05]'>
            Small games and interactive studies.
          </h3>
          <p className='text-secondary text-[16px] leading-[27px] max-w-md'>
            A separate corner of the site where I build playful experiments with care for motion and finish.
            First up: an honest 3D shell game.
          </p>
          <span className='mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-[#ff3b1f] px-5 py-3 text-[15px] font-semibold text-white'>
            Enter the Lab
            <span className='transition-transform duration-300 group-hover:translate-x-1'>→</span>
          </span>
        </div>
        <div className='order-1 lg:order-2 overflow-hidden rounded-2xl aspect-[2/1]'>
          <motion.img
            style={{ y: imageY, scale: 1.2 }}
            src={labCover}
            alt="Kaloyan's Lab home page"
            loading='lazy'
            className='w-full h-full object-cover'
          />
        </div>
      </div>
    </motion.a>
  </>
  );
};

export default SectionWrapper(Lab, 'lab');
