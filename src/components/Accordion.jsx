import React from "react";
import { Accordionitem } from "./Accordionitem";
import { data } from "./data.json";


export const Accordion = () => {
  

  return (
    <>
      <ul className="accordion">
        {data.map((objeto, index) => (
          <Accordionitem
            key={index}
            pregunta={objeto.pregunta}
            respuesta={objeto.respuesta}
          />
        ))}
      </ul>
    </>
  );
};
