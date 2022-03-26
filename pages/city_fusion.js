import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

import logo from '/public/images/RD_.png'
import darling from '/public/images/darling.png'
import fusion from '/public/images/city_fusion.png'
import hunt from '/public/images/ghost_hunt.png'
import separator_1 from '/public/images/line1.png'
import separator_2 from '/public/images/line2.png'
import separator_3 from '/public/images/line3.png'

export default function City_fusion() {
    return (
        <main className={styles.main_section}>
            <div className={styles.section_divider} id="fusion">
                <button className={styles.button}>
                    <Link href="/" passHref>
                        <Image
                            src={fusion}
                            alt='Ghost Hunt'
                            layout='fixed'
                            height={30}
                            width={25}
                        ></Image>
                    </Link>
                </button>
                <div className={styles.section_divider_line}>
                    <Image
                        src={separator_2}
                        alt='Ghost Hunt'
                        layout='responsive'
                        height={1}
                        width={900}
                    ></Image>
                </div>
            </div>



        </main>
    )
}
