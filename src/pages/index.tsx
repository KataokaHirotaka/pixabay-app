/* eslint-disable react-hooks/rules-of-hooks */
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import HomeLayout from '../components/layouts/homeLayout'
import { Heading } from '@chakra-ui/react'
import { Form } from '../components/elements/form'
import { useEffect, useState } from 'react'

import { Result } from '../components/elements/result'

const Home: NextPage = () => {
  const [url, setUrl] = useState<string>('')
  // const [imgData, setImgData] = useState<Promise<any>>()

  // setImgData(data)

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeLayout title="pixabay-app">
        <Heading as="h1">pixabay-app</Heading>
        <Form setUrl={setUrl}></Form>
        <Result url={url}></Result>
      </HomeLayout>
    </div>
  )
}

export default Home
