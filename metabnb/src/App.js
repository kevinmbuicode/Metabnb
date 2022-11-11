import React from "react";
import BannerMain from "./Components/Common/Banner/BannerMain";
import Navbar from "./Components/Common/Navbar/Navbar";
import Label from "./Components/Label/Label";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BannerMain/>
      <Label/>
    </div>
  );
}

export default App;
