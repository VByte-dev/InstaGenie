import React from "react";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Captions from './Components/Captions';
import Hashtags from "./Components/Hashtags";
import Footer from "./Components/Footer";

import { Routes, Route } from "react-router-dom";

let App = () => {
  return (
    <>
      <Header />
      <Nav />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Captions/>}></Route>
        <Route path="/captions" element={<Captions/>}></Route>
        <Route path="/hashtags" element={<Hashtags/>}></Route>
      </Routes>
      <Footer />
    </>
  );
};
export default App;
