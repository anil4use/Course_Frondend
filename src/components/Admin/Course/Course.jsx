import React from 'react'
import AdminSlliderbar from '../Deshbord/AdminSliderbar'
import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr
} from '@chakra-ui/react'
import { RiDeleteBinFill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCourse } from '../../../redux/actions/CourseAction'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { DeleteCourseAdmin } from '../../../redux/actions/UserAction'
import { Link } from 'react-router-dom'
const Courses = () => {
  const { courses, error, message } = useSelector(state => state.course);
  const dispatch = useDispatch();
  const DeleteCourse = (id) => {
    dispatch(DeleteCourseAdmin(id));
  }
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'cleareError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessagge' });
    }
    dispatch(getAllCourse());
  }, [error, message, dispatch]);
  console.log(courses.length > 0)
  return (
    <>
      <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
        <Box p={['0', '8']} overflowX={'auto'}>
          <Heading textAlign={'center'}>All Courses </Heading>
          <TableContainer w={['100vw', 'full']}>
            <Table size={'lg'} variant={'simple'}>
              <TableCaption>All Availabele users in Database</TableCaption>
              <Thead>
                <Tr>
                  <Th>id</Th>
                  <Th>NO.</Th>
                  <Th>Poster</Th>
                  <Th>Title</Th>
                  <Th>Category</Th>
                  <Th>Creater Name</Th>
                  <Th isNumeric>Views</Th>
                  <Th isNumeric>Lectures</Th>
                  <Th isNumeric>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {
                  courses.length > 0 ? (courses && courses.map((item, i) => (
                    <Row
                      DeleteCourse={DeleteCourse}
                      key={item._id}
                      item={item}
                      i={i}
                    />)
                  )) : (<Tr>
                    <Td colSpan={8}>No courses available.</Td>
                  </Tr>)
                }
              </Tbody>
            </Table>
          </TableContainer>

        </Box>
        <AdminSlliderbar></AdminSlliderbar>
      </Grid>
    </>
  )
}
export default Courses;
function Row({ item, i, DeleteCourse, loading }) {
  return (
    <Tr>
      <Td>{i + 1}</Td>
      <Td>#{item._id}</Td>
      <Td><Image src={item.poster.url} /></Td>
      <Td>{item.title}</Td>
      <Td textTransform={'uppercase'}>{item.category}</Td>
      <Td>{item.createBY}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.NumberofVideos}</Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Link to={`/admin/course/${item._id}`}>  <Button variant={'outline'} isLoading={loading} color={'linkedin.300'}>View Lecture</Button></Link>
          <Button variant={'outline'} isLoading={loading} onClick={() => DeleteCourse(item._id)} color={'linkedin.500'}><RiDeleteBinFill /></Button>
        </HStack>
      </Td>
    </Tr>
  )
}