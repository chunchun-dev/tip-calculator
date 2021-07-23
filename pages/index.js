import Head from 'next/head'
import Image from 'next/image'
import Calculator from '../components/Calculator'
import Title from '../components/Title'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Splittter | Split The Bill</title>
        <meta name='description' content='Splittter | Split The Bill'/>
        <meta name="author" content="QT Coder"/>
      </Head>
      <div className={styles.container}>
        <Title />
        <Calculator/>
      </div>
    </>
  )
}
