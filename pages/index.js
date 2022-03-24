import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

import logo from '/public/images/RD_.png'
import darling from '/public/images/darling.png'
import fusion from '/public/images/city_fusion.png'
import hunt from '/public/images/ghost_hunt.png'

import fusion_1 from '/public/images/header/city_fusion/Line 4.png'
import fusion_2 from '/public/images/header/city_fusion/Line 5.png'
import fusion_3 from '/public/images/header/city_fusion/Rectangle.png'
import fusion_4 from '/public/images/header/city_fusion/Rectangle1.png'
import fusion_5 from '/public/images/header/city_fusion/Rectangle2.png'
import fusion_6 from '/public/images/header/city_fusion/Rectangle3.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ghost Hunt</title>
        <meta name="description" content="Ghost Hunt" />
        <link rel="icon" href="/public/images/RD_.png" />
      </Head>

      <div className={styles.top_bar}>
        <Image
          src={logo}
          alt='Rosary Darling'
          layout='fixed'
          height={28}
          width={58}
        ></Image>

        <div className={styles.icon}>
          <Image
            src={darling}
            alt='Rosary Darling'
            layout='fixed'
            height={25}
            width={30}
          ></Image>
        </div>
        <div className={styles.icon}>
          <Image
            src={fusion}
            alt='City Fusion'
            layout='fixed'
            height={30}
            width={25}
          ></Image>
        </div>
        <div className={styles.icon}>
          <Image
            src={hunt}
            alt='Ghost Hunt'
            layout='fixed'
            height={30}
            width={25}
          ></Image>
        </div>
      </div>


      <main className={styles.main}>
        <div className={styles.header}>
          <ParallaxProvider>
            <div className={styles.header_section}>
            <div className={styles.overlapGrid}>
              <Parallax speed={-25} y={[40, 60]} x={[40]}>
                <div className={styles.header_image_1}> 
                <Image
                  src={fusion_1}
                  alt='Ghost Hunt'
                  layout='responsive'
                  height={70}
                  width={40}
                ></Image> 
                </div>
              </Parallax>
              <Parallax speed={-10} y={[50, 70]}>
                  <Image
                    src={fusion_2}
                    alt='Ghost Hunt'
                    layout='responsive'
                    height={300}
                    width={250}
                  ></Image>
              </Parallax>
              <Parallax speed={-10} y={[-60, -20]}>
              <div className={styles.header_image_3}> 
                  <Image
                    src={fusion_3}
                    alt='Ghost Hunt'
                    layout='responsive'
                    height={140}
                    width={90}
                  ></Image>
              </div> 
              </Parallax>
              <Parallax speed={-10} y={[-20, 20]}>
                  <Image
                    src={fusion_4}
                    alt='Ghost Hunt'
                    layout='responsive'
                    height={300}
                    width={250}
                  ></Image> 
              </Parallax>
              <Parallax speed={-10} y={[-20, 20]}>
                  <Image
                    src={fusion_5}
                    alt='Ghost Hunt'
                    layout='responsive'
                    height={300}
                    width={250}
                  ></Image>
              </Parallax>
              <Parallax speed={-10} y={[-20, 20]}>
                  <Image
                    src={fusion_6}
                    alt='Ghost Hunt'
                    layout='responsive'
                    height={300}
                    width={250}
                  ></Image>
              </Parallax>
              </div>
            </div>
          


            <div>
              <Parallax >
                <div className={styles.icon}>
                  <Image
                    src={hunt}
                    alt='Ghost Hunt'
                    layout='fixed'
                    height={30}
                    width={25}
                  ></Image>
                </div>
              </Parallax>
            </div>
            <div>
              <Parallax >
                <div className={styles.icon}>
                  <Image
                    src={hunt}
                    alt='Ghost Hunt'
                    layout='fixed'
                    height={30}
                    width={25}
                  ></Image>
                </div>
              </Parallax>
            </div>
          </ParallaxProvider>
        </div>



        {/* <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
