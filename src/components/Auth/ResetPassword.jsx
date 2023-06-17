import { Box, Button, Container, FormControl, FormLabel, HStack, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { ResetPassword } from '../../redux/actions/UserAction';
import { useParams } from 'react-router-dom'
const ResetePassword = () => {
    const [password, Setpassword] = useState("")

   const params = useParams()
    const dispatch = useDispatch();
    const sumbitHandler = (e) => {
        e.preventDefault();
        dispatch(ResetPassword(params.token, password));
        // console.log(name,email)
    };
    return (
        <Container h={'95vh'} maxW={'container.lg'} paddingY={'8'}>
            <Heading textAlign={'center'}>Free Course RR</Heading>

            <VStack justifyContent={'center'} spacing={'16'} h={'400'}>
                <Box>
                    <form onSubmit={sumbitHandler}>
                        <FormControl textAlign={'center'}>
                            <FormLabel textAlign={'left'}>New Passwaord</FormLabel>
                            <Input width={'sm'} value={password} required placeholder=' New Password' type='password' onChange={e => Setpassword(e.target.value)} />
                            <HStack alignItems={'center'} justifyContent={'space-evenly'}>

                                <Button mt={'3'} colorScheme='linkedin' type='sumbit'>Send Reset Link </Button>

                            </HStack>
                        </FormControl>
                    </form>
                </Box>
            </VStack>
        </Container>
    )
}

export default ResetePassword