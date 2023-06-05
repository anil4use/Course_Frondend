
import { VStack, Button } from '@chakra-ui/react'
import React from 'react'
import { RiLayoutGridFill } from 'react-icons/ri'
import { Link, useLocation } from 'react-router-dom'
import { IoIosCreate } from 'react-icons/io'
import { FiUsers } from 'react-icons/fi'
import { GiBookshelf } from 'react-icons/gi'


const AdminSliderbar = () => {
    const Location = useLocation()
    return (
        <>
            <VStack  spacing={'8'} p={'16'} boxShadow={'2px 0 10px rgba(107,10,10,0.5)'}>
                <LinkButton active={Location.pathname==="/admin/deshbord"}  text={"Deshbord"} Icon={RiLayoutGridFill} url={"deshbord"}></LinkButton>
                <LinkButton  active={Location.pathname==="/admin/createcourse"} text={"Create Course"} Icon={IoIosCreate} url={"createcourse"}></LinkButton>
                <LinkButton  active={Location.pathname==="/admin/courses"} text={"Course"} Icon={GiBookshelf} url={"courses"}></LinkButton>
                <LinkButton  active={Location.pathname==="/admin/users"} text={"Users"} Icon={FiUsers} url={"users"}></LinkButton>
            </VStack>
        </>
    )
}
export default AdminSliderbar
function LinkButton({url,Icon,text,active}) {
   return(
    <Link to={`/admin/${url}`}>
    <Button colorScheme={active?"purple":""} variant={'ghost'} fontSize={'large'}>
        <Icon style={{margin:"4px"}}/> {text}
    </Button>
</Link>
   )
}