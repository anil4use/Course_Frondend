
import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Stack, } from '@chakra-ui/react'
import React, { useState } from 'react'

const UpdateProfile = () => {
  
    const [Name,SetName]=useState("") 
     const [Email,SetEmail]=useState("")
  return (
    <>

    <Container p={'7'}  h={'95vh'}>
        <Heading textAlign={'center'}>Update Profile</Heading>
        <Box> <form>

     
            <FormControl>
                <Stack spacing={'4'} justifyContent={'center '} h={'400'} >
                <FormLabel>Inter Your Name</FormLabel>
                <Input focusBorderColor='linkedin.400' value={Name} onChange={e=>SetName(e.target.value)}></Input>
                <FormLabel>Inter Your Eamil</FormLabel>
                <Input focusBorderColor='linkedin.400' value={Email} onChange={e=>SetEmail(e.target.value)}></Input>
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