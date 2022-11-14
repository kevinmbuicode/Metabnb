import React from "react";
import BannerMain from "./Components/Common/Banner/BannerMain";
import Footer from "./Components/Common/Footer/Footer";
import Navbar from "./Components/Common/Navbar/Navbar";
import Content from "./Components/Content/Content";
import DisplayBanner from "./Components/DisplayBanner/DisplayBanner";
import Label from "./Components/Label/Label";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BannerMain/>
      <Label/>
      <Content/>
      <DisplayBanner/>
      <Footer/>
    </div>
  );
}

export default App;
