import React from 'react'
import './home.css'
import myImg from '../images/mikeyjamaica.jpg'
import myApp1 from '../images/myApp1.png'
import myApp2 from '../images/myApp2.png'
import myApp3 from '../images/myApp3.png'
import myApp4 from '../images/myApp4.png'

export default function Home(){
    return(
        <div className="card" >
  <img className="card-img-top" src= {myImg} alt="MyImg"></img>
  <div className="card-body">
    <p className="card-text">Below you can find some of my favorite applications that i have created, and i linked them directly to their corresponding github repository or the active site link for that application. If you would like to check out my other work just click on 'React Portfolio MT' and it will take you to the homepage of my github. </p>
    <img className="card-img" src= {myApp1} alt="App1" href='https://radiant-scrubland-75939.herokuapp.com/'></img>
    <img className="card-img" src= {myApp2} alt="App2" href='https://protected-shore-51969.herokuapp.com/'></img>
    <img className="card-img" src= {myApp3} alt="App3" href='https://fitness-tracker-mt.herokuapp.com/'></img>
    <img className="card-img" src= {myApp4} alt="App4" href='https://github.com/methom21/Project-2-MT-ZK-JA'></img>
  </div>
</div>
    )
}