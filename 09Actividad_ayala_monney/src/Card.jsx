import React from "react";
import './App.css'


function Card ( props){
    //const precio = props.precio;
    return (
        <div className="card">
            <img src={props.imgCard} alt="" />
        </div>
    )
}

export default Card;