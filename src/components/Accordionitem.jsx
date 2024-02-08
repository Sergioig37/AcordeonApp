import React, { useState } from "react";

export const Accordionitem = ({ pregunta, respuesta }) => {
  const [usado, setClickado] = useState(false);
  const open = "open";
  const active = "active";
  const [elementoActivo, setElementoActivo] = useState();
  

  const mostrarRespuesta = (evento) => {
    



    if (usado===false) {
      evento.target.parentNode.classList.add(active);
      evento.target.nextSibling.classList.add(open);
      setClickado(true);
    } else {
      evento.target.parentNode.classList.remove(active);
      evento.target.nextSibling.classList.remove(open);
      setClickado(false);
    }
  };
  return (
    <>
      <li className="accordion_item">
        <button className="button" onClick={mostrarRespuesta}>
          {pregunta}
        </button>
        <div className="answer_wrapper">
          <p className="answer">{respuesta}</p>
        </div>
      </li>
    </>
  );
};
