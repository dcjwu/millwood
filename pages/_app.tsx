import Head from "next/head"
import { RecoilRoot } from "recoil"

import type { AppProps } from "next/app"

import "@assets/styles/root.scss"

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
   return <>
      <Head>
         <meta content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0"
               name="viewport"/>
         <title>Millwood | Quality in Wood</title>
      </Head>

      <RecoilRoot>
         <Component {...pageProps} />
      </RecoilRoot>
   </>
}

export default MyApp
