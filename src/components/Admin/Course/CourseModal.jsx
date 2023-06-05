import { Box, Button, Grid, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { RiDeleteBinFill } from 'react-icons/ri'

const CourseModal = ({ isOpen,
    onClose,
    id,
    deleteLectureHandler,
    CourseTitle,
    AddLectureHandler,
    lecture = [23,2,3,4,3,44,4,5] }) => {
    // const CourseTitle = "react"

    const [title, Settitle] = useState('')
    const [desc, Setdesc] = useState('')
    const [video, Setvideo] = useState('')
    // const [prevideo, Setprevideo] = useState('')

    const AvtarHandler = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            Setvideo(reader.result);
        }
    }
const closehander=()=>{
    Settitle("")
    Setdesc("")
    Setvideo("")
    onClose()
}
    return (
        <Modal scrollBehavior='outside' size={'full'} isOpen={isOpen} onClose={closehander}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{CourseTitle}</ModalHeader>
                <ModalCloseButton />
                <ModalBody p={'16'}>
                    <Grid templateColumns={['1fr', '3fr 1fr']}>
                        <Box p={['0', '16']}>
                            <Box my={'5'}>
                                <Heading>{CourseTitle}</Heading>
                                <Heading size={'sm'} opacity={'0.4'}>{`#${id}`}</Heading>
                            </Box>
                            <Heading size={'lg'}>Lectures</Heading>
                          {lecture.map((e,i)=>(
                              <VideoCard
                              key={i}
                              title="REact into"
                              desc='this a ract coures'
                              num={i+1}
                              lectureId={"sdfkjsd"}
                              CourseId={id}
                              deleteLectureHandler={deleteLectureHandler} />
                          ))}
                        </Box>
                        <Box>
                            <form onSubmit={e => AddLectureHandler(e, id, title, desc, video)} action="">
                                <VStack spacing={'4'}>
                                    <Heading textTransform={'uppercase'} size={'md'}>Add lecture</Heading>
                                    <Input required placeholder='Title' type='Name' value={title} onChange={e => Settitle(e.target.value)} />
                                    <Input required placeholder='Description' type='Name' value={desc} onChange={e => Setdesc(e.target.value)} />
                                    <Input isRequired className='inputAvtar' accept='video/mp4' onChange={AvtarHandler} type='file' required />
                                    <Button type='submit' variant={'outline'} colorScheme='linkedin' w={'full'}>Upload</Button>
                                </VStack>
                            </form>
                        </Box>
                    </Grid>
                    <ModalFooter>
                    <Button colorScheme='linkedin' onClick={closehander}>Close</Button>
                </ModalFooter>
                </ModalBody>
             
            </ModalContent>
        </Modal>

    )
}

export default CourseModal
function VideoCard({ title, desc, num, lectureId, CourseId, deleteLectureHandler }) {
    return <Stack p={['4', '8']} justifyContent={['flex-start', 'space-between']} direction={['column', 'row']} my={'8'} boxShadow={'0 0 10px rgba(107,10,8,0.6)'}>
        <Box>
            <Heading>{`#${num} ${title}`}</Heading>
            <Text>{desc}</Text>
        </Box>
        <Button color={'linkedin.600'} onClick={() => deleteLectureHandler(lectureId, CourseId)}><RiDeleteBinFill /></Button>
    </Stack>
}