import { Box, Grid, Heading, Image, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import in_video from '../../assets/video/intro-video.mp4'
const CoursePage = () => {
    const [LectureNumber, SetLectureNumber] = useState(0)
    const imgsrc="https://img.freepik.com/free-photo/happy-excited-tourist-shooting-landmarks_1262-18852.jpg?size=626&ext=jpg&ga=GA1.1.865132089.1684644259&semt=location_fest_v1"
    const Lacture = [{
        _id: "skldfhsdjf",
        title: "this is amaing couser 1",
        video: "https://www.youtube.com/watch?v=nTKZ9WNZHoE&list=PLt5mNkGuWcuXc26LBe_5mBfVoN-12q_ns&index=12",
        description: "i keno tihs is amazing cousse and is sdfjksd funny to leafnd",

    },
    {
        _id: "skldfhsdjf",
        title: "this is amaing couser 2",
        video: "https://www.youtube.com/watch?v=nTKZ9WNZHoE&list=PLt5mNkGuWcuXc26LBe_5mBfVoN-12q_ns&index=12",
        description: "i keno tihs is amazing cousse and is sdfjksd funny to leafnd",

    }, {
        _id: "skldfhsdjf",
        title: "this is amaing couser 3  ",
        video: "https://www.youtube.com/watch?v=nTKZ9WNZHoE&list=PLt5mNkGuWcuXc26LBe_5mBfVoN-12q_ns&index=12",
        description: "i keno tihs is amazing cousse and is sdfjksd funny to leafnd",

    }, {
        _id: "skldfhsdjf",
        title: "this is amaing couser 4",
        video: "https://www.youtube.com/watch?v=nTKZ9WNZHoE&list=PLt5mNkGuWcuXc26LBe_5mBfVoN-12q_ns&index=12",
        description: "i keno tihs is amazing cousse and is sdfjksd funny to leafnd",

    },
    ]
    return (
        <>

            <Heading m={'4'} textAlign={'center'}>Wellcome </Heading>

            <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>

                <Box m={'4'}>
                    <video width={"100%"}

                        controls controlsList='nodownload  noremoteplayback'
                        disablePictureInPicture
                        disableRemotePlayback
                        src={in_video} />
                    <Heading fontSize={'25'}> {`#${LectureNumber + 1} ${Lacture[LectureNumber].title} $`}</Heading>
                    <Heading >Description</Heading>
                    <Text>${Lacture[0].description}</Text>

                </Box>

                <VStack>
                    {Lacture.map((e, index) =>
                        <Box style={{cursor:"pointer"}}  onClick={() => { SetLectureNumber(index) }}>
                            {/* <video width={"100%"}
                                src={in_video}
                                controls
                                controlsList='nodownload  noremoteplayback'
                                type="video/mp4"
                            // disablePictureInPicture
                            // disableRemotePlayback
                            /> */}
                            <Image src={imgsrc}>

                            </Image>
                            <Text fontSize={'20'}>#{index + 1}  {e.title}</Text>
                        </Box>
                    )}

                </VStack>
            </Grid>

        </>
    )
}

export default CoursePage