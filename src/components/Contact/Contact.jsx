import {
    Box,
    Button,
    FormControl,
    useColorModeValue,
    FormLabel,
    Heading,
    Input,
    Stack,
    Text,
    Textarea,
    Flex,
    FormErrorMessage
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'
import { ContactWithUs } from '../../redux/actions/UserAction'

const Contact = () => {
    const [email, SetEamil] = useState("")
    const [name, Setname] = useState("")
    const [desc, Setdesc] = useState('')
    const isError = Input === ''
    const dispatch = useDispatch()
    const { message, error, loading } = useSelector(state => state.user)

    useEffect(() => {
        if (error) {
            toast.error(error)
            dispatch({ type: 'cleareError' })
        }
        if (message) {
            toast.success(message)
            dispatch({ type: 'clearMessagge' })
        }
    },
        [dispatch, error, message]);
    const SumbitHandler = (e) => {
        e.preventDefault();
        dispatch(ContactWithUs(name, email, desc));
    }
    return (
        <>
            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('white', 'gray.800')}>
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack w={'sm'} align={'center'}>
                        <Heading fontSize={'4xl'} textAlign={'center'}>
                            Contact us
                        </Heading>
                        <Text fontSize={'lg'} color={'gray.600'}>
                            {/* to enjoy all of our cool features ✌️ */}
                        </Text>
                    </Stack>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}>
                        <Stack spacing={4}>
                            <form onSubmit={SumbitHandler}>
                                <FormControl id="Full_name" isRequired>
                                    <FormLabel>Full Name</FormLabel>
                                    <Input type="text" value={name} onChange={e => Setname(e.target.value)} />
                                </FormControl>
                                <FormControl isInvalid={isError} id="email" isRequired>
                                    <FormLabel>Email address</FormLabel>
                                    <Input type='email' value={email} onChange={e => SetEamil(e.target.value)} />
                                    {!isError ? (
                                        <></>
                                    ) : (
                                        <FormErrorMessage>Email is required.</FormErrorMessage>
                                    )}
                                </FormControl>
                                <FormControl id="textEiya" isRequired>
                                    <FormLabel>Enter Your Message</FormLabel>
                                    <Textarea value={desc} onChange={e => Setdesc(e.target.value)} name="comment" form="usrform"></Textarea>
                                </FormControl>
                                <Stack mt={'3'} spacing={10} pt={2}>
                                    <Button
                                        loadingText="Submitting"
                                        size="lg"
                                        color={'linkedin.300'} variant={'solid'}
                                        _hover={{
                                            bg: 'gray.200',
                                        }}
                                        isLoading={loading}
                                        type={'submit'}>
                                        Contact Us
                                    </Button>
                                </Stack>
                                <Stack pt={6}>
                                    <Text > Request a new course <Link to={"/requestcourse"}>   <Button color={'linkedin.300'} variant={'link'} >click</Button></Link>here</Text>
                                </Stack>
                            </form>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </>
    )
}
export default Contact