import React from 'react'
import '../Home/home.css'
import { ColorModeSwitcher } from '../../ColorModeSwitcher'
import {
    Button,
    HStack,
    VStack,
    useDisclosure
} from '@chakra-ui/react'
import {
    GrMenu,
    AiFillHome,
    RiGitPullRequestFill,
    AiOutlineInsertRowAbove,
    AiFillPhone,
    IoIosLogOut,
    ImBook,
    RiDashboardFill,
    CgProfile
} from 'react-icons/all'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { LogoutUser } from '../../redux/actions/UserAction'


const Header = ({ isAuthenticated, user }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const dispatch = useDispatch()
    const UserLogoutHandler = () => {
        // console.log("logout")
        dispatch(LogoutUser())
        onClose() 
    }


    return (
        <>
            <ColorModeSwitcher />

            <Button  colorScheme={'linkedin'} width={'12'} height={'12'} rounded={'full'}
                top={'3'} left={'4'} position={'fixed'} onClick={onOpen}>
                <GrMenu opacity={'1'} />
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth={'1px'}>Free Course RR</DrawerHeader>
                    <DrawerCloseButton width={'12'} height={'12'} rounded={'full'} colorScheme='red' position={'fixed'} />
                    <DrawerBody>
                        <VStack spacing={'3'} justifyContent={'space-between'} alignItems={["center", "flex-start"]}>
                            <Link to="/">
                                <Button onClick={onClose}
                                    variant='ghost'>
                                    <AiFillHome /> <span style={{ marginLeft: '10px' }}>Home</span>
                                </Button>
                            </Link>
                            <Link to="/course">
                                <Button onClick={onClose} variant='ghost'>
                                    <ImBook /> <span style={{ marginLeft: '10px' }}>Brower Course</span>
                                </Button>
                            </Link>
                            <Link to="/requestcourse">
                                <Button onClick={onClose} variant='ghost'>
                                    <RiGitPullRequestFill /> <span style={{ marginLeft: '10px' }}>Request Course</span>
                                </Button>
                            </Link>
                            <Link to="/about">
                                <Button onClick={onClose} variant='ghost'>
                                    <AiOutlineInsertRowAbove /> <span style={{ marginLeft: '10px' }}>About</span>
                                </Button>
                            </Link>
                            <Link to="/contact">
                                <Button onClick={onClose} variant='ghost'>
                                    <AiFillPhone /> <span style={{ marginLeft: '10px' }}>Contact Us</span>
                                </Button>
                            </Link>
                            <HStack justifyContent={'space-between'} bottom={["24", "4"]} position={'absolute'} >
                                {isAuthenticated ? (<>
                                    <Link to={'/profile'}>
                                        <Button onClick={onClose}  marginLeft={'4rem'} variant='solid'><CgProfile /></Button>
                                    </Link>
                                    <Link>
                                        <Button  onClick={UserLogoutHandler} marginLeft={'1rem'} variant='ghost'><IoIosLogOut /></Button>
                                    </Link>

                                    <br />
                                    {user && user.role === "admin" && (
                                        <Link to={"admin/deshbord"}>
                                            <Button onClick={onClose}  colorScheme='purple' marginLeft={'3rem'} variant={'ghost'}><RiDashboardFill /></Button>
                                        </Link>
                                    )}
                                </>) : (<>
                                    <Link to={'/login'}>
                                        <Button onClick={onClose}  color={'linkedin.300'} variant={'solid'}>Login</Button>
                                    </Link>
                                    <span>Or</span>
                                    <Link to={'/register'}>
                                        <Button onClick={onClose}  color={'linkedin.300'} variant={'solid'}>Sign Up</Button>
                                    </Link>
                                </>)}
                            </HStack>
                        </VStack>
                    </DrawerBody>
                    <DrawerFooter >
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}
export default Header





