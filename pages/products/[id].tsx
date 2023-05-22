import Head from "next/head"
import Image from "next/image"
import Styles from "@/styles/Detail.module.css"

export async function getStaticPaths() {
    const res = await fetch("https://dummyjson.com/products?limit=10")
    const data = await res.json()
    const paths = data.products.map( (item:any) => {
        return {
            params: { id: String(item.id) }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps( {params}:any ) {
    const id = params.id
    const res = await fetch("https://dummyjson.com/products/" + id)
    const data = await res.json()
    return {
        props: { product: data }
    }
}


export default function ProductDatail( {product}:any ) {
    return (
        <>
            <Head>
                <title>{product.title}</title>
            </Head>
            <div className={Styles.container}>
                <div>
                    <Image src={product.thumbnail} width={300} height={300} alt={product.title}/>
                </div>
                <div className={Styles.datail}>
                    <h1>ชื่อสินค้า : {product.title}</h1>
                    <h2>ราคา : ${product.price}</h2>
                    <h2>หมวดหมู่ : {product.category}</h2>
                    <h3>แบรนด์ : {product.brand}</h3>
                    <h4>ข้อมูลพื้นฐาน : {product.description}</h4>
                    <h4>เรดติ้ง : {product.rating}</h4>
                </div>
            </div>
        </>
    )
};