import React from 'react'
import { Box, Button, HStack, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import "./home.css"
import { CgGoogle, CgYoutube, SiCoursera, SiUdemy, DiAws } from 'react-icons/all'
import { Link } from 'react-router-dom'
import vg from '../../assets/imges/img-removebg.png'
import videoONe from '../../assets/video/one.mp4'
import Home2 from './home2'
const Home = () => {
  return (
    <section className='home'>
      <div className='container'>
        <Stack direction={['column', 'row']} spacing={["20", "30"]}
          height="100%"
          justifyContent={["center", "space-between"]}
          alignItems={"center"}>
          <VStack width={'full'} alignItems={["center", "flex-end"]}>
            <Text fontSize={["2xl", "5xl"]}>LEARN FORM experts</Text>
            <Text mt={["8", '0']} children="find the reabile contect there" />
            <Link to="/course">
              <Button mt={"16"} bottom={["20pxs"]} size={'lg'} colorScheme='linkedin'>
                Exprole Courses
              </Button>
            </Link>
          </VStack>
          <Image className='img_in_front' boxSize={"md"} src={vg} objectFit={'contain'}>
          </Image>
        </Stack>
      </div>
      <Box textAlign={'center'} bg={'blackAlpha.800'} padding={'4'} alignItems={'center'} w='100%' p={4} color='linkedin.400'>
        <Heading>Our Brands</Heading>
        <HStack marginTop={'4'} className='brand_banner' justifyContent={'space-evenly'}>
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdemy />
          <DiAws />
        </HStack>
      </Box>
      <div  className="container2">
        <video
          autoPlay
          muted
          loop
          controls controlsList='nodownload nofullscreen noremoteplayback'
          disablePictureInPicture
          disableRemotePlayback
          src={videoONe} />
      </div>
      <Home2 />
    </section>
  )
}

export default Home