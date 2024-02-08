import React, { useState } from "react";

export const Accordionitem = ({ pregunta, respuesta }) => {
  const [usado, setClickado] = useState(false);
  const open = "open";
  const active = "active";
  const [accordionWrapper, setAccordionWrapper] = useState("answer_wrapper");
  const [accordionItem, setAccordionItem] = useState("accordion_item");

  const mostrarRespuesta = () => {
    if (usado===false) {
      setAccordionWrapper(`answer_wrapper ${open}`);
      setAccordionItem(`accordion_item ${active}`);
      setClickado(true);
    } else {
      setAccordionWrapper("answer_wrapper");
      setAccordionItem("accordion_item");
      setClickado(false);
    }
  };
  return (
    <>
      <li className={accordionItem}>
        <button className="button" onClick={mostrarRespuesta}>
          {pregunta}
        </button>
        <div className={accordionWrapper}>
          <p className="answer">{respuesta}</p>
        </div>
      </li>
    </>
  );
};
