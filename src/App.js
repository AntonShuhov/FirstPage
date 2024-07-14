import React from "react";
import { Routes, Route } from "react-router-dom";

import Main from "./components/Main/Main";
import About from "./components/About/About";
import Catalog from "./components/Catalog/Catalog";
import Solds from "./components/Solds/Solds";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";

function App() {
  return (
      <>
            <div className="App">

            </div>
          <Routes>
              <Route path="/" element={<Main />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/catalog" element={<Catalog />}/>
              <Route path="/solds" element={<Solds />}/>
              <Route path="*" element={<NotFoundPage />}/>
          </Routes>
      </>
  );
}

export default App;