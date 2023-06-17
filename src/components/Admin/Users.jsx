import React from 'react'


import AdminSlliderbar from './Deshbord/AdminSliderbar'
import { Box, Button, Grid, HStack, Heading, Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import { RiDeleteBinFill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { ChangeUserRoleAdmin, DeleteUserAdmin, GetAllUsersAdmin } from '../../redux/actions/AdminAction'
import { toast } from 'react-hot-toast'
const Users = () => {
  const { users, loading, error, message } = useSelector(state => state.admin);
  const dispatch = useDispatch();
  const ChangeUserrole = (userid) => {
    dispatch(ChangeUserRoleAdmin(userid))
    dispatch(GetAllUsersAdmin());
  }
  const DeleteUsers = (userid) => {
    // console.log(userid)
    dispatch(DeleteUserAdmin(userid))
    dispatch(GetAllUsersAdmin());
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

  useEffect(() => {
    dispatch(GetAllUsersAdmin());
  }, [dispatch]);

  return (
    <>
      <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
        <Box p={['0', '16']} overflowX={'auto'}>
          <Heading textAlign={'center'}>All Users</Heading>
          <TableContainer w={['100vw', 'full']}>
            <Table size={'lg'} variant={'simple'}>
              <TableCaption>All Availabele users in Database</TableCaption>
              <Thead>
                <Tr>
                  <Th>NO.</Th>
                  <Th>id</Th>
                  <Th>name</Th>
                  <Th>Eamail</Th>
                  <Th>role</Th>
                  <Th>Subscription</Th>
                  <Th isNumeric>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {users ? (
                  users && users.map((item, i) => (
                    <Row ChangeUserrole={ChangeUserrole} i={i} loading={loading} DeleteUsers={DeleteUsers} key={item._id} item={item} />
                  ))) : (<Text>no User</Text>)
                }
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
        <AdminSlliderbar></AdminSlliderbar>
      </Grid>
    </>
  )
}
export default Users;
function Row({ item, i,loading, ChangeUserrole, DeleteUsers }) {
  return (
    <Tr>
      <Td>#{i + 1}</Td>
      <Td>#{item._id}</Td>
      <Td>{item.name}</Td>
      <Td>{item.email}</Td>
      <Td>{item.role}</Td>
      <Td>{item.subscription && item.subscription.status === 'active' ? 'Active' : 'Not Active'}</Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button variant={'outline'} onClick={() => ChangeUserrole(item._id)} color={'linkedin.300'}>Change role</Button>
          <Button isLoading={loading} variant={'outline'} onClick={() => DeleteUsers(item._id)} color={'linkedin.500'}><RiDeleteBinFill /></Button>
        </HStack>
      </Td>
    </Tr>
  )
}