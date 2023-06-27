
// export default CoursePage;
import {
  Avatar,
  Box,
  Button,
  Collapse,
  FormLabel,
  Grid,
  HStack,
  Heading,
  Text,
  Textarea,
  VStack
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCourseLacture } from '../../redux/actions/CourseAction';
import { useParams, Navigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Loader from '../Layout/Loader';
import "../Home/home.css"
import { AddCommetsAction, getCommetsAction } from '../../redux/actions/UserAction';

const CoursePage = ({ user }) => {
  const { lectures, loadingg, message, error } = useSelector(state => state.course);
  // const { } = useSelector(state => state.user);
  const [lectureNumber, setLectureNumber] = useState(0);
  const param = useParams();
  const dispatch = useDispatch();
  const [show, setShow] = React.useState(false)
  const [addcommet, setaddcommet] = useState()
  const handleToggle = () => setShow(!show)
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'cleareError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessagge' });
    }
  }, [dispatch, error, message]);

  useEffect(() => {
    dispatch(getCourseLacture(param.id));
  }, [dispatch, param.id]);
  useEffect(() => {
    dispatch(getCommetsAction())
  }, [dispatch]);
  // console.log(comments)
  if (
    user.role !== 'admin' &&
    (user.subscription === undefined || user.subscription.status !== 'active')
  ) {
    return <Navigate to={'/subscribe'} />;
  }
  const lectureId = lectures[lectureNumber]?._id
  // const courseId = param.id
  const userid = user._id;
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(AddCommetsAction(addcommet, userid, lectureId, param.id))
  };

  // console.log(courseId,"cour")
  return (
    loadingg ? (
      <Loader />
    ) : (
      <>
        <Heading m={'4'} textAlign={'center'}>Welcome</Heading>
        <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
          {lectures && lectures.length > 0 ? (
            <>
              <Box m={'4'} >
                <Box m={'4'} borderRadius={'md'} border={'1px solid gray'}>
                  <video
                    width={'100%'}
                    controls
                    controlsList="nodownload noremoteplayback"
                    disablePictureInPicture
                    disableRemotePlayback
                    src={lectures[lectureNumber]?.video?.url}
                  />
                </Box>
                <VStack></VStack>
                <Box p={'4'}>
                  <Heading  fontSize={'18'}>
                    #{lectureNumber + 1} {lectures[lectureNumber]?.title}
                    lkjsfoidhn kljdsoifj sdkfjsdfj jjjjj lksjfdksdjf kljhfljsdkljf lkjdfs
                  </Heading>
                  <Heading mt={'4'} fontSize={'22'}>Description ---</Heading>
                  <Button size='sm' onClick={handleToggle} mt='1rem'>
                    Show {show ? 'Less' : 'More'}
                  </Button>
                  <Collapse startingHeight={20} in={show}>
                    {lectures[lectureNumber]?.descripaton}
                    <Box mt={'4'} borderRadius={'2xl'} border={'2px solid gray'}>
                    </Box>
                  </Collapse>

                </Box>
                <Box maxW="full" mx="auto" p={4}>
                  <form onSubmit={handleSubmit}>
                    <VStack spacing={4} align="start">
                      <FormLabel>Add comment</FormLabel>
                      <Textarea
                        mt={'4'}
                        onChange={(e) => setaddcommet(e.target.value)}
                        placeholder="Enter your comment"
                        minLength={'4'}
                        maxLength={'80'}
                        required
                      />
                      <Button type="submit">Submit</Button>
                    </VStack>
                  </form>
                </Box>
                {
                  console.log(lectures[lectureNumber]?.comments.map((e) => (
                    e.text
                  )))
                }
                <Collapse startingHeight={20} in={show}>
                  <Box >
                    {
                      lectures && lectures[lectureNumber]?.comments.map((e, i) => (

                        <Box borderRadius={'2xl'} h={'max-content'} m={'4'} alignItems={'center'} textAlign={'center'} gap={'10'} justifyContent={'flex-start'}>
                          <HStack textAlign={'center'} ml={'3'}>
                            <Avatar border={'2px solid gray'} mt={'4'} src={e.useravatar} />
                            <Text fontWeight={'bold'} fontSize={'14'}>{e.username}</Text>
                            <Text  >{e.timestamp.toLocaleString()}</Text>
                          </HStack>
                          <Text display={'flex'} m={'4'} fontSize={'14'} fontStyle={'inherit'}> {e.text}</Text>
                          <Box mt={'4'} borderRadius={'2xl'} border={'0.1px solid black'}>
                          </Box>
                        </Box>)
                      )
                    }
                  </Box>
                </Collapse>

              </Box>

              <VStack >
                {lectures.map((lecture, index) => (
                  <Box borderRadius={'md'} border={'medium'}
                    key={index}
                    style={{ cursor: 'pointer' }}
                    onClick={() => setLectureNumber(index)}
                  >
                    <Box borderRadius={'md'} border={'1px solid gray'}
                    >
                      <video
                        width={320}
                        height={100}
                        src={lecture?.video?.url}
                        controlsList='nodownload nofullscreen noremoteplayback'
                        disablePictureInPicture
                        disableRemotePlayback
                      />
                    </Box>
                    <Text m={'3'} fontSize={'15'}>
                      #{index + 1} {lecture.title.slice(0, 30)}

                    </Text>
                  </Box>
                ))}
              </VStack >
              <br />
            </>
          ) : (
            <Heading mt={'5'}  textAlign={['center','left']} children={'No lecture found'} />
          )}
          <>
          </>
        </Grid>
      </>
    )
  );
};

export default CoursePage;
