import { useState } from 'react'
import AdminSlliderbar from './Deshbord/AdminSliderbar'
import {  Button, Container, FormControl, Grid, Heading, Image, Input, Select, VStack } from '@chakra-ui/react'
const CreateCourse = () => {
  const [CreatorName, SetCreatorName] = useState('');
  const [Title, SetTitle] = useState('');
  const [Desc, SetDesc] = useState('');
  const [Poster, setPoster] = useState("")
  const [Category, SetCategory] = useState('')
  const Categories = [
    "web dovlopment", "data Scintece", "c &c++ full course", "python basic", "java tetouril", "web dovlopment", "python adwand"
  ]
  const AvtarHandler = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPoster(reader.result);
    }
  }

  return (
    <>

      <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
        <Container py={'16'}>
          <Heading textAlign={'center'}>Create a Cousre</Heading>

          <form action="">
            <VStack mt={'4'}>
              <FormControl>
                <VStack spacing={'3'}>
                  <Input required placeholder='Title' type='Name' value={Title} onChange={e => SetTitle(e.target.value)} />
                  <Input required placeholder='Description' type='Name' value={Desc} onChange={e => SetDesc(e.target.value)} />
                  <Input required placeholder='Creator Name' type='' value={CreatorName} onChange={e => SetCreatorName(e.target.value)} />
                  <Select required value={Category} onChange={e=>SetCategory(e.target.value)} placeholder='Select option'>

                    {Categories.map((e) => (
                      <option key={e} value={e}>{e}</option>
                    ))}
                  </Select>
                  <Input isRequired className='inputAvtar' accept='image/' onChange={AvtarHandler} type='file' required />

          

                  <Button w={'full'} type='submit' colorScheme='linkedin' >Sumbit Now</Button>
                </VStack>

              </FormControl>
              {Poster&&(
        <Image objectFit={'contain'} boxSize={'64'} src={Poster}></Image>
                  )}
          
            </VStack>
          </form>
          
        </Container>
        
        <AdminSlliderbar></AdminSlliderbar>
      </Grid>
    </>
  )
}

export default CreateCourse