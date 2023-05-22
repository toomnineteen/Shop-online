import Head from "next/head"
import Image from "next/image"
import Styles from "@/styles/Product.module.css"
import Link from "next/link"

export async function getStaticProps() {
    const res = await fetch("https://dummyjson.com/products?limit=10")
    const data = await res.json()
    return {
        props: { products: data.products }
    }
}

export default function index({ products }: any) {
    return (
        <>
            <Head>
                <title> สินค้าทั้งหมด | Shop</title>
                <meta name="keywords" content="ร้านค้า"></meta>
            </Head>
            <div className={Styles.container}>
                {products.map((item:any) => (
                    <div key={item.id}>
                        <Link href={'/products/' + item.id}>
                            <h2 className={Styles.title}>{item.title}</h2>
                            <Image src={item.thumbnail} width={300} height={300} alt={item.title} />
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
};