import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

import logo from '/public/images/RD_.png'
import darling from '/public/images/darling.png'
import fusion from '/public/images/city_fusion.png'
import hunt from '/public/images/ghost_hunt.png'

export default function Ghost_hunt() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div className={styles.section_divider}>
                    <Image
                        src={hunt}
                        alt='Ghost Hunt'
                        layout='fixed'
                        height={30}
                        width={25}
                    ></Image>
                    <hr className={styles.section_divider_line}></hr>
                </div>

            </main>
        </div>
    )
}
