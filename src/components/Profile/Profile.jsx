import {
  Avatar,
  Button,
  Container,
  FormControl,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  VStack,
  useDisclosure
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,

} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { LoadUser, RemoveFromWatchList, UpdateProfilePhoto } from '../../redux/actions/UserAction'
import { CancelSubscription } from '../../redux/actions/SubscriptionAction'
import { toast } from 'react-hot-toast'
const Profile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user)

  const { message, error, loading } = useSelector(state => state.payment)
  // const { message, error, loading } = useSelector(state => state.payment)

  const { isOpen, onOpen, onClose } = useDisclosure()
  // if (!user.avatar ) {
  //   return <h1>h</h1>; 
  // }

  const RemovePlaylistHandler = (id) => {
    dispatch(RemoveFromWatchList(id))
    dispatch(LoadUser())
    // console.log(id)
  }

  const CencerHandler = () => {
    dispatch(CancelSubscription())
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

  },
    [dispatch, error, message]);
  const changeImgeSumbit = (e, image) => {
    e.preventDefault()
    console.log(image)
  }
  if (!user.avatar) {
    return (<Avatar />)
  };
  return (
    <>
      <Container minH={'95vh'} maxW={'container.md'}>
        <Heading textAlign={'center'} m={'4'}>Profile</Heading>
        <Stack p={'8'} direction={['column', 'row']} spacing={["30", "50"]} alignItems={['center', 'flex-start']} justifyContent={'center'}>
          <VStack ml={['0', '90']}>
            <Avatar src={user.avatar.url} boxSize={'40'}></Avatar>
            <Link><Button colorScheme='linkedin' onClick={onOpen} variant={'ghost'}> Change picture</Button></Link>
          </VStack>
          <VStack justifyContent={['flex-start', '']} alignItems={['flex-start', 'flex-start']}>
            <HStack>
              <Text >Name-</Text>
              <Text fontWeight={'bold'}>{` ${user.name}`}</Text>
            </HStack>
            <HStack>
              <Text >Email-</Text>
              <Text fontWeight={'bold'}>{` ${user.email}`}</Text>
            </HStack>
            <HStack>
              <Text >Join with us-</Text>
              <Text fontWeight={'bold'}> {` ${user.CreateAT.toString().slice(0, 10)}`}</Text>
            </HStack>
            {
              user.role !== "admin" && (
                <HStack>
                  <Text >
                    Subscription
                  </Text>
                  {
                    user.subscription && user.subscription.status === "active" ? (
                      <Button variant={'ghost'} isLoading={loading} onClick={CencerHandler} colorScheme='linkedin'>Cancel Subscription</Button>
                    ) : (
                      <Link to={"/subscribe"}>
                        <Button variant={'ghost'} colorScheme='linkedin'>Subscribe</Button>
                      </Link>
                    )
                  }
                </HStack>
              )
            }
          </VStack>
        </Stack>
        <Stack alignItems={'center'} justifyContent={'center'} direction={["column", "row"]} >

          <HStack alignItems={'center'}>
            <Link to={"/updateprofile"}><Button bg={'linkedin.200'} variant={'ghost'}>Update Profile</Button></Link>
            <Link to={"/changepassword"}><Button bg={'linkedin.100'} variant={'ghost'}>Change Password</Button></Link>
          </HStack>
        </Stack>
        <Heading p={'5'} size={'md'}>Playlists-</Heading>
        {
          user.playlist.length > 0 && (
            <Stack justifyContent={'center'} alignItems={'center'} flexWrap={'wrap'} direction={["column", "row"]} >

              {
                user.playlist.map((e) => (
                  <VStack w={'48'} m='2' key={e.course}>
                    <Link to={`/course/${e.course}`}><Image border={'1px solid gray'} h={'7rem'} src={e.poster}></Image></Link>
                    <HStack m={'1'}><Link to={`/course/${e.course}`}><Button variant={'outline'} colorScheme='linkedin'>Watch Now</Button></Link>
                      <Button onClick={() => RemovePlaylistHandler(e.course)} color={'red'} variant={'ghost'}><AiFillDelete /></Button>
                    </HStack>
                  </VStack>
                ))
              }
            </Stack>
          )
        }
        {
          user.playlist.length > 0 ? ("") : (<><Link to={'/course'}><Button variant={'outline'} mb={'2'} color={'linkedin.400'}>Add playlist</Button></Link></>)
        }
        <br />
      </Container>
      <InitialFocus changeImgeSumbit={changeImgeSumbit} isOpen={isOpen} onClose={onClose} />
    </>
  )
}
export default Profile

function InitialFocus({ isOpen, onClose, }) {
  const [PreAvtar, setPreAvtar] = useState("")
  const [PreAvtarPP, setPreAvtarPP] = useState("")
  const AvtarHandler = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreAvtar(reader.result);
      setPreAvtarPP(reader.result);
      setPreAvtar(file)
    }
  }

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const closeHander = () => {
    onClose();
    setPreAvtar('')
  }
  const dispatch = useDispatch();
  const sumbithandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append('file', PreAvtar);
    dispatch(UpdateProfilePhoto(myForm));
    // console.log(myForm);
    dispatch(LoadUser())
  };
  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay backdropFilter={'blur(5px)'} />
        <ModalContent >
          <form onSubmit={sumbithandler}>
            <ModalHeader>Choose a Image</ModalHeader>
            <ModalBody pb={6}>
              <HStack mb={'4'} justifyContent={'center'}>
                <Avatar src={PreAvtarPP} boxSize={'32'}></Avatar>
              </HStack>
              <FormControl>
                <Input classname='inputAvtar' accept='image/*' onChange={AvtarHandler} type='file' required />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button type='submit' colorScheme='blue' mr={3}>
                Save Changes
              </Button>
              <Button onClick={closeHander}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  )
}