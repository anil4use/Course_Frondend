
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
    useColorModeValue
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  LoadUser, UpdateUser } from '../../redux/actions/UserAction'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast';

const UpdateProfile = () => {
    const { error, message, user } = useSelector(state => state.user)
    const [name, Setname] = useState(user.name)
    const [email, Setemail] = useState(user.email)
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const registerHandler = (e) => {
        e.preventDefault();
        dispatch(UpdateUser(name, email));
        dispatch(LoadUser())
        navigate('/profile')
    };
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
        const isError = Input === ''

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
                            Update Profile
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
                            <form onSubmit={registerHandler}>
                                <FormControl id="Full_name" isRequired>
                                    <FormLabel>Full Name</FormLabel>
                                    <Input type="text" value={name} onChange={e => Setname(e.target.value)} />
                                </FormControl>
                                <FormControl isInvalid={isError} id="email" isRequired>
                                    <FormLabel>Email address</FormLabel>
                                    <Input type='email' value={email}  onChange={e => Setemail(e.target.value)}/>
                                    {!isError ? (
                                        <></>
                                    ) : (
                                        <FormErrorMessage>Email is required.</FormErrorMessage>
                                    )}
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
                                         Save Changes
                                    </Button>
                                </Stack>                       
                            </form>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </>
    )
}
export default UpdateProfile