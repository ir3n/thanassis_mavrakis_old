import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function SlideIn({ children }) {
  const controls = useAnimation();
  const router = useRouter();

  useEffect(() => {
    //first revert to the initial state
    controls
      .start({
        top: '-110%',
      })
      //then perform the animation
      .then(() => {
        controls.start({
          top: '0',
        });
      });

    //all this will happen when the router path changes
  }, [router.asPath]);

  return (
    <motion.div
      initial={{
        position: 'fixed',
        height: '100vh',
        top: '-110%',
        right: '0',
        // overflowY: 'scroll',
        // overflowX: 'hidden',
        backgroundColor: 'white',
        zIndex: '1000',
        boxShadow: '2px 2px 25px rgb(0 0 0 / 80%)',
      }}
      transition={{ ease: 'easeOut', duration: 0.6 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
}
