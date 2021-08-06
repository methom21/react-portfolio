import React from 'react'
import ResumeMT from '../images/ResumeMT.png'
import '../components/Resume.css'
export default function Resume() {
  return (
    <>
     <div className="center-align">
      <a
        href="https://docs.google.com/document/d/1jf0oDk6oQ88iF_oB1iE4T5IrVl3vi46J7CYYYHnpIhk/edit"
        download="Mikey's Resume"
        id="download">
       * Click Here to redirect to my google docs Resume *
      </a>
      </div>
        <div className="center-align">
        <img src= {ResumeMT} className="responsive-img" alt=""/>
        </div>
    </>
  );
}
