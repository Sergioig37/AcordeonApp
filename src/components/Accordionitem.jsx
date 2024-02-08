import React, { useState } from 'react'

export const Accordionitem = ({pregunta, respuesta}) => {

  const [clickado, setClickado] = useState(false);
  const [cerrado, setCerrado] = useState("answer_wrapper");


  const mostrarRespuesta = () => {
   
  }


  console.log(pregunta)
  return (
   <>
      <li className='accordion_item'>
        <button className='button' onClick={mostrarRespuesta}>
          {pregunta}
        </button>
        <div className={cerrado}>
          <p className='answer '>{respuesta}</p>
        </div>
      </li>
   </>
  )
  }