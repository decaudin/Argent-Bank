import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
//import Error from './pages/Error';
import Footer from './components/Footer';
import './index.scss'

const App = () => {

    return (
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Header />
        <Routes>          
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          {/*<Route path="*" element={<Error />} />*/}
        </Routes>
        <Footer />
      </Router>
    )
}

export default App;