import {
    Box,
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Stack,
    Text,
    Textarea,
    useColorModeValue
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RequestCourses } from '../../redux/actions/CourseAction'
import { toast } from 'react-hot-toast'
const RequestCourse = () => {
    const [email, SetEamil] = useState("")
    const [name, Setname] = useState("")
    const [course, Setcourse] = useState('')
    const isError = Input === ''
    const LoginHandler = () => {
        console.log("login")
    }
    const dispatch = useDispatch()
    const { message, error, loading } = useSelector(state => state.course)
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
        dispatch(RequestCourses(name, email, course));
    }
    return (
        <>
        <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('white', 'gray.800')}>
                <Stack w={['96','sm']} spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack w={'sm'} align={'center'}>
                        <Heading fontSize={'4xl'} textAlign={'center'}>
                            Request New Course
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
                                    <Textarea value={course} onChange={e => Setcourse(e.target.value)} name="comment" form="usrform"></Textarea>
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
                                <Text> Browser Courses <Link to={"/course"}>   <Button mt={'2'} color={'linkedin.300'} variant={'link'} onClick={LoginHandler}>click</Button></Link>here</Text>
                                </Stack>
                            </form>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </>
    )
}

export default RequestCourse