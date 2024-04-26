import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Hero from "./Hero";
import Anagram from "./assignment1/Anagram.jsx";
import Bodmas from "./assignment2/Bodmas.jsx";
import Suffle from "./assignment3/Suffle.jsx";
import NumToWord from "./assignment4/NumToWord.jsx";
import CurrencyConv from "./assignment5/CurrencyConv.jsx";

const Navbar = () => {
  return (
    <Router>
      <div className="max-w-[1240px] mx-auto">
        <nav
          className="flex justify-between items-center h-14 font-bold text-xl
        max-w-[1240px] p-4 text-gray-500 border-b-2 rounded-3xl border-b-gray-500 bg-gradient-to-b from-white to-green-200"
        >
          <ul className="list-none flex justify-start items-center space-x-8">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/anagram">Assignment1</Link>
            </li>
            <li>
              <Link to="/bodmas">Assignment2</Link>
            </li>
            <li>
              <Link to="/suffle">Assigment3</Link>
            </li>
            <li>
              <Link to="/words">Assigment4</Link>
            </li>
            <li>
              <Link to="/currencyConvert">Assigment5</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" exact element={<Hero />} />
          <Route path="/anagram" element={<Anagram />} />
          <Route path="/bodmas" element={<Bodmas />} />
          <Route path="/suffle" element={<Suffle />} />
          <Route path="/words" element={<NumToWord />} />
          <Route path="/currencyConvert" element={<CurrencyConv />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Navbar;
