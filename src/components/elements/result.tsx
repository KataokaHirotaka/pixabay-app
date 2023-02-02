/* eslint-disable react/jsx-key */
import {
  Box,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
} from '@chakra-ui/react'
import { Key } from 'react'
import { resultProps } from '~/src/types'

export const Result = ({ imgData }: resultProps) => {
  console.log(imgData, 'asfdjioasdfjio')

  if (imgData) {
    return (
      <Container>
        <Center mt="22px">
          <Heading as="h2">検索結果</Heading>
        </Center>
        <Center mt="22px">
          <Flex direction="column" gridGap={2}>
            {imgData.map(
              (item: {
                id: Key | null | undefined
                largeImgURL: string | undefined
              }) => {
                const id = item.id
                const imgUrl = item.largeImageURL
                return (
                  <div key={id}>
                    <img src={imgUrl}></img>
                  </div>
                )
              }
            )}
          </Flex>
        </Center>
      </Container>
    )
  } else {
    return <Center>{/* <Heading>検索結果</Heading> */}</Center>
  }
}
