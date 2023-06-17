import React from 'react'
import { Box, Button, Container, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import "./home.css"
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
            <Text mt={['30','']} textAlign={['center','']} fontSize={['6xl', "5xl"]}>LEARN FORM EXPERTS </Text>
            <Text mt={["8", '0']} children="find the reabile contect there" />
            <Link to="/course">
              <Button mt={"16"} bottom={["20pxs"]} size={'lg'} color={'linkedin.300'} variant={'solid'}>
                Exprole Courses
              </Button>
            </Link>
          </VStack>

          <Image  className='img_in_front' boxSize={['full',"md"]} src={vg} objectFit={'contain'}>
          </Image>
        </Stack>
      </div>
      <Box as="header" bg={'blackAlpha.800'} py={8} color="white">

      <Container maxW="container.xl">
        <Heading as="h1" size="xl" mb={4}>
          Free Course RR
        </Heading>
        <Text fontSize="lg">
          - Join thousands of students worldwide who have already benefited from this course.
          - Receive lifetime access to course updates and new content additions.

          Enroll now and take your skills to the next level!
        </Text>

      </Container>
      </Box>
      <div className="container2">
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