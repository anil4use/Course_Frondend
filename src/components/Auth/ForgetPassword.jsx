import { Box, Button, Container, FormControl, FormLabel, HStack, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { forgetPassward } from '../../redux/actions/UserAction'
const ForgetPassward = () => {
    const [email, SetEamil] = useState("")
    const dispatch = useDispatch();
    const sumbithandler = (e) => {
        e.preventDefault();
        dispatch(forgetPassward(email));
        console.log(email);
    };
    return (
        <Container h={'95vh'} maxW={'container.lg'} paddingY={'8'}>
            <Heading textAlign={'center'}>Free Course RR</Heading>
            <VStack justifyContent={'center'} spacing={'16'} h={'400'}>
                <Box>
                    <form onSubmit={sumbithandler}>
                        <FormControl w={'sm'} textAlign={'center'}>
                            <FormLabel textAlign={'left'}>email</FormLabel>
                            <Input width={'sm'} required placeholder='exampl@gamil.com' type='email' value={email} onChange={e => SetEamil(e.target.value)} />
                            <HStack alignItems={'center'} justifyContent={'space-evenly'}>
                                <Button mt={'3'} color={'linkedin.300'} variant={'solid'} type='submit' >Send Reset Link </Button>
                            </HStack>
                        </FormControl>
                    </form>
                </Box>
            </VStack>
        </Container>
    )
}
export default ForgetPassward