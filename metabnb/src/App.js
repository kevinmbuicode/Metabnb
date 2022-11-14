import React from "react";
import BannerMain from "./Components/Common/Banner/BannerMain";
import Navbar from "./Components/Common/Navbar/Navbar";
import Content from "./Components/Content/Content";
import Label from "./Components/Label/Label";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BannerMain/>
      <Label/>
      <Content/>
    </div>
  );
}

export default App;
