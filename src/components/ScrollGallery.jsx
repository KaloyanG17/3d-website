import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import { grandPrix, hexbound, ipadDashboard, kokolina, labCover, pdfStudio, shiplog, simulatedMotorsport } from '../assets';

const rowA = [
  { src: hexbound, name: 'Hexbound' },
  { src: kokolina, name: 'Kokolina' },
  { src: pdfStudio, name: 'PDF Studio' },
  { src: shiplog, name: 'Shiplog' },
];
const rowB = [
  { src: grandPrix, name: 'KG Grand Prix' },
  { src: ipadDashboard, name: 'iPad Dashboard' },
  { src: simulatedMotorsport, name: 'Simulated Motorsport' },
  { src: labCover, name: "Kaloyan's Lab" },
];

const Row = ({ items, x }) => (
  <motion.ul style={{ x }} className='flex gap-5 sm:gap-7 w-max will-change-transform'>
    {[...items, ...items].map((item, i) => (
      <li
        key={`${item.name}-${i}`}
        className='relative w-[280px] sm:w-[420px] lg:w-[480px] aspect-[2/1] shrink-0 overflow-hidden rounded-2xl border border-white/10'
      >
        <img src={item.src} alt={i < items.length ? item.name : ''} loading='lazy' className='w-full h-full object-cover' />
      </li>
    ))}
  </motion.ul>
);

// A full-width band of project covers that slides with the page: the top row
// drifts left and the bottom row right as you scroll past.
const ScrollGallery = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const xA = useTransform(scrollYProgress, [0, 1], ['0%', '-28%']);
  const xB = useTransform(scrollYProgress, [0, 1], ['-28%', '0%']);

  return (
    <section ref={ref} aria-label='Project gallery' className='relative py-16 sm:py-24 overflow-hidden'>
      <div className='flex flex-col gap-5 sm:gap-7 -rotate-[2deg] scale-[1.04]'>
        <Row items={rowA} x={xA} />
        <Row items={rowB} x={xB} />
      </div>
      <div aria-hidden className='pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-40 bg-gradient-to-r from-primary to-transparent' />
      <div aria-hidden className='pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-40 bg-gradient-to-l from-primary to-transparent' />
    </section>
  );
};

export default ScrollGallery;
