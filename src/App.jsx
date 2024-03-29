import Navigation from './components/Navigation'
import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import SignUp from './views/SignUp'
import SignUpFreelance from './views/SignUpFreelance'
import SignUpCompany from './views/SignUpCompany'
import Login from './views/Login'
import Error404 from './views/Error404'
import './App.css'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/SignUp" element= {<SignUp/>} />
        <Route path="/SignUpFreelance" element= {<SignUpFreelance/>} />
        <Route path="/SignUpCompany" element= {<SignUpCompany/>} />
        <Route path="/Login/:id" element= {<Login/>} />
        <Route path="*" element= {<Error404/>} />
      </Routes>
      <Footer/>
    </>
  )
}
export default App