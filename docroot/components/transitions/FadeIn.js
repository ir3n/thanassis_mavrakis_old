import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function FadeIn({ children }) {
  const controls = useAnimation();
  const router = useRouter();

  useEffect(() => {
    //first revert to the initial state
    controls
      .start({
        opacity: 0,
        transition: { duration: 0 },
      })
      //then perform the animation
      .then(() => {
        controls.start({
          opacity: 1,
          transition: { delay: 0.2 },
        });
      });

    //all this will happen when the router path changes
  }, [router.asPath]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={controls}>
      {children}
    </motion.div>
  );
}
