import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import Ghost_hunt from './ghost_hunt'

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

import darling_1 from '/public/images/header/darling/Line.png'
import darling_2 from '/public/images/header/darling/Line2.png'
import darling_3 from '/public/images/header/darling/Rectangle.png'
import darling_4 from '/public/images/header/darling/Rectangle2.png'
import darling_5 from '/public/images/header/darling/Rectangle3.png'
import darling_6 from '/public/images/header/darling/Rectangle4.png'
import darling_7 from '/public/images/header/darling/Rectangle5.png'


import hunt_1 from '/public/images/header/hunt/Line 2.png'
import hunt_2 from '/public/images/header/hunt/Line 3.png'
import hunt_3 from '/public/images/header/hunt/Rectangle.png'
import hunt_4 from '/public/images/header/hunt/Rectangle2.png'
import hunt_5 from '/public/images/header/hunt/Rectangle3.png'
import hunt_6 from '/public/images/header/hunt/Rectangle4.png'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ghost Hunt</title>
        <meta name="description" content="Ghost Hunt" />
        <link rel="icon" href='public/images/RD_.png' />
      </Head>

      <div className={styles.top_bar}>
        <Image
          src={logo}
          alt='Rosary Darling'
          layout='fixed'
          height={28}
          width={58}
        ></Image>

        <div className={styles.icons}>
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
      </div>


      <main className={styles.main}>
        <div className={styles.header}>
          <ParallaxProvider>
            <div className={styles.header_section}>
              <div className={styles.overlapGrid}>
                <Parallax speed={-15} y={[40, 60]} x={[40]}>
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
                <Parallax speed={-18} y={[40, 60]} x={[40]}>
                  <div className={styles.header_image_2}>
                    <Image
                      src={fusion_2}
                      alt='Ghost Hunt'
                      layout='responsive'
                      height={50}
                      width={50}
                    ></Image>
                  </div>
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
                <Parallax speed={-20} y={[-20, 20]}>
                  <div className={styles.header_image_4}>
                    <Image
                      src={fusion_4}
                      alt='Ghost Hunt'
                      layout='responsive'
                      height={170}
                      width={100}
                    ></Image>
                  </div>
                </Parallax>
                <Parallax speed={-5} y={[-10, 15]}>
                  <div className={styles.header_image_5}>
                    <Image
                      src={fusion_5}
                      alt='Ghost Hunt'
                      layout='responsive'
                      height={30}
                      width={170}
                    ></Image>
                  </div>
                </Parallax>
                <Parallax speed={-10} y={[-20, 20]}>
                  <div className={styles.header_image_6}>
                    <Image
                      src={fusion_6}
                      alt='Ghost Hunt'
                      layout='responsive'
                      height={45}
                      width={55}
                    ></Image>
                  </div>
                </Parallax>
              </div>
            </div>



            <div className={styles.header_section}>
              <div className={styles.overlapGrid}>
                <Parallax speed={-15} y={[40, 60]} x={[40]}>
                  <div className={styles.header_image_21}>
                    <Image
                      src={darling_1}
                      alt='Ghost Hunt'
                      layout='responsive'
                      height={165}
                      width={1}
                    ></Image>
                  </div>
                </Parallax>
                <Parallax speed={-18} y={[40, 60]} x={[40]}>
                  <div className={styles.header_image_22}>
                    <Image
                      src={darling_2}
                      alt='Ghost Hunt'
                      layout='responsive'
                      height={135}
                      width={1}
                    ></Image>
                  </div>
                </Parallax>
                <Parallax speed={-10} y={[-60, -20]}>
                  <div className={styles.header_image_23}>
                    <Image
                      src={darling_3}
                      alt='Ghost Hunt'
                      layout='responsive'
                      height={150}
                      width={90}
                    ></Image>
                  </div>
                </Parallax>
                <Parallax speed={-20} y={[-20, 20]}>
                  <div className={styles.header_image_24}>
                    <Image
                      src={darling_4}
                      alt='Ghost Hunt'
                      layout='responsive'
                      height={170}
                      width={100}
                    ></Image>
                  </div>
                </Parallax>
                <Parallax speed={-5} y={[-10, 15]}>
                  <div className={styles.header_image_25}>
                    <Image
                      src={darling_5}
                      alt='Ghost Hunt'
                      layout='responsive'
                      height={40}
                      width={140}
                    ></Image>
                  </div>
                </Parallax>
                <Parallax speed={-10} y={[-20, 20]}>
                  <div className={styles.header_image_26}>
                    <Image
                      src={darling_6}
                      alt='Ghost Hunt'
                      layout='responsive'
                      height={45}
                      width={55}
                    ></Image>
                  </div>
                </Parallax>
                <Parallax speed={-10} y={[-20, 20]}>
                  <div className={styles.header_image_27}>
                    <Image
                      src={darling_7}
                      alt='Ghost Hunt'
                      layout='responsive'
                      height={55}
                      width={55}
                    ></Image>
                  </div>
                </Parallax>
              </div>
            </div>


            <div className={styles.header_section}>
              <div className={styles.overlapGrid}>
                <Parallax speed={-15} y={[40, 60]} x={[40]}>
                  <div className={styles.header_image_31}>
                    <Image
                      src={hunt_1}
                      alt='Ghost Hunt'
                      layout='responsive'
                      height={1}
                      width={200}
                    ></Image>
                  </div>
                </Parallax>
                <Parallax speed={-18} y={[40, 60]} x={[40]}>
                  <div className={styles.header_image_32}>
                    <Image
                      src={hunt_2}
                      alt='Ghost Hunt'
                      layout='responsive'
                      height={1}
                      width={150}
                    ></Image>
                  </div>
                </Parallax>
                <Parallax speed={-10} y={[-60, -20]}>
                  <div className={styles.header_image_33}>
                    <Image
                      src={hunt_3}
                      alt='Ghost Hunt'
                      layout='responsive'
                      height={90}
                      width={90}
                    ></Image>
                  </div>
                </Parallax>
                <Parallax speed={-20} y={[-20, 20]}>
                  <div className={styles.header_image_34}>
                    <Image
                      src={hunt_4}
                      alt='Ghost Hunt'
                      layout='responsive'
                      height={170}
                      width={100}
                    ></Image>
                  </div>
                </Parallax>
                <Parallax speed={-5} y={[-10, 15]}>
                  <div className={styles.header_image_35}>
                    <Image
                      src={hunt_5}
                      alt='Ghost Hunt'
                      layout='responsive'
                      height={120}
                      width={30}
                    ></Image>
                  </div>
                </Parallax>
                <Parallax speed={-10} y={[-20, 20]}>
                  <div className={styles.header_image_36}>
                    <Image
                      src={hunt_6}
                      alt='Ghost Hunt'
                      layout='responsive'
                      height={75}
                      width={65}
                    ></Image>
                  </div>
                </Parallax>
              </div>
            </div>
          </ParallaxProvider>
        </div>

        <Ghost_hunt/>

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

