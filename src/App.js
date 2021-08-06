import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Aboutme from "./pages/AboutmePage.js";
import Home from "./pages/portfolio";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "./components/container";
import Contactme from "./pages/ContactPage";
import Resume from "./pages/Resume";
import Technologies from './components/technologies'
function App() {
  return (
    <Router>
      <Header />
      <Container />
      <Route exact path="/" >
      <Aboutme />
      </Route >
      <Route exact path="/Home">
        <Home />
        <Technologies />
      </Route>
      <Route exact path="/Contactme">
          <Contactme />
      </Route>
      <Route exact path="/Resume">
          <Resume />
          
    </Route>
      <Footer />
    </Router>
  );
}
export default App;
