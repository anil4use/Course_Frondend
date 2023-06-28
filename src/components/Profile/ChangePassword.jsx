import {
  Box,
  Button,
  FormControl,
  useColorModeValue,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  Stack,
  Flex,
  Text,
  InputRightElement,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { UpdatePassword } from '../../redux/actions/UserAction'
import { useNavigate } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
const ChangePassword = () => {
  const [oldPassword, SetoldPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false);

  const [newPassword, SetnewPassword] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const sumbitHandler = (e) => {
    e.preventDefault();
    dispatch(UpdatePassword(oldPassword, newPassword));
    navigate("/profile")
  };
  return (
    <>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('white', 'gray.800')}>
        <Stack w={['96', 'sm']} spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading w={'sm'} textAlign={'center'} fontSize={'4xl'}>Change  Password</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              {/* to enjoy all of our cool features ✌️ */}
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <form onSubmit={sumbitHandler}>
                <FormControl id="password" isRequired>
                  <FormLabel>Inter Your Old Password</FormLabel>
                  <InputGroup>
                    <Input type={showPassword ? 'text' : 'password'} value={oldPassword} onChange={e => SetoldPassword(e.target.value)} />
                    <InputRightElement h={'full'}>
                      <Button
                        variant={'ghost'}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }>
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <FormControl id="newpassword" isRequired>
                  <FormLabel>Inter Your Old Password</FormLabel>
                  <InputGroup>
                    <Input type={showPassword ? 'text' : 'password'} value={newPassword} onChange={e => SetnewPassword(e.target.value)} />
                    <InputRightElement h={'full'}>
                      <Button
                        variant={'ghost'}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }>
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Stack mt={'3'} spacing={10} pt={2}>
                  <Button
                    loadingText="Submitting"
                    size="lg"
                    color={'linkedin.300'} variant={'solid'}
                    _hover={{
                      bg: 'gray.200',
                    }}
                    type={'submit'}>
                    Update Password
                  </Button>
                </Stack>
              </form>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  )
}

export default ChangePassword