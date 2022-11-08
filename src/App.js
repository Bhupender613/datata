import { render } from "@testing-library/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import About from "./components/about";
import Events from "./components/events";
import Form from "./components/form";
import Home from "./components/home";
import Navbar1 from './components/Narbar.js';




function App() {
  

return(


  <>
  <Navbar1 />
  <Routes>
<Route path="/" element={<Home/>} />
<Route path="/about" element={<About/>} />
<Route path="/events" element={<Events/>} />
<Route path="/form" element={<Form/>} />

  </Routes>
 
  </>



)



}
export default App;