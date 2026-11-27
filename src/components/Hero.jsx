import {motion} from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { LAB_URL } from '../constants';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915eff]' />
            <div className='w-1 sm:h-88 h-40 violet-gradient' />   
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Kaloyan</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop web applications <br className='sm:block hidden' /> using a variety of technologies.
          </p>
          <div className='relative z-10 mt-8 flex flex-wrap gap-3'>
            <a
              href='#projects'
              className='rounded-full bg-[#915eff] px-6 py-3 text-[15px] font-semibold text-white hover:bg-[#a57bff] transition-colors'
            >
              See my projects
            </a>
            <a
              href={LAB_URL}
              className='rounded-full border border-white/20 bg-primary/40 backdrop-blur px-6 py-3 text-[15px] font-medium text-white hover:border-white/50 transition-colors'
            >
              Visit the Lab <span className='text-[#ff3b1f]'>→</span>
            </a>
          </div>
        </div>
      </div>
      <ComputersCanvas />
    
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div 
              animate={{y: [0, 24, 0]}}
              transition={{
                duration: 1.5, 
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero