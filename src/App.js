import {BrowserRouter, Routes, Route} from "react-router-dom"
import AboutMe from "./components/aboutMe/aboutMe";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Portfolio from "./components/portfolio/portfolio"
import Resume from "./components/resume/resume";

function App() {
  return (
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path={"/"} element={<AboutMe/>}/>
        <Route path={"/portfolio"} element={<Portfolio/>}/>
        <Route path={"/contact"} element={<h1>Contact</h1>}/>
        <Route path={"/resume"} element={<Resume/>}/>
      </Routes>
      <Footer/>
      
      </BrowserRouter>
  );
}

export default App;
