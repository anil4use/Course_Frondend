import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SubscribeBuy } from '../../redux/actions/SubscriptionAction';
import axios from 'axios';
import { server } from '../../redux/Store';
import { toast } from 'react-hot-toast';
import logo from '../../assets/imges/logo.png';


const Subscribe = ({ user }) => {
    const { subscriptionId, error, loading, message } = useSelector(state => state.payment);
    const { error: courseerror, message: coursemesssage } = useSelector(state => state.course);

    const [key, Setkey] = useState('');
    const dispatch = useDispatch();

    const submitHandler = async () => {
        const { data: { key } } = await axios.get(`${server}/razorkey`);
        Setkey(key);
        dispatch(SubscribeBuy());
    };

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: 'cleareError' });
        }
        if (courseerror) {
            toast.error(courseerror);
            dispatch({ type: 'cleareError' });
        }
        if (coursemesssage) {
            toast.error(coursemesssage);
            dispatch({ type: 'cleareError' });
        }
        if (message) {
            toast.success(message);
            dispatch({ type: 'clearMessagge' });
        }
        if (subscriptionId) {
            const openPopup = () => {
                const options = {
                    key,
                    name: 'course Anil',
                    description: 'get all premium courses',
                    image: logo,
                    subscription_id: subscriptionId,
                    callback_url: `${server}/paymentverification`,
                    prefill: {
                        name: user.name,
                        email: user.email,
                        contact: '',
                    },
                    notes: {
                        address: 'anil the boss',
                    },
                    theme: {
                        color: 'blue',
                    },
                };
                const razorpay = new window.Razorpay(options);
                razorpay.open();
            };
            openPopup();
        }
    }, [dispatch, coursemesssage, courseerror, error, message, user?.name, user?.email, key, subscriptionId]);
    // console.log(user.name,user.email)

    // console.log(logo);
    return (
        <>
            <Container h={'90vh'}>
                <Heading mb={'8'} mt={'8'} textAlign={'center'}>
                    Welcome
                </Heading>
                <VStack m={'auto'} w={'2xs'} h={'80'} boxShadow={'base'} spacing={'0'} borderRadius={'lg'} alignItems={'center'}>
                    <Box mt={'30'}>
                        <Text bg={'linkedin.200'} textAlign={'center'}>
                            Pay Pack --299
                        </Text>
                        <Text h={'32'} fontSize={'20'} m={'4'}>
                            Learn from Experts . One time Subscription & life time Access.

                        </Text>
                        <Text fontWeight={'bold'} fontSize={'2xl'} textAlign={'center'}>
                            Only --299 ₹
                        </Text>
                        <Text mt={'4'} textAlign={'center'} bottom={'0.5'}>
                            <Button isLoading={loading} onClick={submitHandler} bg={'linkedin.200'} variant={'ghost'}>
                                Pay Now
                            </Button>{' '}
                        </Text>
                        {/* <Link to={'/paymentfailed'}>cenrer</Link> */}
                        <Text color={'yellow.300'} fontSize={'14'} mt={'4'} textTransform={'uppercase'}>
                            100% REFUND after Cancellation
                        </Text>
                        <Text color={'darkgray'} fontSize={'14'}>
                            *Terms & Conditions apply
                        </Text>
                    </Box>
                </VStack>
            </Container>
        </>
    );
};

export default Subscribe;
