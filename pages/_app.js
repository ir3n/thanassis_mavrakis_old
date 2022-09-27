import { useState, useEffect } from 'react';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  const [red, setRed] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setRed(!red);
    }, 15000);
  });

  return (
    <>
      <Component red={red} {...pageProps} />
    </>
  );
}

export default MyApp;
