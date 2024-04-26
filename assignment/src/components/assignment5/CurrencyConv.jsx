import React, { useState } from "react";

const CurrencyConv = () => {
  // State to store the input number and formatted currency
  const [numberInput, setNumberInput] = useState("");
  const [currencyOutputUS, setCurrencyOutputUS] = useState("");
  const [currencyOutputNP, setCurrencyOutputNP] = useState("");

  // Function to handle number input change
  const handleInputChange = (event) => {
    const inputNumber = event.target.value;
    setNumberInput(inputNumber);

    // Format the input number to currency format
    const formattedUSCurrency = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD", // Change 'USD' to your desired currency
    }).format(inputNumber);

    setCurrencyOutputUS(formattedUSCurrency);

    // Format the input number to currency format
    const formattedNPCurrency = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "NPR", // Change 'USD' to your desired currency
    }).format(inputNumber);

    setCurrencyOutputNP(formattedNPCurrency);
  };

  return (
    <div
      className=" mt-[-96px] w-full h-screen mx-auto text-center 
        flex flex-col justify-center"
    >
      <h1 className="md:text-3xl sm:text-2xl text-xl font-bold md:py-6">
        Format a monetary value in numbers to be separated by commas, if the
        number has a decimal point the fractions should be limited to two digits
      </h1>
      <div className="md:text-2xl text-base font-bold text-gray-500 md:p-4 pl-2">
        <label htmlFor="numberInput">Enter number:</label>
        <input
          type="number"
          id="numberInput"
          value={numberInput}
          onChange={handleInputChange}
        />
      </div>

      <div className="md:text-2xl text-base font-bold text-gray-500 md:p-4 pl-2">
        International units
        <span id="currencyOutput1">{currencyOutputUS}</span>
      </div>
      <div className="md:text-2xl text-base font-bold text-gray-500 md:p-4 pl-2">
        Nepali unit
        <span id="currencyOutput3">{currencyOutputNP}</span>
      </div>
    </div>
  );
};

export default CurrencyConv;
