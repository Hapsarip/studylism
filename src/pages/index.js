import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Studylism</title>
        <meta name="description" content="Template untuk Lab 2.2. Github Actions. Based on create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Lakukan perubahan pada&nbsp;
            <code className={styles.code}>src/pages/index.js</code>
          </p>
        </div>

        <div className={styles.center}>
          <h1 className={inter.className}>
            Senior Project 2023 | Lab Informatika
          </h1>
        </div>

        <div>
          <h5 className={inter.className}>
            [Kelompok 3W1P] | []
          </h5>
        </div>
      </main>
    </>
  )
}
