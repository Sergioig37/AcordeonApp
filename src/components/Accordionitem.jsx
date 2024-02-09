import React, { useState } from "react";

export const Accordionitem = ({ pregunta, respuesta }) => {

  const [clicked, setClicked] = useState(null);
  const [hijo, setHijo] = useState(null);

  const toggleItem = (evento) => {


    if (clicked !== null) {


      if (clicked.classList === evento.target.parentNode.classList) {

        evento.target.nextSibling.classList.remove("open");
        evento.target.parentNode.classList.remove("active");
        setHijo(null);
        return  setClicked(null);

      } else if (clicked.classList !== evento.target.parentNode.classList) {
        
        hijo.classList.remove("open");
        clicked.classList.remove("active");
        evento.target.parentNode.classList.add("active");
        evento.target.nextSibling.classList.add("open");
        setClicked(evento.target.parentNode);
      }
    }
    else{

      setClicked(evento.target.parentNode);
      setHijo(evento.target.nextSibling);
      evento.target.parentNode.classList.add("active");
      evento.target.nextSibling.classList.add("open");
      
    }
  };


  return (
    <>
      <li className="accordion_item">
        <button className="button" onClick={toggleItem}>
          {pregunta}
          <span className="control">+</span>
        </button>
        <div className="answer_wrapper">
          <p className="answer">{respuesta}</p>
        </div>
      </li>
    </>
  );
};
