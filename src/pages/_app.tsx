import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextSeo } from "next-seo";
import { NextUIProvider } from "@nextui-org/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
          <NextSeo
              title="sample koma2 blog"
              description="this is a sample page"
          />
          <NextUIProvider>
              <Component {...pageProps} />
          </NextUIProvider>
      </>
  )
}

export default MyApp
