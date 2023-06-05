import { Avatar, Button, Container, FormControl, HStack, Heading, Image, Input, Stack, Text, VStack, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
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

const Profile = () => {

  const User = {
    ProfilePhoto: "https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg",
    Name: "anil",
    Email: "anil@anil.com",
    CeatedAt: "22/02/2019",
    role: "user",
    subscription: {
      status: "active",

    },
    playlist: [{
      course: "asdkfa",
      poster: "https://q5n8c8q9.rocketcdn.me/wp-content/uploads/2019/07/YouTube-Banner-Size-and-Dimensions-Guide.png.webp"
    }]
  }
  const { isOpen, onOpen, onClose } = useDisclosure()
  const RemovePlaylistHandler = () => {
    console.log("re")
  }
  const changeImgeSumbit = (e, image) => {
    e.preventDefault()
    console.log(image)
  }
  return (
    <>
      <Container minH={'95vh'} maxW={'container.md'}>
        <Heading textAlign={'center'} m={'4'}>Profile</Heading>

        <Stack p={'8'} direction={['column', 'row']} spacing={["30", "50"]} alignItems={['center', 'flex-start']} justifyContent={'center'}>
          <VStack ml={['0', '90']}>
            <Avatar boxSize={'40'}></Avatar>
            <Link><Button colorScheme='linkedin' onClick={onOpen} variant={'ghost'}> Change picture</Button></Link>
          </VStack>
          <VStack justifyContent={['flex-start', '']} alignItems={['flex-start', 'flex-start']}>
            <HStack>
              <Text >Name-</Text>
              <Text fontWeight={'bold'}>{` ${User.Name}`}</Text>
            </HStack>
            <HStack>
              <Text >Email-</Text>
              <Text fontWeight={'bold'}>{` ${User.Email}`}</Text>
            </HStack>
            <HStack>
              <Text >Created AT-</Text>
              <Text fontWeight={'bold'}> {` ${User.CeatedAt.toString().slice('')}`}</Text>
            </HStack>



            {
              User.role !== "admin" && (
                <HStack>
                  <Text >
                    Subscription
                  </Text>
                  {
                    User.subscription.status === "active" ? (
                      <Button variant={'ghost'} colorScheme='linkedin'>Cancel Subscription</Button>
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
          User.playlist.length > 0 && (
            <Stack justifyContent={'center'} alignItems={'center'} flexWrap={'wrap'} direction={["column", "row"]} >

              {
                User.playlist.map((e) => (
                  <VStack w={'48'} m='2' key={e.course}>
                    <Link to={`/course/${e.course}`}><Image boxSize={'full'} objectFit={'contain'} src={e.poster}></Image></Link>
                    <HStack m={'1'}><Link to={`/course/${e.course}`}><Button variant={'outline'} colorScheme='linkedin'>Watch Now</Button></Link>
                      <Button onClick={RemovePlaylistHandler} color={'red'} variant={'ghost'}><AiFillDelete /></Button>
                    </HStack>
                  </VStack>

                ))
              }
            </Stack>
          )
        }
      </Container>
      <InitialFocus changeImgeSumbit={changeImgeSumbit} isOpen={isOpen} onClose={onClose} />

    </>
  )
}

export default Profile

function InitialFocus({ isOpen, onClose, changeImgeSumbit }) {
  const [PreAvtar, setPreAvtar] = useState("")
  const AvtarHandler = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreAvtar(reader.result);
    }
  }


  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const closeHander = () => {
    onClose();
    setPreAvtar('')
  }


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
          <form onSubmit={e => changeImgeSumbit(e, Image)}>


            <ModalHeader>Choose a Image</ModalHeader>

            <ModalBody pb={6}>
              <HStack mb={'4'} justifyContent={'center'}>
                <Avatar src={PreAvtar} boxSize={'32'}></Avatar>
              </HStack>

              <FormControl>

                <Input className='inputAvtar' accept='image/' onChange={AvtarHandler} type='file' required />
               
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