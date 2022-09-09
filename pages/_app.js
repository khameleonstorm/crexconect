import '../styles/globals.css'
import { AuthProvider } from '../context/AuthContext';
import NProgress from "nprogress"
import Head from "next/head"
import Router from "next/router"

Router.onRouteChangeStart = url => {
  NProgress.start()
}

Router.onRouteChangeComplete = () => NProgress.done()

Router.onRouteChangeError = () => NProgress.done()

function MyApp({ Component, pageProps }) {

  return (
          <AuthProvider>
              <Head>
                <title>For the future</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.svg" />
              </Head>
                <Component {...pageProps} />
          </AuthProvider>
        )
}

export default MyApp