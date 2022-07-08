import React from "react";
import "../css/boton.css";

export default function Boton({url, img, titulo}){

  return(
      <div id="boton">
        <a href={url} target="_blank">
          <img  src= {img} alt={titulo}/>
          <span>{titulo}</span>
        </a>
      </div>
  )
}
