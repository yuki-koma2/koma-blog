import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
        <NextSeo
            title="sample koma2 blog"
            description="this is a sample page"
        />
      <Component {...pageProps} />
      </>
  )
}

export default MyApp
