import { useEffect } from 'react'
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wow.js') : null
import Layout from '@/layout/Layout'
import '@/styles/globals.css'

export default function App({ Component, ...pageProps}) {
  useEffect (() => {
    new WOW().init()
  }, [])
  return (
      <Layout >
        <Component {...pageProps} />
      </Layout>
    )
}
