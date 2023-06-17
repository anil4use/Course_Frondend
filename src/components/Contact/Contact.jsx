import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Text, Textarea, VStack } from '@chakra-ui/react'
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
        <Container h={'95vh'} maxW={'container.lg'} paddingY={'8'}>
            <Heading textAlign={'center'}>Contact Us</Heading>
            <VStack justifyContent={'center'} spacing={'16'} h={'400'}>
                <Box >
                    <form onSubmit={SumbitHandler}>
                        <FormControl w={'sm'} isInvalid={isError}>
                            <FormLabel>name</FormLabel>
                            <Input required placeholder='Jonh Dev' type='name' value={name} onChange={e => Setname(e.target.value)} />
                            <FormLabel>email</FormLabel>
                            <Input required placeholder='exampl@gamil.com' type='email' value={email} onChange={e => SetEamil(e.target.value)} />
                            <Textarea value={desc} onChange={e => Setdesc(e.target.value)} placeholder='Enter text here...' name="comment" form="usrform"></Textarea>
                            <Button mt={'3'} isLoading={loading} colorScheme='linkedin' type='submit'> Contact Us</Button>
                            <Text> Request a new course <Link to={"/requestcourse"}>   <Button variant={'link'} colorScheme='linkedin'>click</Button></Link>here</Text>
                        </FormControl>
                    </form>
                </Box>
            </VStack>
        </Container>
    )
}
export default Contact