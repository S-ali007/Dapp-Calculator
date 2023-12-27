"use client";

import {
  addFunction,
  subFunction,
  mulFunction,
  divFunction,
} from "@/web3_function";
import { Button, Input } from "antd";
import React, { useState } from "react";

function Hello({ account, contractInstance }) {
  const [size, setSize] = useState("large");
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  async function calculatRes(operationType) {
    let operationResult = 0;

    switch (operationType) {
      case "+":
        // console.log("plus");
        operationResult = await addFunction(
          contractInstance,
          account,
          num1,
          num2
        );
        // console.log(num1, num2, "first", "second");
        console.log(operationResult, "result");
        setResult(operationResult);

        break;
      case "-":
        console.log("minus");

        operationResult = await subFunction(
          contractInstance,
          account,
          num1,
          num2
        );
        // console.log(num1, num2, "first", "second");
        setResult(operationResult);
        // console.log(operationResult);
        break;
      case "*":
        // console.log("multiply");
        operationResult = await mulFunction(
          contractInstance,
          account,
          num1,
          num2
        );
        setResult(operationResult);
        // console.log(operationResult);

        break;

      case "/":
        // console.log("divide");
        operationResult = await divFunction(
          contractInstance,
          account,
          num1,
          num2
        );
        setResult(operationResult);
        // console.log(operationResult);
        break;
    }
  }

  return (
    <>
      <h2 className="text-[28px] tracking-wider font-[700] rounded-lg">
        WEB3 Calculator
      </h2>
      {/* <Input /> */}
      <div className="mx-auto max-w-[300px] w-full border-[2px] border-[grey]  p-[20px] bg-blue-400">
        <h5>Number 1:</h5>
        <Input
          className="font-[700] text-[22px]"
          style={{ height: "50px" }}
          placeholder={"Enter First Number !"}
          onChange={(e) => setNum1(e.target.value)}
          type="number"
        />
        <h5 style={{ marginTop: "10px" }}>Number 2:</h5>
        <Input
          className="font-[700] text-[22px]"
          style={{ height: "50px" }}
          placeholder={"Enter Second Number !"}
          onChange={(e) => setNum2(e.target.value)}
          type="number"
        />
        <h5 style={{ marginTop: "10px" }}>Result:</h5>
        <Input
          className="font-[700] text-[22px]"
          style={{ height: "50px" }}
          placeholder={result}
          type="number"
        />
        <br /> <br />
        <Button
          size={size}
          style={{ marginLeft: "10px" }}
          onClick={() => calculatRes("+")}
          className="bg-gray-50 font-[700] text-[22px]   "
        >
          +
        </Button>
        <Button
          size={size}
          style={{ marginLeft: "20px" }}
          onClick={() => calculatRes("-")}
          className="bg-gray-50 font-[700] text-[22px]   "
        >
          -
        </Button>
        <Button
          size={size}
          style={{ marginLeft: "20px" }}
          onClick={() => calculatRes("*")}
          className="bg-gray-50 font-[700] text-[22px]   "
        >
          X
        </Button>
        <Button
          size={size}
          style={{ marginLeft: "20px" }}
          onClick={() => calculatRes("/")}
          className="bg-gray-50 font-[700] text-[22px]   "
        >
          /
        </Button>
      </div>
    </>
  );
}

export default Hello;
