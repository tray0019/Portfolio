import {Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";


function App(){
  return (
    <>
    
    <Navbar/>
      <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="projets" element={<Projects/>}/>
          </Routes>
      </main>
    </>
  )
}

export default App;