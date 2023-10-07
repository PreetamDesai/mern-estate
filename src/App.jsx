import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Pages/Login';
import Home from './pages/Home';
import SignUp from './Pages/SignUp';
import Profile from './pages/Profile';
import About from './pages/About';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/about' element={<About />} />
    </Routes>
    </BrowserRouter>
  )
}
