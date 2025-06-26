import Home from "./components/Home"
import About from "./components/About"
import Blogs from "./components/Blogs"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App