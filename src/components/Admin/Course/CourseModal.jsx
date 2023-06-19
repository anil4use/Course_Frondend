import {
    Box,
    Button,
    Grid,
    HStack,
    Heading,
    Input,
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    VStack
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import { RiDeleteBinFill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux';
import { DeleteLectureAdmin, getCourseLacture } from '../../../redux/actions/CourseAction';
import { useParams } from 'react-router-dom';
import { AddLectureAdmin } from '../../../redux/actions/AdminAction';
const CourseModal = () => {
    const { loading, error, message } = useSelector(state => state.admin);
    const { loading: loadingg, error: errore, lectures, message: messagee } = useSelector(state => state.course);
    const param = useParams();
    const dispatch = useDispatch();
    const CourseID = param.id
    const [title, Settitle] = useState('')
    const [desc, Setdesc] = useState('')
    const [video, Setvideo] = useState('')
    const AvtarHandler = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            Setvideo(reader.result);
            Setvideo(file);
        }
    }
    useEffect(() => {
    }, [dispatch, param.id]);
    const AddLectureHandler = (e, CourseID) => {
        console.log(CourseID)
        e.preventDefault()
        const myForm = new FormData();
        myForm.append('title', title);
        myForm.append('descripaton', desc);
        myForm.append('file', video);
        dispatch(AddLectureAdmin(CourseID, myForm));
    }
    const deleteLectureHandler = (CourseID, LecureID) => {
        dispatch(DeleteLectureAdmin(CourseID, LecureID))
        dispatch(getCourseLacture(param.id));
    }
    useEffect(() => {
        if (error) {
            toast.error(error)
            dispatch({ type: 'cleareError' })
        }
        if (message) {
            toast.success(message)
            dispatch({ type: 'clearMessagge' })
        }
        dispatch(getCourseLacture(param.id));

    }, [dispatch, error, message, param]);
    useEffect(() => {
        if (errore) {
            toast.error(errore)
            dispatch({ type: 'cleareError' })
        }
        if (messagee) {
            toast.success(messagee)
            dispatch({ type: 'clearMessagge' })
        }
        dispatch(getCourseLacture(param.id));

    }, [dispatch, errore, messagee, param]);
    return (
        <>
            <Grid minH={'100vh'} maxW={'100%'} templateColumns={['1fr', '5fr 1fr']}>
                <Box minW={'60'} p={['0', '8']} overflowX={'auto'}>
                    <Heading textAlign={'center'}>All Lectures </Heading>
                    <Text m={'4'} textAlign={'center'}>Course ID --- #{CourseID} </Text>
                    <TableContainer w={['100vw', 'full']}>
                        <Table size={'lg'} variant={'simple'}>
                            <TableCaption>All Availabele users in Database</TableCaption>
                            <Thead>
                                <Tr>
                                    <Th>NO.</Th>
                                    <Th>LecureID</Th>
                                    <Th>Title</Th>
                                    <Th>DESS</Th>
                                    <Th isNumeric>Action</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {lectures.length > 0 ? (
                                    lectures.map((e, i) => (
                                        <VideoCard
                                            key={i}
                                            i={i}
                                            loading={loadingg}
                                            CourseID={CourseID}
                                            e={e}
                                            deleteLectureHandler={deleteLectureHandler}
                                        />
                                    ))
                                ) : (
                                    <Text>NO lectures found</Text>
                                )}

                            </Tbody>
                        </Table>
                    </TableContainer>
                </Box>
                <Box mt={'4'} p={["10", '50']}>
                    <form onSubmit={e => AddLectureHandler(e, CourseID)} action="">
                        <VStack w={'80'} spacing={'4'}>
                            <Heading textTransform={'uppercase'} size={'md'}>Add lecture</Heading>
                            <Input required placeholder='Title' type='Name' value={title} onChange={e => Settitle(e.target.value)} />
                            <Input required placeholder='Description' type='Name' value={desc} onChange={e => Setdesc(e.target.value)} />
                            <Input isRequired className='inputAvtar' accept='video/mp4' onChange={AvtarHandler} type='file' required />
                            <Button isLoading={loading} type='submit' variant={'outline'} colorScheme='linkedin' w={'full'}>Upload</Button>
                        </VStack>
                    </form>
                </Box>
            </Grid>
        </>
    )
}
export default CourseModal
function VideoCard({ e, CourseID, i, deleteLectureHandler, loadingg }) {
    return (
        <Tr>
            <Td>{i + 1}</Td>
            <Td>#{e._id}</Td>
            <Td>{e.title}</Td>
            <Td>{e.descripaton.slice(0,70)}....</Td>
            <Td isNumeric>
                <HStack justifyContent={'flex-end'}>
                    <Button variant={'outline'} isLoading={loadingg} onClick={() => deleteLectureHandler(CourseID, e._id)} color={'linkedin.500'}>Delete Lecture <RiDeleteBinFill /></Button>
                </HStack>
            </Td>
        </Tr>
    )
}