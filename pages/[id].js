import dbConnect from "../utils/dbConnect"
import Head from 'next/head'
import Link from 'next/link'
import Uni from '../data/models/Uni'
import styles from '../styles/Profile.module.css'


const Profile = ({ uniData }) => {
    console.log(uniData)
    return(
        <div className={styles.profilePage}>
            <Head>
                <title>{uniData.name}</title>
                <link rel="icon" href="/uniFinder-logo.svg" />
            </Head>
            <h1>{uniData.name}</h1>
            <p>ID: {uniData.id} </p>
            <p>Tuition Fees: ${uniData.tuition}</p>
            <p>Room Fees: ${uniData.roomCharge}</p>
            <p>Board Fees: ${uniData.boardCharge}</p>
            <p>Website: {uniData.website}</p>
            <Link href={`/search/uniName=${uniData.name}`}>Return Home</Link>
        </div>
    )
}

export async function getStaticProps(context) {
    console.log(context.params.id)

    const uni = await Uni.findOne({ "id": context.params.id.toString() })
    const uniData = JSON.parse(JSON.stringify(uni))
    return {
        props: { uniData },
    }
}

export async function getStaticPaths() {
    dbConnect()

    const unis = await Uni.find()

    const paths = unis.map((a) => {
        return { params: {id: a.id.toString() }}
    })
     
    return { paths, fallback: false }
}

export default Profile

