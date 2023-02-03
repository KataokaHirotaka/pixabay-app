/* eslint-disable react/jsx-key */
import { Center, Container, Flex, Heading, Box } from '@chakra-ui/react'
import Link from 'next/link'
import { Key } from 'react'
import { Url } from 'url'
import { usePixabayDataSWR } from '~/src/hooks/usePixabayDataSWR'
import { resultProps } from '~/src/types'

export const Result = ({ url }: resultProps) => {
  const { data, isLoading, isError } = usePixabayDataSWR(url)

  if (url != '' && isLoading) {
    return (
      <Center mt="40px">
        <Heading as="h2">ローディング中</Heading>
      </Center>
    )
  }

  if (isError) {
    return (
      <Center mt="40px">
        <Heading as="h2">エラー</Heading>
      </Center>
    )
  }

  if (data.total === 0) {
    return (
      <Center mt="40px">
        <Heading as="h2">
          残念ながら該当するものがみつかりませんでした。
        </Heading>
      </Center>
    )
  }

  if (data) {
    return (
      <Container mt="20px" maxW="1200px">
        <Flex flexWrap="wrap" justifyContent="space-between" mt="40px">
          {data.hits.map(
            (item: {
              pageURL: Url
              webformatWidth: number
              id: Key | null | undefined
              largeImageURL: string | undefined
            }) => {
              return (
                <Box
                  key={item.id}
                  flexBasis={item.webformatWidth / 2 + 'px'}
                  flexGrow="1"
                  flexShrink="1"
                  height="70%"
                  ml="10px"
                  mb="10px"
                >
                  <Link href={item.pageURL}>
                    <img src={item.largeImageURL}></img>
                  </Link>
                </Box>
              )
            }
          )}
        </Flex>
      </Container>
    )
  }

  return <Center mt="40px"></Center>
}
