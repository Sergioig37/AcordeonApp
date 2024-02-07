import React from 'react'
import { Accordionitem } from './Accordionitem';
import { data } from './data';


export const Accordion = () => {
  return (
    <>
        Accordion
        {data.map(objeto =>{
            <Accordion acordeon= {objeto}/>
        }
          )}
    </>
  )
}
