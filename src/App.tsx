import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'
import { Landing } from './pages/Landing/Landing'


function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  )
}

export default App
