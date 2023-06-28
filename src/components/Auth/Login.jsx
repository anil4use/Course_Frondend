import {
    Box,
    Button,
    Flex,
    FormControl,
    useColorModeValue,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Stack,
    Text,
    InputGroup,
    InputRightElement,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { login } from '../../redux/actions/UserAction'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
const Login = () => {
    const [Email, SetEamil] = useState("")
    const [Password, SetPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false);

    const isError = Input === ''
    const dispatch = useDispatch()
    const SumbitHandler = (e) => {
        e.preventDefault();
        dispatch(login(Email, Password));
    }

    return (
        <>

            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('white', 'gray.800')}>
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                        <Text fontSize={'lg'} color={'gray.600'}>
                            to enjoy all of our cool features ✌️
                        </Text>
                    </Stack>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}>
                        <Stack w={'sm'} spacing={4}>
                            <form onSubmit={SumbitHandler}>
                                <FormControl isInvalid={isError} id="email" isRequired>
                                    <FormLabel>Email address</FormLabel>
                                    <Input type='email' value={Email} onChange={e => SetEamil(e.target.value)} />
                                    {!isError ? (
                                        <></>
                                    ) : (
                                        <FormErrorMessage>Email is required.</FormErrorMessage>
                                    )}
                                </FormControl>
                                <FormControl id="password" isRequired>
                                    <FormLabel>Password</FormLabel>
                                    <InputGroup>
                                        <Input type={showPassword ? 'text' : 'password'} value={Password} onChange={e => SetPassword(e.target.value)} />
                                        <InputRightElement h={'full'}>
                                            <Button
                                                variant={'ghost'}
                                                onClick={() =>
                                                    setShowPassword((showPassword) => !showPassword)
                                                }>
                                                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                </FormControl>
                                <Stack mt={'3'} spacing={10} pt={2}>
                                    <Button
                                        loadingText="Submitting"
                                        size="lg"
                                        color={'linkedin.300'} variant={'solid'}
                                        _hover={{
                                            bg: 'gray.200',
                                        }}
                                        type={'submit'}>
                                        Sign up
                                    </Button>
                                </Stack>
                                <Stack pt={6}>
                                    <Text > You don't have a accout <Link to={"/register"}>   <Button color={'linkedin.300'} variant={'link'} >click</Button></Link>here</Text>
                                </Stack>
                            </form>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </>
    )
}

export default Login