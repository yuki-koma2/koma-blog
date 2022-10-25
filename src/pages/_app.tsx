import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextSeo } from "next-seo";
import { MantineProvider } from "@mantine/core";
import { NextUIProvider } from "@nextui-org/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
          <NextSeo
              title="sample koma2 blog"
              description="this is a sample page"
          />
          {/*https://mantine.dev/guides/next/*/}
          <MantineProvider
              withGlobalStyles
              withNormalizeCSS
              theme={{
                  /** Put your mantine theme override here */
                  colorScheme: 'light',
              }}
          >
              <NextUIProvider>
              <Component {...pageProps} />
              </NextUIProvider>
          </MantineProvider>
      </>
  )
}

export default MyApp
