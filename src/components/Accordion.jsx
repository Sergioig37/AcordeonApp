import React from "react";
import { Accordionitem } from "./Accordionitem";
import { data } from "./data";

export const Accordion = () => {



  return (
    <>
      <ul className="accordion">
        {data.map(({pregunta, respuesta}) => (
          <Accordionitem pregunta = {pregunta} respuesta={respuesta}/>
        ))}
      </ul>
    </>
  );
};
