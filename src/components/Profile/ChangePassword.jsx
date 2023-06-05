import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Stack, } from '@chakra-ui/react'
import React, { useState } from 'react'

const ChangePassword = () => {
  
    const [OldPassword,SetOldPassword]=useState("") 
     const [NewPassword,SetNewPassword]=useState("")
  return (
    <>

    <Container p={'7'}  h={'95vh'}>
        <Heading textAlign={'center'}>Change Password</Heading>
        <Box> <form>

     
            <FormControl>
                <Stack spacing={'4'} justifyContent={'center '} h={'400'} >
                <FormLabel>Inter Your Old Password</FormLabel>
                <Input focusBorderColor='linkedin.400' value={OldPassword} onChange={e=>SetOldPassword(e.target.value)}></Input>
                <FormLabel>Inter Your New Password</FormLabel>
                <Input focusBorderColor='linkedin.400' value={NewPassword} onChange={e=>SetNewPassword(e.target.value)}></Input>
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