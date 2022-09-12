import { useState } from 'react';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  const [red, setRed] = useState(false);

  setInterval(() => {
    setRed(!red);
  }, 15000);

  return (
    <>
      <Component red={red} {...pageProps} />
    </>
  );
}

export default MyApp;
