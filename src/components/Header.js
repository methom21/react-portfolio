import React from 'react'
// import { Navbar,Nav,NavDropdown, Container } from 'react-bootstrap'
import './Navbar.css'
import { Link } from "react-router-dom";
 

export default function BootstrapNavbar(){

    
        return(
           
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="https://github.com/methom21" >Michael Elijah Pain Thompson</a>
              {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button> */}
              {/* <div className="collapse navbar-collapse" id="navbarNav"> */}
               
                <ul className="navbar-nav">
                  <Link to="/">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" >About me</a>
                  </li>
                  </Link>
                  <Link to= "/Home">
                  <li className="nav-item">
                    <a className="nav-link" >Portfolio</a>
                  </li>
                  </Link>
                  <Link to="/Resume">
                  <li className="nav-item">
                    <a className="nav-link" >Resume</a>
                  </li>
                  </Link>
                  <Link to ="/Contactme">
                  <li className="nav-item">
                    <a className="nav-link" >Contact Me</a>
                  </li>
                  </Link>
                  
                </ul>
                
              {/* </div> */}
            </div>
          </nav>
        )  
    }

