
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from './Pages/Home'
import Hackathon from './Pages/Hackathon_page'
import Blog from './Pages/Blog'
import Organizehack from "./Pages/Organizehack"
import LoginSignup from "./Pages/LoginSignup"
import Dashboard from "./Pages/Dashboard"


const App = () => {
  return (
    <div className='  font-nunito-sans scroll-none '>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/hackathons" element={<Hackathon></Hackathon>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/organize" element={<Organizehack></Organizehack>}></Route>
        <Route path="/login" element={<LoginSignup/>} />
        <Route path="/hackathons/:eventId/dashboard" element={<Dashboard/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App