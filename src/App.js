import React from 'react';
import './App.css';
import Builder from './components/Builder';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Receipt from './components/Receipt';


/* Arreglo de precios finales de cada hamburguesa */
// const initialState = []

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'addBurger':
//       /** Se agregan nuevos elementos al arreglo
//        * OJO: la acción debe contener una propiedad 'price'
//        * que contiene información
//        */
//       const newState = state.concat([action.price])
//       return newState;
//     case 'reset':
//       return initialState
//     default:
//       return state;
//   }
// }

// const store = createStore(reducer);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Builder />} />
        <Route exact path="/receipt" element={<Receipt />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;