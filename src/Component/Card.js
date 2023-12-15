import React from 'react'
import "./Card.css"
import Image from "../Asset/R.png"

const Card = () => {
   /* let myChart = document.getElementsByClassName("active");
    let myChart1 = document.getElementsByClassName("cardside");

    myChart1.addEventListener('mouseover', () => {
        myChart.classList.remove("active");
    }, false); */
    
   

  return (
    <div className="container">
        <div className="card left cardside" id="card1">
            <img src={Image}/>
        </div>
        <div className="card left cardside" id="card2">
            <img src={Image}/>
        </div>
        <div className="card third active" id="card3">
            <img src={Image}/>
        </div>
        <div className="card right cardside" id="card4">
            <img src={Image}/>
        </div>
        <div className="card right cardside" id="card5">
            <img src={Image}/>
        </div>
    </div>
  )
}

export default Card