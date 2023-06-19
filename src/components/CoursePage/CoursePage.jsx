
// export default CoursePage;
import { Box, Button, Collapse, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCourseLacture } from '../../redux/actions/CourseAction';
import { useParams, Navigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Loader from '../Layout/Loader';

const CoursePage = ({ user }) => {
  const { lectures, loadingg, message, error } = useSelector(state => state.course);
  const [lectureNumber, setLectureNumber] = useState(0);
  const param = useParams();
  const dispatch = useDispatch();
  const [show, setShow] = React.useState(false)
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

  if (
    user.role !== 'admin' &&
    (user.subscription === undefined || user.subscription.status !== 'active')
  ) {
    return <Navigate to={'/subscribe'} />;
  }



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
                <Collapse startingHeight={20} in={show}>
                  {lectures[lectureNumber]?.descripaton}
                </Collapse>
                <Button size='sm' onClick={handleToggle} mt='1rem'>
                  Show {show ? 'Less' : 'More'}
                </Button>
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
