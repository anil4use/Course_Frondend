// import { Button, Container, Grid, GridItem, HStack, Heading, Image, Input, Stack, Text, VStack } from '@chakra-ui/react';
// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { getAllCourse } from '../../redux/actions/CourseAction';
// import { toast } from 'react-hot-toast';
// import python from '../../assets/imges/python.jpg'


// const Course = () => {
//   const dispatch = useDispatch();
//   const [keyword, setKeyword] = useState("");
//   const [category, setCategory] = useState("");
//   // const course = useSelector(state => state.course); // Assuming your Redux store has a 'courses' slice
//   // const { course, message, error } = useSelector(state => state.course)
//   // useEffect(() => {
//   //   if (error) {
//   //     toast.error(error)
//   //     dispatch({ type: 'cleareError' })
//   //   }
//   //   if (message) {
//   //     toast.success(message)
//   //     dispatch({ type: 'clearMessagge' })
//   //   }
//   // }, 
  
//   // [dispatch, error, message])
//   // useEffect(() => {
//   //   dispatch(getAllCourse(keyword, category));
//   // }, [dispatch, keyword, category]);

//   const categories = [
//     "web development", "data science", "c & c++ full course", "python basic", "java tutorial", "web development", "python advanced"
//   ];

//   const addToPlayListHandler = (id) => {
//     console.log("playlist added successfully", id);
//   };

//   const CourseCard = ({ title, createdBy, desc, views, lectures, id, imgSrc }) => {
//     return (
//       <GridItem>
//         <VStack boxShadow="dark-lg" bgColor="blackAlpha.100" className="Course" objectFit="contain" alignItems={["center", "flex-start"]}>
//           <Image src={imgSrc} objectFit="contain" boxSize={60} />
//           <Heading textAlign={["center", "left"]} maxW="220px" fontSize="2xl" noOfLines={2}>{title}</Heading>
//           <Text textAlign={["center", "left"]} maxW="220px" fontSize="lg" noOfLines={3}>{desc}</Text>
//           <Text textTransform="uppercase" textAlign={["center", "left"]} maxW="200px" colorScheme="body">{`Created by - ${createdBy}`}</Text>
//           <Text fontWeight="thin" textAlign="center">{`Views - ${views}`}</Text>
//           <Text textAlign="center">{`Lectures - ${lectures}`}</Text>
//           <Stack direction={["column", "row"]} alignItems="center">
//             <Link to={`/course/${id}`}><Button colorScheme="linkedin" onClick={() => console.log("clicked")}>Watch now</Button></Link>
//             <Button colorScheme="linkedin" variant="ghost" onClick={() => addToPlayListHandler(id)}>Add to Playlist</Button>
//           </Stack>
//         </VStack>
//       </GridItem>
//     );
//   };

//   return (
//     <Container maxH="95vh" maxW="container.lg" paddingY={8}>
//       <Heading textAlign="center">All courses</Heading>
//       <Input type="text" value={keyword} onChange={e => setKeyword(e.target.value)} m={1} placeholder="Search Courses" size="lg" />
//       <HStack value={category} className="category_hide" mt={4} justifyContent="center" overflow="auto" textAlign="start">
//         {categories.map((cat, i) => (
//           <Button key={i} onClick={() => setCategory(cat)} minW={60}>
//             <Text>{cat}</Text>
//           </Button>
//         ))}
//       </HStack>
//       <Grid mt={4} templateColumns={["repeat(1,1fr)", "repeat(3,1fr)"]} gap={6}>
//         { CourseCard.map(course => (
//           <CourseCard
//             key={'sdfksd'}
//             title={'asdf'}
//             views={2}
//             createdBy={"course"}
//             desc={"direction"}
//             id={2134}
//             imgSrc={python}
//             lectures={3}
            // key={course.id}
            // title={course.title}
            // views={course.views}
            // createdBy={course.createBY}
            // desc={course.direction}
            // id={course._id}
            // imgSrc={course.poster.url}
            // lectures={course.NumberofVideos}
//           />
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default Course;