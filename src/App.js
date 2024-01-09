import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

function App() {
  return (
    // all components
    <>
      <Nav />
      <Main/>
      <Menu/>
      <Footer/>
    </>
  );
}

export default App;
