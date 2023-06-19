import {
    Box,
    Button,
    Container,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Text,
    Textarea,
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
        <Container h={'95vh'} mt={'50'}  paddingY={'8'}>
            <Heading textAlign={'center'}>Request Course</Heading>

                <Box >
                    <form onSubmit={SumbitHandler}>
                        <FormControl w={'-moz-initial'} isInvalid={isError}>
                        <Stack spacing={'4'} justifyContent={'center '}  >

                            <FormLabel>Name</FormLabel>
                            <Input required placeholder='Jonh Dev' type='name' value={name} onChange={e => Setname(e.target.value)} />
                            <FormLabel>Email</FormLabel>
                            <Input required placeholder='exampl@gamil.com' type='email' value={email} onChange={e => SetEamil(e.target.value)} />
                            <FormLabel>Coures details</FormLabel>
                            <Textarea value={course} onChange={e => Setcourse(e.target.value)} placeholder='Enter text here...' name="comment" form="usrform"></Textarea>
                            <Button mt={'3'} isLoading={loading} color={'linkedin.300'} variant={'solid'} type='submit'> Request</Button>
                            <Text> Browser Courses <Link to={"/course"}>   <Button mt={'2'} color={'linkedin.300'} variant={'link'} onClick={LoginHandler}>click</Button></Link>here</Text>
                       </Stack>
                        </FormControl>
                    </form>
                </Box>
        </Container>
    )
}

export default RequestCourse