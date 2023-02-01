/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  ButtonGroup,
  Center
} from '@chakra-ui/react'

export const Form = () => {
  return (
    <FormControl>
      <FormLabel>画像を検索</FormLabel>
      <Center>
        <Input type="text" placeholder='画像' maxW="800px"/>
        <Button colorScheme='blue'>検索</Button>
      </Center>
      
    </FormControl>
  )
}
