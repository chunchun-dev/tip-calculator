import Head from 'next/head'
import Image from 'next/image'
import Calculator from '../components/Calculator'
import Title from '../components/Title'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Title />
        <Calculator/>
      </div>
    </>
  )
}
