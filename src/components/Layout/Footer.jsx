import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    VisuallyHidden,
} from '@chakra-ui/react';
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
//   import { ReactNode } from 'react';

const SocialButton = ({ children, label, href }) => (
    <chakra.button
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
        }}
    >
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
    </chakra.button>
);

export default function Footer() {
    return (
        <Box
            bg={'blackAlpha.800'}
            color={('gray.50')}
        >
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}
            >
                <Stack direction={'row'} spacing={6}>
                    <SocialButton label={'Twitter'} href={'https://twitter.com/AnilAnuragee'}>
                        <FaTwitter />
                    </SocialButton>
                    <SocialButton label={'linkedin'} href={'https://www.linkedin.com/in/anil-anuragee-3475b81b7/'}>
                        <FaLinkedinIn />
                    </SocialButton>
                    <SocialButton label={'githut'}  href={'https://github.com/anil4use'}>
                        <FaGithub />
                    </SocialButton>
                 
                    <SocialButton label={'Instagram'} href={'https://www.instagram.com/aniltheboss/'}>
                        <FaInstagram />
                    </SocialButton>
                </Stack>
                <Text textAlign={'center'} fontWeight={'semibold'} fontSize={'md'}>Design and Develop by --ANIL</Text>
                <Text textAlign={'center'} fontWeight={'bold'} fontSize={'md'}>© 2023 Free Course RR . All rights reserved</Text>

            </Container>
        </Box>
    );
}
