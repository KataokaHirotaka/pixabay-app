/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  ButtonGroup,
  Center,
} from '@chakra-ui/react'
import { formProps } from '~/src/types'

export const Form = ({ setUrl }: formProps) => {
  const [value, setValue] = useState('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const api_key = process.env.NEXT_PUBLIC_API_KEY
    const url = `https://pixabay.com/api/?key=${api_key}?q=${value}`
    setUrl(url)
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel>画像を検索</FormLabel>
        <Center>
          <Input
            type="text"
            placeholder="画像"
            maxW="800px"
            value={value}
            onChange={handleChange}
          />
          <Button colorScheme="blue" type="submit">
            検索
          </Button>
        </Center>
        <Center>
          <FormHelperText maxW="800px">
            検索したい画像を入力してください
          </FormHelperText>
        </Center>
      </FormControl>
    </form>
  )
}
