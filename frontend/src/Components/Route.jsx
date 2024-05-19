


const Route = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/hackathons" element={<Hackathon/>}></Route>
            <Route path="/blog" element={<Blog/>}></Route>
            <Route path="/blog" element={<Blog/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Route