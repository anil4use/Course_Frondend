import { Box, Button, Container, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Input, Text, } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { login } from '../../redux/actions/UserAction'
const Login = () => {
    const [Email, SetEamil] = useState("")
    const [Password, SetPassword] = useState("")
    const isError = Input === ''

    const forgetHandler = (e) => {
        console.log("forget password")
    }
    const dispatch = useDispatch()
    const SumbitHandler = (e) => {
        e.preventDefault();
        dispatch(login(Email, Password));
    }
    return (
        <Container mt={'50'} h={'95vh'} paddingY={'16'}>
            <Heading textAlign={'center'}>Free Course RR LOGIN</Heading>

                <Box  p={4} >
                    <form onSubmit={SumbitHandler} >
                        <FormControl  isInvalid={isError}>
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
                            {/* <Link  to={"/forgetpassward"}>
                                    <Button disabled mt={'3'} variant={'link'} colorScheme='linkedin' onClick={forgetHandler}>forgot passward?</Button>
                                </Link> */}
                            <br></br>

                            <Button mt={'3'} color={'linkedin.300'} variant={'solid'} type='submit'>login Now</Button>

                            <Text m={'4'}> You don't have a accout <Link to={"/register"}>   <Button color={'linkedin.300'} variant={'link'} onClick={forgetHandler}>click</Button></Link>here</Text>

                        </FormControl>
                    </form>
                </Box>


        </Container>
    )
}

export default Login