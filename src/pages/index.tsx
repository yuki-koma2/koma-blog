import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>sample koma blog</title>
        <meta name="description" content="this is a sample"/>
        <link rel="icon" href="/public/favicon.ico"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my content
        </h1>

        <p className={styles.description}>
          this is a blog test
        </p>

        <div className={styles.grid}>
          <Link href='/blog' className={styles.card}>
            <div>
              <h2>post list &rarr;</h2>
              <p>Find any blog post</p>
            </div>
          </Link>

          <Link href='/blog/c6b3vfesez' className={styles.card}>
            <div>
              <h2>post detail &rarr;</h2>
              <p>this is sample post</p>
            </div>
          </Link>
        </div>
      </main>

    </div>
  )
}

export default Home
