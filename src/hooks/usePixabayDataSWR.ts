import useSWR from 'swr'
import { fetcher } from '../libs/fetcher'

export const usePixabayDataSWR = (url: string) => {
  const { data, error } = useSWR(url, fetcher)

  return {
    data: data,
    isLoading: !data && !error,
    isError: error,
  }
}
