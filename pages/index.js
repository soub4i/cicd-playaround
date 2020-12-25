import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Salam al3alam</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello DevC Marrakech
        </h1>

      </main>

      <footer className={styles.footer}>
        Made with love 2020
      </footer>
    </div>
  )
}
