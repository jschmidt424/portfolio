import React from "react";
import "./App.css";

import "tailwindcss/tailwind.css"

import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Connect from "./components/Connect";

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <NavBar />
      <About />
      <Projects />
      <Skills />
      <Connect />
      <Contact />
    </main>
  );
}

export default App;
