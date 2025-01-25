import { ClerkProvider } from '@clerk/nextjs';
import './global.css';

function MyApp({ Component, pageProps }) {
  return( 
    <ClerkProvider>

        <Component {...pageProps} />

    </ClerkProvider>


  );
}

export default MyApp