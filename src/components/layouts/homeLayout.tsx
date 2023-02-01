import Head from 'next/head'
import { layoutProps } from '~/src/types'
import { Container } from '@chakra-ui/react'

const HomeLayout = ({children, title, description}: layoutProps) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description=''} />
      </Head>
      <Container maxW="1200px">
        <main>
          {children}
        </main>
      </Container>
    </div>
  )
}

export default HomeLayout
