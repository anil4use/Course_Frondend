
import { Box, Button, Container, Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import img from '../../assets/imges/succuss.png'
import { Link, useLocation } from 'react-router-dom'
// import { Link } from 'react-router-dom'

const PaymentSuccess = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const reference = searchParams.get('payment_id');
console.log(reference)
  return (
    <>
      <Container h={'90vh'}>
        <Heading mb={'2'} mt={'8'} textAlign={'center'}>You Have pro Pack</Heading>
        <VStack  textAlign={'center'} m={'auto'} w={'2xs'} h={'80'} boxShadow={'base'} spacing={'0'} borderRadius={'lg'} alignItems={'center'}>
          <Box mt={'30'} >
            <Text mt={'-3'} bg={'linkedin.400'} justifyContent={'center'} textAlign={'center'}>PAYMENT SUCCUSS</Text>
            <Text h={'20'} m={'4'}> Congratuclation you have pro pack now injoy your jurney .. and a lot of thigs --:</Text>
            <Image  m={'auto'} boxSize={'14'} src={img} alt="" />
            <Link to={"/course"}> <Button mt={'2'} color={'chakra-border-color._light'} variant={'ghost'} bg={'linkedin.50'}> Browser Course</Button></Link>
            <Text m={'2'}> Reference id #{reference}</Text>
          </Box>
        </VStack>
      </Container>
    </>
  )
}

export default PaymentSuccess