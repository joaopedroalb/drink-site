import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { DrinkContextProvider } from '../contexts/DrinkContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DrinkContextProvider>
      <Component {...pageProps} />
    </DrinkContextProvider>
  )
}

export default MyApp
