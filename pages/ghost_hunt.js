import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

import logo from '/public/images/RD_.png'
import darling from '/public/images/darling.png'
import fusion from '/public/images/city_fusion.png'
import hunt from '/public/images/ghost_hunt.png'
import separator_1 from '/public/images/separator1.png'

export default function Ghost_hunt() {
    return (
        <div className={styles.container}>
            <main className={styles.main_section}>
                <div className={styles.section_divider}>
                    <Image
                        src={hunt}
                        alt='Ghost Hunt'
                        layout='fixed'
                        height={30}
                        width={25}
                    ></Image>
                    <div className={styles.section_divider_line}>
                        <Image
                            src={separator_1}
                            alt='Ghost Hunt'
                            layout='responsive'
                            height={2}
                            width={900}
                        ></Image>
                    </div>
                </div>



            </main>
        </div>
    )
}
