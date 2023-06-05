
import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'

const PaymentSuccess = () => {
  return (
    <>
      <Container h={'90vh'}>
        <Heading mb={'2'} mt={'8'} textAlign={'center'}>You Have pro Pack</Heading>
        <VStack textAlign={'center'} m={'auto'} w={'2xs'} h={'80'} boxShadow={'base'} spacing={'0'} borderRadius={'lg'} alignItems={'center'}>
          <Box mt={'30'} >
            <Text mt={'-3'} bg={'linkedin.400'} justifyContent={'center'} textAlign={'center'}>PAYMENT SUCCUSS</Text>
            <Text h={'32'} m={'4'}> Congratuclation you have pro pack now injoy your jurney .. and a lot of thigs --:</Text>
            <Link to={"/profile"}> <Button color={'chakra-border-color._light'} variant={'ghost'} bg={'linkedin.50'}> Go To YOur Profile</Button></Link>
            <Text m={'4'}> Transaction Id-873458934hisdfd7</Text>
          </Box>
        </VStack>
      </Container>
    </>
  )
}

export default PaymentSuccess