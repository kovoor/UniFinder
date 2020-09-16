import Head from 'next/head'
import React from 'react'
import SearchForm from '../components/searchForm'
import Logo from '../components/logo'
import styles from '../styles/Home.module.css'

const Home = () => (
  <div className={styles.container}>
    <Head>
      <title>International student costs for universities in the world - UniFinder</title>
      <link rel="icon" href="/uniFinder-logo.svg" />
    </Head>

    <main className={styles.main}>
      <Logo className={styles.logo} />
      <SearchForm />

      <div className={styles.description}>
        <h2>
          Find your next university.
        </h2>
        <p>
          Get the complete international student costs for universities in the world.
        </p>
      </div>
    </main>

    <footer className={styles.footer}>
      <p>Created by </p>
      <a
        href="https://twitter.com/kxvoor"
        target="_blank"
        rel="noopener noreferrer"
      >
&nbsp;kovoor
      </a>
    </footer>
  </div>
)

export default Home
