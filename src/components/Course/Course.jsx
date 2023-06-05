import { Button, Container, Grid, GridItem, HStack, Heading, Image, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import python from '../../assets/imges/python.jpg'
import { Link } from 'react-router-dom';

const Course = () => {
  // const {course,setCourse}=useState["d"]
  const [keyword, setKeyword ]  = useState("ss");
  const [ Cetegories, SetCetegories ] = useState("s")
  const Cetegori = [
    "web dovlopment", "data Scintece", "c &c++ full course", "python basic", "java tetouril", "web dovlopment", "python adwand"
  ]
const addToPlayListHandler=()=>{
  console.log("playlist added succusfully")
}
  const Courese = ({ title, CreatedBY, desc, views, lectures, id, imgSrc, addToPlayList }) => {
    return (
      <>

        <Grid mt={'4'} templateColumns={['repeat(1,1fr)', 'repeat(3,1fr)']} gap={6}>
          <GridItem >
            <VStack boxShadow={'dark-lg'} bgColor={'blackAlpha.100'} className='Course' objectFit={'contain'} alignItems={["center", "flex-start"]}>
              <Image  src={imgSrc} objectFit={'contain'} boxSize={'60'} />
              <Heading textAlign={['center', 'left']} maxW='220px' fontSize={'2xl'} noOfLines={2}>{title}</Heading>
              <Text textAlign={['center', 'left']} maxW={'220px'} fontSize={'lg'} children={desc} noOfLines={3} />
              <Text textTransform={'uppercase'} textAlign={['center', 'left']} maxW={'200px'} colorScheme='body'> {`Created by-${CreatedBY} `}</Text>
              <Text fontWeight={'thin'} textAlign={'center'}>{`views- ${views}`}</Text>
              <Text textAlign={'center'}>{`Lectures- ${lectures}`}</Text>
              <Stack direction={['column', 'row']} alignItems={'center'}>
                <Link to={`/course:${id}`} > <Button colorScheme='linkedin' onClick={() => console.log("clied")}>watch now </Button></Link>
                <Button  colorScheme='linkedin' variant={'ghost'} onClick={(id) => addToPlayListHandler(id)}>Add to playList </Button>
              </Stack>
            </VStack>
          </GridItem>
        </Grid>
      </>
    )

  }
  return (
    <>
      <Container maxh={'95vh'} maxW={'container.lg'} paddingY={'8'}>
{/* <Heading>{Cetegories}</Heading> */}
        <Heading m={''} textAlign={'center'}>All course</Heading>
        <Input type='text' value={keyword} onChange={e => setKeyword(e.target.value)} m={'1'} placeholder='Search Courses' size={'lg'} />
        <HStack  value={Cetegories} className='category_hide' mt={'4'} justifyContent={['center']} overflow={'auto'} textAlign={['start']} >
          {
            Cetegori.map((cat, i) => {
              return <Button key={i}  onClick={() => SetCetegories(cat)} minW={'60'}>
                <Text>{cat}</Text>
              </Button>
            })
          }
        </HStack>

        <Stack direction={["column", "row"]} flexWrap={'wrap'}
          justifyContent={["flex-start", 'space-evenly']}
          alignItems={['center', 'flex-start']}>
          <Courese
            title={"Course of Talent"}
            views={12}
            addToPlayList={"add"}
            desc={"this is  amazing course"}
            id={1221}
            imgSrc={python}
            lectures={12}
            CreatedBY={"Anil"} />
        </Stack>
      </Container>
    </>
  )
}

export default Course