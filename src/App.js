import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home'
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Login from './components/Auth/Login';
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
import toast, { Toaster } from 'react-hot-toast';
import { LoadUser } from './redux/actions/UserAction';
import Loader from './components/Layout/Loader';
import { ProtectedRoute } from 'protected-route-react'
import Course from './components/Course/Course';
import CourseModal from './components/Admin/Course/CourseModal';

function App() {
  // window.addEventListener("contextmenu",(e)=>{
  //   e.preventDefault()
  // })
  const { isAouthenticated, user, message, error, loading } = useSelector(state => state.user)
  const isAuthenticated = isAouthenticated;
  const dispatch = useDispatch()

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

  useEffect(() => {
    dispatch(LoadUser())
  }, [dispatch]);

  return (
    <BrowserRouter>
      {
        loading ? (<Loader />) : (<>
          <Header isAuthenticated={isAuthenticated} user={user} />
          <ProfileName users={user} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect={"/profile"}><Login /></ProtectedRoute>} />
            <Route path="/register" element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect={"/profile"}><Register /></ProtectedRoute>} />
            <Route path="/course" element={<Course />} />
            <Route path="/about" element={<About />} />
            <Route path="/course/:id" element={<ProtectedRoute isAuthenticated={isAuthenticated} redirect={'/course'}><CoursePage user={user} /></ProtectedRoute>} />
            <Route path="/resetepassword/:token" element={<ProtectedRoute isAouthenticated={isAuthenticated} redirect={"/login"}><ResetePassword /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute isAuthenticated={isAuthenticated} redirect={'/login'}><Profile user={user} /></ProtectedRoute>} />
            <Route path="/updateprofile" element={<ProtectedRoute isAuthenticated={isAuthenticated} redirect={"/login"}><UpdateProfile user={user} /></ProtectedRoute>} />
            <Route path="/changepassword" element={<ProtectedRoute isAuthenticated={isAuthenticated} redirect={"/login"}><ChangePassword /></ProtectedRoute>} />
            <Route path="/requestcourse" element={<RequestCourse />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/subscribe" element={<ProtectedRoute isAuthenticated={isAuthenticated} redirect={"/course"}><Subscribe user={user} /></ProtectedRoute>} />
            <Route path="/paymentsuccuss" element={<PaymentSuccess />} />
            <Route path="/paymentfailed" element={<PaymentFailed />} />
            <Route path="/admin/deshbord" element={<ProtectedRoute isAuthenticated={isAuthenticated} redirect={'/profile'}><Deshbord /></ProtectedRoute>} />
            <Route path="/admin/courses" element={<ProtectedRoute isAuthenticated={isAuthenticated} redirect={'/profile'}><Courses /></ProtectedRoute>} />
            <Route path="/admin/createcourse" element={<ProtectedRoute isAuthenticated={isAuthenticated} redirect={'/profile'}><CreateCourse /></ProtectedRoute>} />
            <Route path="/admin/users" element={<ProtectedRoute isAuthenticated={isAuthenticated} redirect={'/profile'}><Users user={user} /></ProtectedRoute>} />
            <Route path="/admin/course/:id" element={<ProtectedRoute isAuthenticated={isAuthenticated} redirect={'/admin/deshbord'}><CourseModal /></ProtectedRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <Toaster />
        </>)
      }
    </BrowserRouter>
  )
}

export default App;
