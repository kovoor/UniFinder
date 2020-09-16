import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import styles from '../styles/SearchForm.module.css'

const Layout = ({ children, title = "default title", description = "default-description" }) => {
    return (
        <>
            <Head>
                <link rel="icon" href="/uniFinder-logo.svg" />
                <meta name="description" content={description} />
                <title>{title}</title>
            </Head>
            <main>
                {children}
            </main>
        </>
    );
}

export default Layout