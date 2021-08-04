import React from "react";
// import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Aboutme from "./components/Aboutme"
import Home from "./components/home"
import Technologies from "./components/technologies";
import Contactme from "./components/Contactme";
function App() {
 return (
  <div>
  <Navbar />
  <Home />
  <Aboutme />
  <Technologies />
  <Contactme />
  </div>
 );
}
export default App;
