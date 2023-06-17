
import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Stack, } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoadUser, UpdateUser } from '../../redux/actions/UserAction'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast';
const UpdateProfile = () => {
    const { error,message, user } = useSelector(state => state.user)

    const [name, Setname] = useState(user.name)
    const [email, Setemail] = useState(user.email)
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const registerHandler = (e) => {
        e.preventDefault();
        dispatch(UpdateUser(name, email));
        // console.log(name,email)
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
    return (
        <>
            <Container p={'7'} h={'95vh'}>
                <Heading textAlign={'center'}>Update Profile</Heading>
                <Box> <form onSubmit={registerHandler}>
                    <FormControl>
                        <Stack spacing={'4'} justifyContent={'center '} h={'400'} >
                            <FormLabel>Inter Your name</FormLabel>
                            <Input required focusBorderColor='linkedin.400' value={name} onChange={e => Setname(e.target.value)} />
                            <FormLabel>Inter Your Eamil</FormLabel>
                            <Input focusBorderColor='linkedin.400' value={email} onChange={e => Setemail(e.target.value)} />
                            <Button type='submit' variant={'solid'} colorScheme='linkedin'>Save Changes</Button>
                        </Stack>
                    </FormControl>
                </form>
                </Box>
            </Container>
        </>
    )
}

export default UpdateProfile