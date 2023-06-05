import { Button, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>

  <VStack h={'96vh'} maxH={'container.xl'}>
    <Text textAlign={'center'} fontSize={'200'}>404</Text>
    <Heading mt={'3'} textAlign={'center'} fontSize={'100'}>Page not Found</Heading>
    <Text>  back to home <Link to={"/"}>   <Button variant={'link'} colorScheme='linkedin' >click</Button></Link>here</Text>

  </VStack>
    </>
  )
}

export default NotFound