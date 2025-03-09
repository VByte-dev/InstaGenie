import React from "react";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Captions from "./Components/Captions";
import Hashtags from "./Components/Hashtags";
import Footer from "./Components/Footer";

import { Routes, Route } from "react-router-dom";

let App = () => {
  return (
    <>
      <header className="selection:bg-purple-900 selection:text-white">
        <Header />
        <Nav />
      </header>
      <main className="selection:bg-purple-900 selection:text-white">
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Captions />}></Route>
          <Route path="/hashtags" element={<Hashtags />}></Route>
        </Routes>
      </main>
      <footer className="selection:bg-purple-900 selection:text-white">
        <Footer />
      </footer>
    </>
  );
};
export default App;
