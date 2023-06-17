
import React from 'react'
import {
    Avatar,
    HStack,

    Text,

} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ProfileName = ( {users} ) => {
    if (!users || !users.avatar || !users.name) {
        return null; // or any alternative rendering if users data is not available
      }

    return (
        <><Link to={'/profile'}>
            <HStack alignItems={'center'} position={'fixed'}
                top={'4'}
                right={'14'} >
                <Avatar
                    size={'sm'}
                    src={users.avatar.url}
                />
                <HStack
                    display={{ base: 'none', md: 'flex' }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2">
                   
                <Text>
                    {users.name}
                </Text>
                </HStack>
            </HStack>
        </Link>
        </>
    )
}
export default ProfileName