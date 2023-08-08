import 'src/styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  
  return (
    <> 
    {/* ここでは react fragmentを使う。（divを増やしたくないし、親のflexとかが崩れるとかのリスクがないから）*/}
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps}/>
    </>
    );
}

export default MyApp;