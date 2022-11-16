import React from "react";
import './App.css';
import Footer from "./Components/Common/Footer/Footer";
import Navbar from "./Components/Common/Navbar/Navbar";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./Pages/Home";
import Places from "./Pages/Places";
import { Box } from "@mui/material";

function App() {
  return (
    <Box sx={{ width: "100%"}}>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/places" element={<Places/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </Box>
  );
}

export default App;
