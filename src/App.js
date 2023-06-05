import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home'
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Course from './components/Course/Course';
import Login from './components/Auth/Login';
import ForgetPassward from './components/Auth/ForgetPassword';
import Register from './components/Auth/SignUp';
import ResetePassword from './components/Auth/ResetPassword';
import Contact from './components/Contact/Contact';
import RequestCourse from './components/Contact/RequestCourse';
import About from './components/About/About';
import Subscribe from './components/Paymets/Subscribe';
import PaymentSuccess from './components/Paymets/PaymentSuccess';
import PaymentFailed from './components/Paymets/PaymentFailed';
import NotFound from './components/Layout/NotFound';
import CoursePage from './components/CoursePage/CoursePage';
import Profile from './components/Profile/Profile';
import UpdateProfile from './components/Profile/UpdateProfile';
import ChangePassword from './components/Profile/ChangePassword';
import Deshbord from './components/Admin/Deshbord/Deshbord';
import ProfileName from './components/Layout/ProfileName';
import CreateCourse from './components/Admin/CreateCourse';
import Users from './components/Admin/Users';
import Courses from './components/Admin/Course/Course';
import { useDispatch, useSelector } from 'react-redux';
import { Toast, Toaster, toast } from 'react-hot-toast';
import { LoadUser } from './redux/actions/UserAction';
function App() {
  // window.addEventListener("contextmenu",(e)=>{
  //   e.preventDefault()
  // })
  const { isAouthrizedAdmin, user, error, message } = useSelector(state => state.user);
  const dispatch = useDispatch()
  useEffect(() => {
    if (error) {
      toast.error(error)
      dispatch({ type: 'cleareError' })
    };
    if (message) {
      toast.error(message)
      dispatch({ type: 'clearMessagge' })
    };
  }, [dispatch, error, message]);
  
  useEffect(() => {
 dispatch(LoadUser())
  }, [dispatch]);


  return (
    <BrowserRouter>
      <Header isAouthrizedAdmin={isAouthrizedAdmin} user={user} />
      <ProfileName />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/course/:id" element={<CoursePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetpassward" element={<ForgetPassward />} />
        <Route path="/register" element={<Register />} />
        <Route path="/resetepassword/:token" element={<ResetePassword />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/requestcourse" element={<RequestCourse />} />
        <Route path="/about" element={<About />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/paymentsucces" element={<PaymentSuccess />} />
        <Route path="/paymentfailed" element={<PaymentFailed />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/updateprofile" element={<UpdateProfile />} />
        <Route path="/changepassword" element={<ChangePassword />} />


        {/* Admin Routes */}
        <Route path="/admin/deshbord" element={<Deshbord />} />
        <Route path="/admin/courses" element={<Courses />} />
        <Route path="/admin/createcourse" element={<CreateCourse />} />
        <Route path="/admin/users" element={<Users />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Toaster />
    </BrowserRouter>
  )
}

export default App;
