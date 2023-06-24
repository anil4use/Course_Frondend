
// export default CoursePage;
import { Avatar, Box, Button, Collapse, Grid, HStack, Heading, Text, Textarea, VStack } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCourseLacture } from '../../redux/actions/CourseAction';
import { useParams, Navigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Loader from '../Layout/Loader';
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
              <Box m={'4'}>
                <video
                  width={'100%'}
                  controls
                  controlsList="nodownload noremoteplayback"
                  disablePictureInPicture
                  disableRemotePlayback
                  src={lectures[lectureNumber]?.video?.url}
                />
                <Heading fontSize={'22'}>
                  #{lectureNumber + 1} {lectures[lectureNumber]?.title}
                </Heading>
                <Heading fontSize={'24'}>Description ---</Heading>
                <Button size='sm' onClick={handleToggle} mt='1rem'>
                  Show {show ? 'Less' : 'More'}
                </Button>
                <Collapse startingHeight={20} in={show}>
                  {lectures[lectureNumber]?.descripaton}
                  <Box mt={'4'} borderRadius={'2xl'} border={'2px solid gray'}>
                  </Box>

                  <Box maxW="full" mx="auto" p={4}>
                    <form onSubmit={handleSubmit}>
                      <VStack spacing={4} align="start">
                        <Textarea

                          value={addcommet}
                          onChange={(e) => setaddcommet(e.target.value)}
                          placeholder="Enter a value"
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

                  {
                    lectures && lectures[lectureNumber]?.comments.map((e) => (
                      <Box bg={'blackAlpha.100'} borderRadius={'2xl'} h={'20'} m={'4'} alignItems={'center'} textAlign={'center'} gap={'20'} justifyContent={'flex-start'} display={'flex'}>
                        <HStack ml={'3'}>
                          <Avatar />
                          <Text>{e.username}</Text>
                        </HStack>
                        <Text> {e.text}</Text>
                        <Text position={'static'}>{e.timestamp.slice(0,24)}</Text>
                      </Box>
                    ))


                  }

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
            <Loader />
          )}
          <>
          </>
        </Grid>
      </>
    )
  );
};

export default CoursePage;
