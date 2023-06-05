import { Box, Button, Container, FormControl, FormLabel, Heading, Input,Text, Textarea, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

import { Link } from 'react-router-dom'

const RequestCourse = () => {
    const [Email, SetEamil] = useState("")
    const [Name, SetName] = useState("")
    // const [Title,SetTitle]=useState('')
    const [Desc, SetDesc] = useState('')
    const isError = Input === ''

    const LoginHandler = () => {
        console.log("login")
    }

    return (
        <Container h={'95vh'} maxW={'container.lg'} paddingY={'8'}>
            <Heading textAlign={'center'}>Request Course</Heading>

            <VStack justifyContent={'center'} spacing={'16'} h={'400'}>
                <Box >
                    <FormControl w={'-moz-min-content'} isInvalid={isError}>
                        <FormLabel>Name</FormLabel>
                        <Input required placeholder='Jonh Dev' type='Name' value={Name} onChange={e => SetName(e.target.value)} />


                        <FormLabel>Email</FormLabel>


                        <Input required placeholder='exampl@gamil.com' type='email' value={Email} onChange={e => SetEamil(e.target.value)} />
                        <FormLabel>Coures details</FormLabel>


                        {/* <Input w={'sm'}  h={'20'} required placeholder='Title' type='' value={Title} onChange={e => SetTitle(e.target.value)} /> */}

                        <Textarea value={Desc} onChange={e => SetDesc(e.target.value)} placeholder='Enter text here...' name="comment" form="usrform"></Textarea>
                        <Link to={"/login"}>
                            <Button mt={'3'} colorScheme='linkedin' onClick={LoginHandler}> Request</Button>
                        </Link>
                        <Text> Browser Courses <Link to={"/course"}>   <Button variant={'link'} colorScheme='linkedin' onClick={LoginHandler}>click</Button></Link>here</Text>
                    </FormControl>
                </Box>
            </VStack>


        </Container>
    )
}

export default RequestCourse