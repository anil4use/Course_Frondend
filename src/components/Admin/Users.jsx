import React from 'react'


import AdminSlliderbar from './Deshbord/AdminSliderbar'
import { Box, Button, Grid, HStack, Heading, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { RiDeleteBinFill } from 'react-icons/ri'
const Users = () => {
  const users = [{
    _id: "asdfksdlfjsafsdfsladfk",
    Name: "Anil",
    Email: "enail@gmial",
    Role: "user",
    Subscription: {
      status: "active"
    },
  }
]
const ChangeUserRole=(userid)=>{
  console.log(userid)
}
const DeleteUsers=(userid)=>{
  console.log(userid)
}

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
                  <Th>id</Th>
                  <Th>Name</Th>
                  <Th>Eamail</Th>
                  <Th>Role</Th>
                  <Th>Subscription</Th>
                  <Th isNumeric>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {
                  users.map((item) => (
                    <Row ChangeUserRole={ChangeUserRole} DeleteUsers={DeleteUsers} key={item._id} item={item}  />
                  ))
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
function Row({ item,ChangeUserRole,DeleteUsers }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>{item.Name}</Td>
      <Td>{item.Email}</Td>
      <Td>{item.Role}</Td>
      <Td>{item.Subscription.status === 'active' ? 'Active' : 'Nor Active'}</Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button variant={'outline'} onClick={()=>ChangeUserRole(item._id)} color={'linkedin.300'}>Change Role</Button>
          <Button variant={'outline'} onClick={()=>DeleteUsers(item._id)}color={'linkedin.500'}><RiDeleteBinFill /></Button>
        </HStack>
      </Td>
    </Tr>
  )
}