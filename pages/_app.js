import '../styles/globals.css'
import React from 'react'
import UniProvider from '../contexts/UniContext'

function MyApp({ Component, pageProps }) {

  return (
    <UniProvider>
      <Component {...pageProps} />
    </UniProvider>
  )
}

export default MyApp
