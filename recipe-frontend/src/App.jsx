import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";


import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Recipe from "./components/Pages/Recipe";
import Login from "./components/Pages/Login";
import Contact from "./components/Pages/Contact";
import "./App.css";

function App() {

  return (
    <>
      <Header />
      <Footer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <SearchBar />
    </>
  );
}

export default App;
