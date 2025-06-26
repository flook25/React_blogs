import Home from "./components/Home"
import About from "./components/About"
import Blogs from "./components/Blogs"
import { BrowserRouter, Routes, Route , Navigate} from "react-router-dom"
import Navbar from "./components/Navbar"
import NotFound from "./components/NotFound"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="*" element= {<NotFound/>} />
          <Route path="/home" element = {<Navigate to='/'/>}/>
          <Route path="/info" element = {<Navigate to='/about'/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App