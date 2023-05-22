import Styles from "@/styles/About.module.css"
import Image from "next/image"
import Head from "next/head"
export default function about() {
    return (
        <>
            <Head>
                <title> เกี่ยวกับเรา | Shop</title>
                <meta name="keywords" content="ร้านค้า"></meta>
            </Head>
            <div className={Styles.container}>
                <h1 className={Styles.title}>เกี่ยวกับเรา</h1>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, quaerat eius! Fugit adipisci iure expedita numquam commodi, quibusdam soluta distinctio sint repellat in, corrupti incidunt modi, unde sunt libero vero?</span>
                <Image src="/about.svg" width={500} height={500} alt="logo" />
            </div>
        </>
    )
};