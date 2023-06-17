import { Button, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
const PaymentFailed = () => {
  return (
    <>
  <VStack h={'96vh'} maxH={'container.xl'}>
    <Text textAlign={'center'} fontSize={'100'}>400</Text>
    <Heading mt={'3'} textAlign={'center'} fontSize={'50'}>Payment Failed !</Heading>
    <Text>  Back to Subscribe <Link to={"/subscribe"}>   <Button variant={'link'} colorScheme='linkedin' >click</Button></Link>here</Text>

  </VStack>
    </>
  )
}

export default PaymentFailed