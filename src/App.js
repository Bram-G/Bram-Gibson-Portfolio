import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import AboutMe from "./components/aboutMe/aboutMe";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Portfolio from "./components/portfolio/portfolio"
import Resume from "./components/resume/resume";
import Contact from "./components/contact/contact";

function App() {
  return (
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path={"/"} element={<AboutMe/>}/>
        <Route path={"/portfolio"} element={<Portfolio/>}/>
        <Route path={"/contact"} element={<Contact/>}/>
        <Route path={"/resume"} element={<Resume/>}/>
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
      <Footer/>
      
      </BrowserRouter>
  );
}

export default App;
