import React from "react";
import { Accordionitem } from "./Accordionitem";
import { data } from "./data";

export const Accordion = () => {
  return (
    <>
      <ul className="accordion">
        {
        data.map((objeto) => (
          <li>
             <Accordionitem acordeon={objeto} />
          </li>
         
        )
        )
        }
      </ul>
    </>
  );
};
