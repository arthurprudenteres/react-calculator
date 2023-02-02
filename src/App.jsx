import { useState } from "react";
import Screen from "./components/Screen"
import Buttons from "./components/Buttons"

function App() {
  const [num, setNum] = useState(0);
  const [buffer, setBuffer] = useState(0);
  const [operator, setOperator] = useState(0);
  const [result, setResult] = useState(0);

  //preciso tirar o RESET do num após o inputOperator
  const inputNum = (e) => {
    let input = e.target.value;
    num === 0 
    ? setNum(input)
    : setNum(num + input);
  }

  const clearInput = () => {
    setBuffer(0)
    setResult(0)
    setOperator(0)
    setNum(0);
  }

  const inputOperator = (e) => {
    let operatorInput = e.currentTarget.value;
    setOperator(operatorInput);
    setBuffer(num);
    setNum(0);
  }

  const inputEqual = () => {
    setResult(buffer+operator+num)
    if ( operator === "/" ) {
      setNum(buffer / num) 
    } else if ( operator === "*") {
      setNum(buffer * num)
    } else if ( operator === "-") {
      setNum(buffer - num)
    } else if ( operator === "+") {
      setNum(parseFloat(buffer) + parseFloat(num))
    }
    setBuffer(num)
    setOperator(0)
  }

  
  
  

  return (
    <div className="App w-full h-screen bg-gradient-to-r from-[#807ECE] to-[#8E7ECE] flex justify-center items-center">
      <div className="p-8 pt-[54px] bg-[#2D2A37] rounded-[48px] custom-shadow text-[#EBEBEB]">
      <Screen num={num} operator={operator} buffer={buffer} result={result}/>
      <Buttons inputNum={inputNum} clearInput={clearInput} inputOperator={inputOperator} inputEqual={inputEqual}/>
      </div>
    </div>
  )
}

export default App
