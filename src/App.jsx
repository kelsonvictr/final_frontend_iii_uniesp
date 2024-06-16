import React from 'react'
import Contador from './components/Contador'
import './App.css'

const App = () => {
  return (
    <div className="container">
      <h1>Exemplo de Contador com useState</h1>
      <Contador />
    </div>
  )
}

export default App