import React from "react";
import { infixToPostfix, evaluatePostfix } from "./bodmas";

const Bodmas = () => {
  let expression = "3 x (2 + 4) + 5 ^ 2";
  let postfix = infixToPostfix(expression);
  let result = evaluatePostfix(postfix);
  return (
    <div
      className=" mt-[-96px] w-full h-screen mx-auto text-center 
    flex flex-col justify-center"
    >
      <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold md:py-6">
        Evaluate given expression using BODMAS rule.
      </h1>

      <p className="md:text-2xl text-base font-bold text-gray-500 md:p-4 pl-2">
        {expression} has BODMAS value : {result}
      </p>
    </div>
  );
};

export default Bodmas;
