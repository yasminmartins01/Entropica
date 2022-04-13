import React from "react";


import Card from "./components/card";
import Footer from "./components/footer";
import Header from "./components/header";
import Contacto from './components/contacto';
import Navbar from "./components/navbar";
import NewSection from "./components/Nsecction";
import Section from "./components/section";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Section />
      <Card />
      <NewSection />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
