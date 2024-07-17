import type { AppProps } from 'next/app'
import { PrimeReactProvider } from 'primereact/api'
import { NextUIProvider } from '@nextui-org/react'
import 'primereact/resources/themes/lara-light-cyan/theme.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <PrimeReactProvider value={{ unstyled: false }}>
        <Component {...pageProps} />
      </PrimeReactProvider>
    </NextUIProvider>
  )
}
