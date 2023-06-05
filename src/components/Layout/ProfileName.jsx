
import React from 'react'
import {
    Avatar,
    HStack,
    
    Text,
  
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ProfileName = () => {
    return (
        <><Link to={'/profile'}>
                <HStack alignItems={'center'} position={'fixed'}
                top={'4'}
                right={'14'} >
                <Avatar
                    size={'sm'}
                    src={
                        'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                    }
                />
                <HStack
                    display={{ base: 'none', md: 'flex' }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2">
                    <Text fontSize="sm">Justina Clark</Text>
                </HStack>
            </HStack>
            </Link>
        </>
    )
}
export default ProfileName