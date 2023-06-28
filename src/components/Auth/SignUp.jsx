import { Avatar, Box, Button, Flex, useColorModeValue, FormControl, FormErrorMessage, FormLabel, Heading, Input, InputGroup, InputRightElement, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RegisterUser } from '../../redux/actions/UserAction'
import { useDispatch } from 'react-redux'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const Register = () => {
    const [Email, SetEamil] = useState("")
    const [Name, SetName] = useState("")
    const [Password, SetPassword] = useState("")
    const [PreAvtar, setPreAvtar] = useState("")
    const [AvatarPP, SetAvatarPP] = useState("")

    const isError = Input === ''
 
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

    const [showPassword, setShowPassword] = useState(false);
    return (
        <>
            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('white', 'gray.800')}>
                <Stack w={['96','sm']} spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'} textAlign={'center'}>
                            Sign up
                        </Heading>
                        <Text fontSize={'lg'} color={'gray.600'}>
                            to enjoy all of our cool features ✌️
                        </Text>
                    </Stack>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}>
                        <Stack  spacing={4}>
                
                            <form onSubmit={registerHandler}>


                                <VStack>
                                    <Avatar size={'lg'} src={AvatarPP} />
                                </VStack>
                                <FormControl id="Full_name" isRequired>
                                    <FormLabel>Full Name</FormLabel>
                                    <Input type="text"  value={Name} onChange={e => SetName(e.target.value)} />
                                </FormControl>
                                <FormControl isInvalid={isError} id="email" isRequired>
                                    <FormLabel>Email address</FormLabel>
                                    <Input  type='email' value={Email} onChange={e => SetEamil(e.target.value)} />
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
                                <FormControl isRequired>  <FormLabel>Choose a Avtar</FormLabel>
                                    <Input  className='inputAvtar' accept='image/*' id='avtar' onChange={AvtarHandler} type='file' /></FormControl>
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
                            
                                    <Text >  Already a user? <Link to={"/login"}>   <Button color={'linkedin.300'} variant={'link'} >click</Button></Link>here</Text>

                                </Stack>
                            </form>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </>
    )
}
export default Register