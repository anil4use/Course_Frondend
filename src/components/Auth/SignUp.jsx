import { Avatar, Box, Button, Container, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RegisterUser } from '../../redux/actions/UserAction'
import { useDispatch } from 'react-redux'
const Register = () => {
    const [Email, SetEamil] = useState("")
    const [Name, SetName] = useState("")
    const [Password, SetPassword] = useState("")
    const [PreAvtar, setPreAvtar] = useState("")
    const [AvatarPP, SetAvatarPP] = useState("")

    const isError = Input === ''
    const LoginHandler = () => {
        console.log("login")
    }
    const dispatch = useDispatch();
    const registerHandler = (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.append('name', Name);
        myForm.append('email', Email);
        myForm.append('password', Password);
        myForm.append('file', PreAvtar);
        dispatch(RegisterUser(myForm));
    };
    const AvtarHandler = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreAvtar(reader.result);
            setPreAvtar(file)
            SetAvatarPP(reader.result)
        }
    }
    return (
        <Container h={'95vh'} maxW={'container.lg'} paddingY={'14'}>
            <Heading textAlign={'center'}>Free Course RR</Heading>
            <VStack justifyContent={'center'} spacing={'20'} h={'500'}>
                <Box >
                    <form onSubmit={registerHandler}>
                        <FormControl w={'-moz-min-content'} isInvalid={isError}>
                            <VStack>
                                <Avatar size={'lg'} src={AvatarPP} />
                            </VStack>
                            <FormLabel>Name</FormLabel>
                            <Input required placeholder='Jonh Dev' type='text' value={Name} onChange={e => SetName(e.target.value)} />
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
                            <Input className='inputAvtar' accept='image/*' id='avtar' onChange={AvtarHandler} type='file' required />
                            <Button mt={'3'} color={'linkedin.300'} variant={'solid'} type='submit' >Sign UP</Button>
                            <Text> You have a accout <Link to={"/login"}>   <Button color={'linkedin.300'} variant={'link'} onClick={LoginHandler}>click</Button></Link>here</Text>
                        </FormControl>
                    </form>
                </Box>
            </VStack>
        </Container>
    )
}
export default Register