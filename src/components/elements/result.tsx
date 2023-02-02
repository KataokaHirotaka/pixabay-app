/* eslint-disable react/jsx-key */
import { Center, Container, Grid, GridItem, Heading } from '@chakra-ui/react'
import { Key } from 'react'
import { resultProps } from '~/src/types'

export const Result = ({ imgData }: resultProps) => {
  console.log(imgData, 'asfdjioasdfjio')

  if (imgData) {
    return (
      <Container>
        <Center>
          <Heading>検索結果</Heading>
        </Center>
        <Center>
          <Grid>
            {imgData.map(
              (item: {
                id: Key | null | undefined
                largeImgURL: string | undefined
              }) => {
                const id = item.id
                const imgUrl = item.largeImageURL
                return (
                  <GridItem>
                    <div key={id}>
                      <img src={imgUrl}></img>
                    </div>
                  </GridItem>
                )
              }
            )}
          </Grid>
        </Center>
      </Container>
    )
  } else {
    return <Center>{/* <Heading>検索結果</Heading> */}</Center>
  }
}
