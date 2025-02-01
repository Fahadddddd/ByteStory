import { ClerkProvider } from '@clerk/nextjs';
import "bootstrap/dist/css/bootstrap.min.css";
import './global.module.css';

function MyApp({ Component, pageProps }) {
  return( 
    <ClerkProvider>

        <Component {...pageProps} />

    </ClerkProvider>


  );
}

export default MyApp