import { Spinner, VStack } from '@chakra-ui/react'
import React from 'react'
const Loader = () => {
  return (
    <VStack justifyContent={'center'} h={'100vh'}>
        <Spinner size={'xl'} color='blue' emptyColor='transparent' thickness='2px' speed='0.8s'></Spinner>
    </VStack>   
  )
}

export default Loader