import React from 'react'
import ProductDetails from '../../components/ProductDetails'

const shopPageDetails = ({ supplement }) => {
    return (
        <ProductDetails supplement={supplement} />
    )
}


export async function getStaticPaths() {

    const res = await fetch('https://gym2-dec90-default-rtdb.europe-west1.firebasedatabase.app/gym/supplements.json')
    const supplements = await res.json()

    const paths = await supplements.map((supplement) => ({
        params: { id: supplement.id.toString() },
    }))


    return { paths, fallback: false }
}



export async function getStaticProps({ params }) {
    const res = await fetch(`https://gym2-dec90-default-rtdb.europe-west1.firebasedatabase.app/gym/supplements/${params.id}.json`)
    const data = await res.json()

    return { props: { supplement: data } }
}

export default shopPageDetails
