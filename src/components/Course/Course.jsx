import {

  Button,
  Card,
  CardBody,
  CardFooter,
  Container,
  Divider,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCourse } from '../../redux/actions/CourseAction';
import { toast } from 'react-hot-toast';
import "../Home/home.css"

const Course = () => {
  const { error, message, courses, loading } = useSelector(state => state.course);

  const Courese = ({ title, loading, CreatedBY, desc, views, lectures, id, imgSrc }) => {
    return (
      <GridItem  className='Course' m={'auto'} ml={['5','0']} mt={'4'}>
        <Card  maxW='72'>
          <CardBody>
            <Image
              h={'10rem'} src={imgSrc}
              alt='Course Poster'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>{title}</Heading>
              <Text >{desc.slice(0, 70)}..</Text>
              <Text>Creater Name - {CreatedBY}</Text>
              <HStack>
                <Text>Total Lectures --</Text>
                <Text>{lectures}</Text>
              </HStack>
              <HStack>
                <Text>Total views --</Text>
                <Text fontSize={'2xl'}>{views}</Text>
              </HStack>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            {/* <Button isLoading={loading} onClick={() => addToPlayListHandler(id)} variant={'outline'} colorScheme='linkedin' mr={'2'}>
                Add To Play list
              </Button> */}
            <Link to={`/course/${id}`}>
              <Button isLoading={loading} color={'linkedin.300'} variant={'solid'}>
                Watch Now
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </GridItem>
    );
  };

  const [keyword, setKeyword] = useState('');
  const [category, Setcategory] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'cleareError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessagge' });
    }
  }, [error, message, dispatch]);

  const categories = [
    // 'web dovlopment',
    'Data Structure',
    'C & C++ full course',
    'Python basic',
    'Java Advance',
    'Web Development',
    'Machine Learning',
  ];

  // const addToPlayListHandler = CourseID => {
  //   dispatch(AddToPlayList(CourseID));
  // };

  useEffect(() => {
    dispatch(getAllCourse(category, keyword));
  }, [category, keyword, dispatch]);



  return (
    <>
      <Container maxh={'95vh'} maxW={'container.lg'} paddingY={'8'}>
        <Heading m={'4'} textAlign={'center'}>
          All courses
        </Heading>
        <Input  type='text' value={keyword} onChange={e => setKeyword(e.target.value)} m={'1'} placeholder='Search Courses' size={'lg'} />
        <HStack ml={'3'} value={category} className='category_hide' mt={'4'} justifyContent={['center']} overflow={'auto'} textAlign={['start']}>
          {categories.map((cat, i) => (
            <Button key={i} onClick={() => Setcategory(cat)} minW={'60'}>
              <Text>{cat}</Text>
            </Button>
          ))}
        </HStack>
        <Grid justifyContent={["", 'flex-start']} alignItems={['', 'flex-start']} mt={'4'} templateColumns={['repeat(1,1fr)', 'repeat(3,1fr)']} gap={4}>
          {courses && courses.length > 0 ? (
            courses.map(e => (
              <Courese
                key={e._id}
                title={e.title}
                views={e.views}
                desc={e.descripaton}
                id={e._id}
                imgSrc={e.poster.url}
                lectures={e.NumberofVideos}
                CreatedBY={e.createBY}
                loading={loading}
              //   addToPlayListHandler={addToPlayListHandler}
              />
            ))
          ) : (
            <Heading mt={'20'} minH={'60vh'}>
              Course Not Found
            </Heading>
          )}
        </Grid>





      </Container>
    </>
  );
};

export default Course;
