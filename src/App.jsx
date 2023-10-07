import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Pages/Login';
import Home from './pages/Home';
import SignUp from './Pages/SignUp';
import Profile from './pages/Profile';
import About from './pages/About';
import Header from './Components/Header';
import Adopt from './Pages/Adopt.Jsx';
import AddAdoption from './Pages/AddAdoption';

export default function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/about' element={<About />} />
        <Route path='/adopt' element={<Adopt />} />
        <Route path='/Addadoption' element={<AddAdoption />} />
    </Routes>
    </BrowserRouter>
  )
}
