import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as Element from 'react-bootstrap';
import { IntlProvider } from 'react-intl';
import ListBands from "./components/ListBands/listbands"
let usrlang = navigator.language || navigator.userLanguage;
function App() {
  return (
    <Element.Container className='main-container' >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListBands />} />
        </Routes>
      </BrowserRouter>
    </Element.Container >
  );
}

export default App;
