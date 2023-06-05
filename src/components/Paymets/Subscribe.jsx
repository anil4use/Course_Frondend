import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
// import { Link } from 'react-router-dom'

const Subscribe = () => {
    return (
        <>
            <Container h={'90vh'}>
                <Heading mb={'8'} mt={'8'} textAlign={'center'}>Wellcome</Heading>
                <VStack m={'auto'} w={'2xs'} h={'80'} boxShadow={'base'} spacing={'0'} borderRadius={'lg'} alignItems={'center'}>
                    <Box mt={'30'} >
                        <Text bg={'linkedin.200'} textAlign={'center'}>Pay Pack --399</Text>
                        <Text h={'32'} m={'4'}> ar to Hotstar using React.js an ar to Hotstar using React.js and Chakra UI, you'll need to follow these steps:</Text>
                        <Text  fontWeight={'bold'} fontSize={'2xl'} textAlign={'center'}>Only --299 ₹</Text>
                        <Text mt={'4'} textAlign={'center'} bottom={'0.5'}><Button bg={'linkedin.200'} variant={'ghost'}>Pay Now</Button> </Text>
                        <Text color={'yellow.300'} fontSize={'14'} mt={'4'} textTransform={'uppercase'}> 100 % REFUND ofter Cancellation</Text>
                    </Box>
                </VStack>
            </Container>
        </>
    )
}

export default Subscribe