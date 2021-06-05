import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import Link from 'next/link'

import styles from './layout.module.scss'

const name = 'Brent Danley'
export const siteTitle = 'Brent Danley - Code Portfolio'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Coding porfolio of Brent Danley. Front-end web, primarily."
        />
        <meta
          property="og:image"
          content={'/images/profile.jpg'}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header isHome={home} name={name} />
      <main className={styles.main}>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <Footer />
    </div>
  )
}