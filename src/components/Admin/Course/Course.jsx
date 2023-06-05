
import React from 'react'

// import img from './../../assets/imges/python.jpg'
import AdminSlliderbar from '../Deshbord/AdminSliderbar'
import { Box, Button, Grid, HStack, Heading, Image, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import { RiDeleteBinFill } from 'react-icons/ri'
import CourseModal from './CourseModal'
const Courses = () => {
  const Course = [{
    _id: "asdfksdlfjsafsdfsladfk",
    poster: {
      url: "https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg?size=626&ext=jpg&ga=GA1.2.865132089.1684644259"
    },
    title: "new coues",
    category: "computer",
    creator: "aniltheboss",
    views: 40,
    lecture: 49
  }
  ]
  const CourseDatelsHandlar = (userid) => {
    // console.log(userid)
    onOpen()
  }
  const DeleteUsers = (userid) => {
    console.log(userid)
  }
  const deleteLectureHandler = (courseId, lectureId) => {
    console.log(lectureId, courseId)
  }

  const AddLectureHandler = (e, courseId, tittle, desc, video ) => {
    // console.log(courseId)
    e.preventDefault()
  }
  const { isOpen, onClose, onOpen } = useDisclosure()
  return (
    <>

      <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
        <Box p={['0', '8']} overflowX={'auto'}>
          <Heading textAlign={'center'}>All Users</Heading>
          <TableContainer w={['100vw', 'full']}>
            <Table size={'lg'} variant={'simple'}>
              <TableCaption>All Availabele users in Database</TableCaption>
              <Thead>
                <Tr>
                  <Th>id</Th>
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
                  Course.map((item) => (
                    <Row CourseDatelsHandlar={CourseDatelsHandlar} DeleteUsers={DeleteUsers} key={item._id} item={item} />
                  ))
                }
              </Tbody>
            </Table>
          </TableContainer>
          <CourseModal deleteLectureHandler={deleteLectureHandler}
            AddLectureHandler={AddLectureHandler}
            id={Course[0]._id}
            isOpen={isOpen}
            onClose={onClose}
            CourseTitle={"react"} />
        </Box>
        <AdminSlliderbar></AdminSlliderbar>
      </Grid>
    </>
  )
}

export default Courses;
function Row({ item, CourseDatelsHandlar, DeleteUsers }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td><Image src={item.poster.url} /></Td>
      <Td>{item.title}</Td>
      <Td textTransform={'uppercase'}>{item.category}</Td>
      <Td>{item.creator}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.lecture}</Td>
      {/* <Td>{item.Subscription.status === 'active' ? 'Active' : 'Nor Active'}</Td> */}
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button variant={'outline'} onClick={() => CourseDatelsHandlar(item._id)} color={'linkedin.300'}>View Lecture</Button>
          <Button variant={'outline'} onClick={() => DeleteUsers(item._id)} color={'linkedin.500'}><RiDeleteBinFill /></Button>
        </HStack>
      </Td>
    </Tr>
  )
}