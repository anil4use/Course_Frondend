import React from 'react'
import AdminSlliderbar from './AdminSliderbar'
import { Box, Grid, HStack, Heading, Stack, Text, } from '@chakra-ui/react'
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri'
import { DoughnutChart, LineChart, LineChartUsers } from './Chart'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AdminStatsDATA } from '../../../redux/actions/AdminAction'
import Loader from '../../Layout/Loader'
const Deshbord = () => {
  const { stats,
    loading,
    userCount,
    userSubscription,
    userViews,
    subscriptionPercentage,
    viewsParcentage,
    userParcentage,
    userProfit,
    viewsProfit,
    subscriptionProfit } = useSelector(state => state.admin)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(AdminStatsDATA())
  }, [dispatch])

  const Time = String(new Date(new Date(stats[11].creatredAt)))

  const DataBox = ({ tittle, qnt, qntPercentage, profit }) => (
   <Box w={['full', '26%']} boxShadow={'2px 0 10px rgba(107,10,10,0.5)'} p={'8'} borderRadius={'lg'}>
  <Text>{tittle}</Text>
  <HStack spacing={'6'}>
    <Text fontSize={'2xl'} fontWeight={'bold'}>{qnt}</Text>
    <HStack>
      <Text>
        {qntPercentage}% </Text>{profit ? (<RiArrowUpLine color="green" />) : (<RiArrowDownLine color='red' />)}
    </HStack>
  </HStack>
  <Text opacity={'0.6'} children="Since Last Month" />
</Box>
  )
  console.log(userSubscription)
  return (
    <>
      {
        !loading?(<Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']} >
        <Box boxSizing='border-box' py='16' px={['4', '0']}>
          <Text textAlign={'center'} opacity={'0.5'}>{`Last Changes was on ${Time.split('G')[0]}`}</Text>
          <Heading textAlign={['center', 'left']} mt={'4'} mb={'16'} ml={['0', '16']}>Deshbord</Heading>
          <Stack direction={['column', 'row']} minH={'24'} justifyContent={'space-evenly'}>
            <DataBox tittle="Viesw" qnt={userViews} qntPercentage={viewsParcentage} profit={viewsProfit}></DataBox>
            <DataBox tittle="Users" qnt={userCount} qntPercentage={userParcentage} profit={userProfit}></DataBox>
            <DataBox tittle="SubsCription" qnt={userSubscription} qntPercentage={subscriptionPercentage} profit={subscriptionProfit}></DataBox>
          </Stack>
          <Box m={['0', '12']}
            borderRadius={'lg'}
            padding={['0', '16']}
            mt={['4', "16"]}
            boxShadow={'2px 0 10px rgba(107,10,10,0.5)'}>
            <Heading p={['6', '0']} textAlign={['center', 'left']} size={'md'} pt={["8", '0']} ml={['0', '1']}>View Graph</Heading>
            <LineChart dataArray={stats} />
          </Box>
          <Stack alignItems={'center'} direction={['column', 'row']}>
            <Box w={['full', '96']} h={'md'} m={['0', '12']}
              borderRadius={'lg'}
              padding={['0', '16']}
              mt={['4', "16"]}
              boxShadow={'2px 0 10px rgba(107,10,10,0.5)'}>
              <Heading mb={'1'} p={['6', '0']} textAlign={['center', 'left']} size={'md'} pt={["8", '0']} ml={['0', '1']}>Subscribe Graph</Heading>
              <DoughnutChart users={[userSubscription,userCount-userSubscription]} />
            </Box>
            <Box w={['full', '96']} h={'md'} m={['0', '12']}
              borderRadius={'lg'}
              padding={['0', '16']}
              mt={['4', "16"]}
              boxShadow={'2px 0 10px rgba(107,10,10,0.5)'}>
              <Heading mb={'1'} p={['6', '0']} textAlign={['center', 'left']} size={'md'} pt={["8", '0']} ml={['0', '1']}>Subscribe Graph</Heading>
              <LineChartUsers sub={[userSubscription,userCount-userSubscription]}/>
            </Box>
          </Stack>
        </Box>

        <AdminSlliderbar></AdminSlliderbar>
      </Grid>):(<Loader/>)
      }
    </>
  )
}
export default Deshbord