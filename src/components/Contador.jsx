import React, { useState } from 'react'

const Contador = () => {

    const [contador, setContador] = useState(1)

    function incrementarContador() {
        setContador(contador + 1)
    }

    function decrementarContador() {
        setContador(contador - 1)
    }

  return (
    <div className="container">
        <h1>Contador: {contador}</h1>
        <button onClick={incrementarContador}>Incrementar Contador</button>
        <br/><br/>
        <button onClick={decrementarContador}>Decrementar Contador</button>
    </div>
  )
}

export default Contador