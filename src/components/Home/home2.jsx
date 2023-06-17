import { Box, Container, Heading, Text, Grid, GridItem, Image, HStack } from "@chakra-ui/react";
import { CgGoogle, CgYoutube, SiCoursera, SiUdemy, DiAws } from 'react-icons/all'

import React from "react";
import image3 from '../../assets/imges/imge3.jpg'
import in_video from '../../assets/video/intro-video.mp4'

const Home2 = () => {
    return (
        <Box>
            <Box >
                {/* Hero section */}
                  
                   
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
            </Box>

            <Box as="section" py={8}>
                {/* Course content */}
                <Container maxW="container.xl">
                    <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
                        <GridItem>
                            {/* Course videos */}

                            <Box>
                                {/* Video 1 */}
                                <Box mb={4}>
                                    <Heading></Heading>
                                </Box>

                                {/* Video 2 */}
                                <Box mb={4}>
                                    <video
                                        //   autoPlay
                                        controls controlsList='nodownload nofullscreen noremoteplayback'
                                        disablePictureInPicture
                                        disableRemotePlayback
                                        src={in_video} />
                                </Box>

                                {/* Add more videos as needed */}
                            </Box>

                            <Box p={'5'} mt={8}>

                                <Text fontSize="lg">
                                    <Heading> Course Duration: 8 weeks Free Coures RR</Heading>

                                    In this course, you will:
                                    - Explore advanced techniques and strategies in ALIMITED.
                                    - Dive deep into industry best practices and real-world case studies.
                                    - Develop a strong foundation in ALIMITED concepts and methodologies.
                                    - Learn how to effectively use ALIMITED tools and software.


                                    Who should enroll:
                                    - Professionals looking to upskill and advance their careers in ALIMITED.
                                    - Students pursuing a degree in ALIMITED or related fields.
                                    - Individuals interested in starting a career in ALIMITED.
                                    - Anyone passionate about learning and exploring new technologies.

                                    By the end of this course, you will have the knowledge and skills to tackle complex ALIMITED challenges and make a meaningful impact in your professional journey. Join us now and unlock your potential in the exciting world of ALIMITED!

                                </Text>
                            </Box>


                        </GridItem>

                        <GridItem>
                            {/* Course photos */}

                            <Box p={'6'} >
                                <Heading as="h2" size="lg" mb={4}>
                                    Additional Information
                                </Heading>
                                <Text fontSize="lg">
                                    This comprehensive course is designed to provide you with a solid foundation in the subject matter. Whether you're a beginner or an experienced professional, this course will take you through a step-by-step learning journey to enhance your skills and knowledge.

                                    Course Highlights:
                                    - Learn from industry experts with years of experience in the field.
                                    - Gain practical hands-on experience through real-world projects and exercises.
                                    - Access to a rich library of resources, including downloadable materials and code examples.
                                    - Receive a certificate of completion to showcase your achievement.
                                    - Dedicated support from the instructor and a vibrant community of fellow learners.


                                </Text>
                            </Box>
                            <Box>

                                {/* Photo 2 */}
                                <Image src={image3} alt="Course Photo 2" mb={4} />

                                {/* Add more photos as needed */}
                            </Box>
                        </GridItem>
                    </Grid>

                    {/* Additional information */}
                    <Box mt={8}>
                        <Heading as="h2" size="lg" mb={4}>
                            Do YOU NO this
                        </Heading>
                        <Text p={'4'} fontSize="lg">
                            - Acquire in-demand skills that are highly valued in the industry.
                            - Boost your career prospects with a comprehensive understanding of ANIL.
                            - Gain practical experience through hands-on projects and real-world applications.
                            - Join a supportive community of like-minded learners and industry professionals.

                            Enroll now and unlock your potential for success!
                        </Text>

                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default Home2;
