import { useState } from "react";
import "./App.css";
import { NavBar } from "./components/Navbar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Experiences } from "./components/Experiences";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <NavBar />
      <Banner />
      <Skills />
      <Experiences />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
