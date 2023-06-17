// import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getCourseLacture } from '../../redux/actions/CourseAction';
// import { useParams, Navigate } from 'react-router-dom';
// import { toast } from 'react-hot-toast';
// import Loader from '../Layout/Loader';

// const CourseContent = ({ selectedLecture }) => {
//     return (
//         <Box>
//             <video
//                 key={selectedLecture.id}
//                 width={'100%'}
//                 controls
//                 controlsList="nodownload noremoteplayback"
//                 disablePictureInPicture
//                 disableRemotePlayback
//                 src={selectedLecture?.video?.url}
//             />
//             <Heading fontSize={'25'}>
//                 #{selectedLecture?.id} {selectedLecture?.title}
//             </Heading>
//             <Heading>Description</Heading>
//             <Text>{selectedLecture?.description}</Text>
//         </Box>
//     );
// };

// const CoursePage = ({ user }) => {
//     const { lectures, loadingg, message, error } = useSelector(state => state.course);
//     const [selectedLecture, setSelectedLecture] = useState(null);
//     const param = useParams();
//     const dispatch = useDispatch();

//     useEffect(() => {
//         if (error) {
//             toast.error(error);
//             dispatch({ type: 'cleareError' });
//         }
//         if (message) {
//             toast.success(message);
//             dispatch({ type: 'clearMessagge' });
//         }
//     }, [dispatch, error, message]);

//     useEffect(() => {
//         dispatch(getCourseLacture(param.id));
//     }, [dispatch, param.id]);

//     if (
//         user.role !== 'admin' &&
//         (user.subscription === undefined || user.subscription.status !== 'active')
//     ) {
//         return <Navigate to={'/subscribe'} />;
//     }

//     const handleLectureClick = (lecture) => {
//         setSelectedLecture(lecture);
//     };

//     return (
//         loadingg ? (
//             <Loader />
//         ) : (
//             <>
//                 <Heading m={'4'} textAlign={'center'}>Welcome</Heading>

//                 <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
//                     <Box m={'4'}>
//                         {selectedLecture && <CourseContent selectedLecture={selectedLecture} />}
//                     </Box>
//                     <VStack align="start" spacing={4} p={4}>
//                         {lectures.map((lecture) => (
// <Box
//     key={lecture.id}
//     style={{ cursor: 'pointer' }}
//     onClick={() => handleLectureClick(lecture)}
//     border={selectedLecture?.id === lecture.id ? 'ActiveBorder' : ''}
// >
//     <hr />
//     <VStack>
// <video
//     width={220}
//     height={120}
//     src={lecture?.video?.url}
// />
//         <Text fontSize={'20'}>
//             #{lecture.id} {lecture.title}
//         </Text>
//     </VStack>
// </Box>
//                         ))}
//                     </VStack>
//                 </Grid>
//             </>
//         )
//     );
// };

// export default CoursePage;
import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
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
                                <Heading fontSize={'25'}>
                                    #{lectureNumber + 1} {lectures[lectureNumber]?.title}
                                </Heading>
                                <Heading>Description</Heading>
                                <Text>{lectures[lectureNumber]?.descripaton}</Text>
                            </Box>

                            <VStack>
                                {lectures.map((lecture, index) => (
                                    <Box
                                        key={index}
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => setLectureNumber(index)}
                                    ><video
                                            width={220}
                                            height={120}
                                            src={lecture?.video?.url}
                                        />
                                        <Text fontSize={'20'}>
                                            #{index + 1} {lecture.title}
                                        </Text>
                                    </Box>
                                ))}
                            </VStack>
                        </>
                    ) : (
                        <Loader />
                    )}
                </Grid>
            </>
        )
    );
};

export default CoursePage;

