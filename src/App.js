import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import About from "./components/pages/About";
import { ShoppingCartProvider } from "./context/shoppingCartContext";

export const shoppingCartContext = React.createContext();

function App() {
  return (
    <ShoppingCartProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
