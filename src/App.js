import React, {Component} from 'react'
import './App.css';

import Conversor from "./componentes/conversor"

function App() {
  return (
    <div className="App">
          <Conversor moedaA="USD" moedaB="BRL"></Conversor>
          <Conversor moedaA="EUR" moedaB="BRL"></Conversor>
          <Conversor moedaA="CAD" moedaB="BRL"></Conversor>
    </div>
  );
}

export default App;
