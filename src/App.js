import React from "react";
// import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Aboutme from "./components/Aboutme"
import Home from "./components/home"
import Technologies from "./components/technologies";
function App() {
 return (
  <div>
  <Navbar />
  <Home />
  <Aboutme />
  <Technologies />
  {/* <Footer /> */}
  </div>
 );
}
export default App;
