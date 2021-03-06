import React, {Component} from 'react'
import './App.css';

import Conversor from "./componentes/conversor"
import Header from "./componentes/header"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="linha">
          <Conversor moedaA="USD" moedaB="BRL"></Conversor>
          <Conversor moedaA="BRL" moedaB="USD"></Conversor>
      </div>
      <div className="linha">
          <Conversor moedaA="EUR" moedaB="BRL"></Conversor>
          <Conversor moedaA="BRL" moedaB="EUR"></Conversor>
      </div>
      <div className="linha">
          <Conversor moedaA="CAD" moedaB="BRL"></Conversor>
          <Conversor moedaA="BRL" moedaB="CAD"></Conversor>
      </div> 
    </div>
  );
}

export default App;
