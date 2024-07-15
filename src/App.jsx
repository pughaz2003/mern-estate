import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SigUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';




export default function App() {
  return  <BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/sign-up' element={<SigUp/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/profile' element={<Profile/>}/>
</Routes>
        </BrowserRouter>
     

}
