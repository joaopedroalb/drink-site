import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Navbar/>
      <div className={styles.content}>
        <Card name="Korone" idPerson={1} drinks={3} pathImg={"https://cdn.discordapp.com/attachments/580125063186087966/923007798604881930/k1.jpg"} />
        <Card name="Gura" idPerson={2} drinks={1} pathImg={"https://cdn.discordapp.com/attachments/580125063186087966/923013064905850900/latest.png"} />
        <Card name="Edson FrontEnd" idPerson={3} drinks={0} pathImg={"https://cdn.discordapp.com/attachments/580125063186087966/923013253871845406/cc13fc54bb7475bc752494fb163d6075.png"} />
      </div>
    </div>
  )
}

export default Home
