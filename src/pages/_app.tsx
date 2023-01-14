import React from 'react';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import BottomNav from '../components/BottomNav'
import { Montserrat } from "@next/font/google"
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  // weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient())
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <div className={`${montserrat.variable} font-montserrat w-screen h-full pb-20`}>
          <Component {...pageProps} />
          <BottomNav />
        </div>
      </Hydrate>
    </QueryClientProvider>
  )
}
