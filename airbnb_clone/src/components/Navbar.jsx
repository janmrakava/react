import React from "react"
import airbnb_logo from "../../images/airbnb-logo.png"
import "../App.css"

export default function Navbar(){
    return (
        <nav>
            <img src={airbnb_logo} className="nav--logo"/>
       
        </nav>
    )
}