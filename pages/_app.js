import '../styles/globals.scss';
import { ShopContextProvider } from '../store/ShopContext';
import { useEffect, useState } from 'react';
import Router from "next/router";
import LoadingSpinner from '../components/LoadingSpinner';
// export default function MyApp({ Component, pageProps }) {
//   return (
//     <ShopContextProvider>
//       <Component {...pageProps} />
//     </ShopContextProvider>
//   )
// }




export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {/**jer je client */
    const start = () => {
      // console.log("start");
      setLoading(true);
    };
    const end = () => {
      // console.log("finished");
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <ShopContextProvider>
          <Component {...pageProps} />
        </ShopContextProvider>

      )}
    </>
  );
}
