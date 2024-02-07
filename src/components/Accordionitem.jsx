import React, { useState } from 'react'

export const Accordionitem = ({pregunta, respuesta}) => {

  const [clickado, setClickado] = useState(false);


  return (
   <>
      <li className='accordion_item'>
        <button className='button'>{pregunta}</button>
        <div className='answer'>{respuesta}</div>
      </li>
   </>
  )
}
