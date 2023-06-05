import { Avatar, Box, Button, Container, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Register = () => {
    const [ Email, SetEamil ] = useState("")
    const [ Name, SetName ] = useState("")
    const [ Password, SetPassword ] = useState("")
    const [ PreAvtar, setPreAvtar ] = useState("")
    const isError = Input === ''
    const LoginHandler = () => {
        console.log("login")
    }
    const AvtarHandler = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreAvtar(reader.result);
        }
    }
    return (
        <Container h={'95vh'} maxW={'container.lg'} paddingY={'14'}>
            <Heading textAlign={'center'}>Free Course RR</Heading>
            <VStack justifyContent={'center'} spacing={'16'} h={'500'}>
                <Box >
                    <FormControl w={'-moz-min-content'} isInvalid={isError}>
                   
                        <VStack>
                            <Avatar size={'lg'}  src={PreAvtar} />
                        </VStack>

                        <FormLabel>Name</FormLabel>
                        <Input required placeholder='Jonh Dev' type='Name' value={Name} onChange={e => SetName(e.target.value)} />
                        <FormLabel>Email</FormLabel>
                        <Input required placeholder='exampl@gamil.com' type='email' value={Email} onChange={e => SetEamil(e.target.value)} />
                        {!isError ? (
                            <FormHelperText>
                                {/* Enter the email you'd like to receive the newsletter on. */}
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage>Email is required.</FormErrorMessage>
                        )}
                        <FormLabel>Password</FormLabel>
                        <Input required placeholder='Password' type='password' value={Password} onChange={e => SetPassword(e.target.value)} />
                        <FormLabel>Choose a Avtar</FormLabel>
                        <Input className='inputAvtar' accept='image/' onChange={AvtarHandler} type='file' required />
                        <Link to={"/register"}>
                            <Button mt={'3'} colorScheme='linkedin' onClick={LoginHandler}>Sign UP</Button>
                        </Link>
                        <Text> You have a accout <Link to={"/login"}>   <Button variant={'link'} colorScheme='linkedin' onClick={LoginHandler}>click</Button></Link>here</Text>
                    </FormControl>
                </Box>
            </VStack>
        </Container>
    )
}
export default Register