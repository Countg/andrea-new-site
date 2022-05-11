import react, { useRef, useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const squareVariants = {
  visible: { opacity: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0 },
};

const sentence = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      staggerChildren: 0.09,
    },
  },
};

const lettering = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Header() {
  let firstLine = 'Be where the';
  let secondLine = 'world is going.';

  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={squareVariants}
      animate={controls}
      initial='hidden'
      className='header-container'>
      <div className='header-title'>
        <motion.h2 variants={sentence} initial='hidden' animate='visible'>
          {firstLine.split('').map((char, index) => (
            <motion.span key={char + '_' + index} variants={lettering}>
              {char}
            </motion.span>
          ))}
          <br />
          {secondLine.split('').map((char, index) => (
            <motion.span key={char + '_' + index} variants={lettering}>
              {char}
            </motion.span>
          ))}
        </motion.h2>
      </div>

      <div className='header-overlay'></div>
      <img src='/images/christin-hume-hBuwVLcYTnA-unsplash.jpg' />
    </motion.div>
  );
}
