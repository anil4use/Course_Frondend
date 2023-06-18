import { useEffect, useState } from 'react'
import AdminSlliderbar from './Deshbord/AdminSliderbar'
import { Button, Container, FormControl, Grid, Heading, Image, Input, Select, VStack } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { CreateCourses } from '../../redux/actions/AdminAction';
import { toast } from 'react-hot-toast';
const CreateCourse = () => {
  const [createBY, SetcreateBY] = useState('');
  const [title, Settitle] = useState('');
  const [descripaton, Setdescripaton] = useState('');
  const [Poster, setPoster] = useState("")
  const [PrePoster, setPrePoster] = useState("")
  const [category, Setcategory] = useState('')
  const Categories = [
    'Data Structure',
    'C & C++ full course',
    'Python basic',
    'Java Advance',
    'Web Development',
    'Machine Learning',
  ]
  const AvtarHandler = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPoster(reader.result);
      setPrePoster(reader.result);
      setPoster(file)
    }
  }
  const dispatch = useDispatch();
  const { loading, message, error } = useSelector(state => state.admin)
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
  const sumbitHander = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append('title', title);
    myForm.append('descripaton', descripaton);
    myForm.append('createBY', createBY);
    myForm.append('category', category);
    myForm.append('file', Poster);
    dispatch(CreateCourses(myForm));
    console.log(myForm);
  };
  return (
    <>
      <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
        <Container py={'16'}>
          <Heading textAlign={'center'}>Create a Cousre</Heading>
          <form onSubmit={sumbitHander}>
            <VStack mt={'4'}>
              <FormControl>
                <VStack spacing={'3'}>
                  <Input required placeholder='title' type='Name' value={title} onChange={e => Settitle(e.target.value)} />
                  <Input required placeholder='descripatonription' type='Name' value={descripaton} onChange={e => Setdescripaton(e.target.value)} />
                  <Input required placeholder='Creator Name' type='' value={createBY} onChange={e => SetcreateBY(e.target.value)} />
                  <Select required value={category} onChange={e => Setcategory(e.target.value)} placeholder='Select option'>
                    {Categories.map((e) => (
                      <option key={e} value={e}>{e}</option>
                    ))}
                  </Select>
                  <Input isRequired className='inputAvtar' accept='image/' onChange={AvtarHandler} type='file' required />
                  <Button isLoading={loading} w={'full'} type='submit' colorScheme='linkedin' >Sumbit Now</Button>
                </VStack>
              </FormControl>
              {Poster && (
                <Image objectFit={'contain'} boxSize={'64'} src={PrePoster}></Image>
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