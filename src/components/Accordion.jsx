import React from "react";
import { Accordionitem } from "./Accordionitem";
import {data} from "./data.json";

export const Accordion = () => {

  
  return (
    <>
      <ul className="accordion">
        {data.map(({pregunta, respuesta}, index) => (
          <Accordionitem indice={index} pregunta = {pregunta} respuesta={respuesta}/>
        ))}
      </ul>
    </>
  );
};

