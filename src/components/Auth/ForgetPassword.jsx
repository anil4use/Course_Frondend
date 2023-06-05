import { Box, Button, Container, FormControl, FormLabel, HStack, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ForgetPassward = () => {
    const [ Email, SetEamil ] = useState("")
   
    const LoginHandler = () => {
        console.log("login")
    }

    return (
        <Container h={'95vh'} maxW={'container.lg'} paddingY={'8'}>
            <Heading textAlign={'center'}>Free Course RR</Heading>

            <VStack justifyContent={'center'} spacing={'16'} h={'400'}>
               <Box>
                    <FormControl w={'-moz-fit-content'} textAlign={'center'}>
                        <FormLabel textAlign={'left'}>Email</FormLabel>
                        <Input   width={'sm'} required placeholder='exampl@gamil.com' type='email' value={Email} onChange={e => SetEamil(e.target.value)} />
                     
                      
                        <HStack alignItems={'center'} justifyContent={'space-evenly'}>
                            <Link to={"/forgetpassward"}>
                                <Button mt={'3'} colorScheme='linkedin' onClick={LoginHandler}>Send Reset Link </Button>
                            </Link>
                           
                        </HStack>

                    </FormControl>
                    </Box>
            </VStack>


        </Container>
    )
}

export default ForgetPassward