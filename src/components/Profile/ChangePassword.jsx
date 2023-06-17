import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Stack, } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { UpdatePassword } from '../../redux/actions/UserAction'
import { useNavigate } from "react-router-dom";
const ChangePassword = () => {
  const [oldPassword, SetoldPassword] = useState("")
  const [newPassword, SetnewPassword] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const sumbitHandler = (e) => {
    e.preventDefault();
    dispatch(UpdatePassword(oldPassword, newPassword));
    navigate("/profile")
  };
  return (
    <>
      <Container p={'7'} h={'95vh'}>
        <Heading textAlign={'center'}>Change Password</Heading>
        <Box>
          <form onSubmit={sumbitHandler}>
       <FormControl>
              <Stack spacing={'4'} justifyContent={'center '} h={'400'} >
                <FormLabel>Inter Your Old Password</FormLabel>
                <Input focusBorderColor='linkedin.400' value={oldPassword} onChange={e => SetoldPassword(e.target.value)} />
                <FormLabel>Inter Your New Password</FormLabel>
                <Input focusBorderColor='linkedin.400' value={newPassword} onChange={e => SetnewPassword(e.target.value)} />
                <Button type='submit' variant={'solid'} colorScheme='linkedin'>Save Changes</Button>
              </Stack>

            </FormControl>
          </form>
        </Box>

      </Container>
    </>
  )
}

export default ChangePassword