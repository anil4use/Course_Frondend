import { Box, Button, Container, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { login } from '../../redux/actions/UserAction'

const Login = () => {
    const [Email, SetEamil] = useState("")
    const [Password, SetPassword] = useState("")
    const isError = Input === ''

    const LoginHandler = (e) => {
        e.preventDefault();
        dispatch(login(Email, Password))
    }
    const dispatch = useDispatch()
    const SumbitHandler = (e) => {
        e.preventDefault();
        dispatch(login(Email, Password))
    }

    return (
        <Container h={'95vh'} maxW={'container.lg'} paddingY={'8'}>
            <Heading textAlign={'center'}>Free Course RR LOGIN</Heading>

            <VStack justifyContent={'centr'} spacing={'16'} h={'400'}>
                <Box p={4} >
                    <form onSubmit={SumbitHandler} >
                        <FormControl w={'-moz-min-content'} isInvalid={isError}>
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
                            <Input required placeholder='password' id='s' type='password' value={Password} onChange={e => SetPassword(e.target.value)} />
                            <Link to={"/forgetpassward"}>
                                <Button mt={'3'} variant={'link'} colorScheme='linkedin' onClick={LoginHandler}>forgot passward?</Button>
                            </Link>
                            <br></br>

                            <Button mt={'3'} colorScheme='linkedin' type='submit'>login Now</Button>

                            <Text> You don't have a accout <Link to={"/register"}>   <Button variant={'link'} colorScheme='linkedin' onClick={LoginHandler}>click</Button></Link>here</Text>

                        </FormControl>
                    </form>
                </Box>
            </VStack>


        </Container>
    )
}

export default Login