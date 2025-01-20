import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setUser } from './redux/slices/userSlice'
import { setToken } from './redux/slices/authSlice';
import Header from './components/ui/Header';
import Home from './pages/Home';
import { Login } from './pages/Login';
import Profile from './pages/Profile';
import { Error } from './pages/Error';
import Footer from './components/ui/Footer';
import './index.scss'

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {

    const user = localStorage.getItem('user') || sessionStorage.getItem('user');
    if (user) {
      const userData = JSON.parse(user);
      dispatch(setUser(userData));
    }

    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    if (token) {
      dispatch(setToken(token));
    }
    
  }, [dispatch]);

    return (
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Header />
        <Routes>          
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    )
}

export default App;