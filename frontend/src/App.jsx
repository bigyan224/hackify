
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from './Pages/Home'
import Hackathon from './Pages/Hackathon_page'
import Blog from './Pages/Blog'

const App = () => {
  return (
    <div className='  font-nunito-sans scroll-none'>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/hackathons" element={<Hackathon></Hackathon>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App