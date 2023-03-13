import React from "react";
import "./form.css"
import img from "../assets/images.jpg"
import Adresse from "./adresse";
import Nom from "./nom";
import Prenom from "./prenom";
import Photo from "./photo";
function Form()
{
    return(
        <div className="container">
        <Photo/>
        <div className="inputs">
          <Prenom/>
          <Nom/>
          <Adresse/>
        </div>
      </div>
      
    )
}

export default Form;