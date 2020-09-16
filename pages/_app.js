import '../styles/globals.css'
import React from 'react'
import UniProvider from '../contexts/UniContext'
import Profile from './profile/[...id]'

function MyApp({ Component, pageProps }) {

  return (
    <UniProvider>
      <Component {...pageProps} />
    </UniProvider>
  )
}

export default MyApp
