import Styles from "@/styles/Home.module.css"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
export default function Home() {
  return (
    <>
      <Head>
        <title> หน้าเเรก | Shop</title>
        <meta name="keywords" content="ร้านค้า"></meta>
      </Head>
      
      <div className={Styles.container}>
        <h1 className={Styles.title}>หน้าแรกของเว็บไชต์</h1>
        <Image src="/shopping.svg" width={300} height={300} alt="logo" />
        <h2>ยินดีตอนรับเข้าสู่ร้านค้า</h2>
        <Link href="/products" className={Styles.btn}>
          ดูสินค้าทั้งหมด
        </Link>
      </div>
    </>
  )
}
