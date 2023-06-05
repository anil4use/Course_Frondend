import { Box, Button, HStack, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { CgInstagram, CgYoutube, AiFillGithub, FaLinkedinIn, GrTwitter, AiOutlineWhatsApp } from 'react-icons/all'
import { Link } from 'react-router-dom'
import '../Home/home.css'

const Footer = () => {
    return (
        <>
            <Box variant="outline"
                color="white" bg={'blackAlpha.800'} w='100%' p={4} textAlign={'center'} justifyContent={'center'} >
                
                <Stack direction={['column', 'row']} justifyContent={'space-between'}>
                    <HStack alignItems={'center'}>
                    <Link to={"/"}> <Button className='footer_icon' colorScheme='pink' variant={'outline'}> <CgInstagram /> </Button>  </Link>
                    <Link to={"/"}> <Button className='footer_icon' colorScheme='whatsapp' variant={'outline'}> <AiOutlineWhatsApp /> </Button>  </Link>
                    <Link to={"/"}> <Button className='footer_icon' colorScheme='twitter' variant={'outline'}> <GrTwitter /> </Button>  </Link>
                    <Link to={"/"}> <Button className='footer_icon' colorScheme='red' variant={'outline'}> <CgYoutube /> </Button>  </Link>
                    <Link to={"/"}> <Button className='footer_icon' colorScheme='pink' variant={'outline'}> <AiFillGithub /> </Button>  </Link>
                    <Link to={"/"}> <Button className='footer_icon' colorScheme='linkedin' variant={'outline'}> <FaLinkedinIn /> </Button>  </Link>
                    </HStack>
                    <HStack>
                    <Text mb={'1'} as={'h4'} children="© Copyright 2023 by Refsnes Data. All Rights Reserved." />
                    </HStack>
                <HStack spacing={"4"}>
                    <Link to={"/about"}>
                    <Text>About me</Text>
                    </Link>
                    <Link to={"/contact"}>
                    <Text>Contact us</Text>
                    </Link>
                    <Link  to={"/Course"}>
                    <Text>Course</Text>
                    </Link>
                </HStack>
                </Stack>

            </Box>
        </>
    )
}

export default Footer