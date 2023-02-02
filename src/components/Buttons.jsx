import React, { useState } from 'react'
import Percent from '../assets/icons/percent.svg'
import Divide from '../assets/icons/divide.svg'
import Multiply from '../assets/icons/multiply.svg'
import Minus from '../assets/icons/minus.svg'
import PlusMinus from '../assets/icons/plus-minus.svg'
import Plus from '../assets/icons/plus.svg'
import Equal from '../assets/icons/equal.svg'

function Buttons({ inputNum , clearInput , inputOperator , inputEqual , percentageInput , cancelEntry  }) {

  return (
    <div className="w-full justify-items-center grid grid-cols-4 gap-y-[12px] gap-x-[12px] text-2xl mt-[26px]">
        <button className="btn-black text-[#975DFA]" onClick={cancelEntry}>CE</button>
        <button className="btn-black" onClick={clearInput}>C</button>
        <button className="btn-black" onClick={percentageInput}>
          <img className='my-0 mx-auto' src={Percent} alt="" />
        </button>
        <button className="btn-purple" value="/" onClick={inputOperator}>
          <img className='my-0 mx-auto' src={Divide} alt="" />
        </button>
        <button className="btn-black" value={7} onClick={inputNum}>7</button>
        <button className="btn-black" value={8} onClick={inputNum}>8</button>
        <button className="btn-black" value={9} onClick={inputNum}>9</button>
        <button className="btn-purple" value="*" onClick={inputOperator}>
          <img className='my-0 mx-auto' src={Multiply} alt="" />
        </button>
        <button className="btn-black" value={4} onClick={inputNum}>4</button>
        <button className="btn-black" value={5} onClick={inputNum}>5</button>
        <button className="btn-black" value={6} onClick={inputNum}>6</button>
        <button className="btn-purple" value="-" onClick={inputOperator}>
          <img className='my-0 mx-auto' src={Minus} alt="" />
        </button>
        <button className="btn-black" value={1} onClick={inputNum}>1</button>
        <button className="btn-black" value={2} onClick={inputNum}>2</button>
        <button className="btn-black" value={3} onClick={inputNum}>3</button>
        <button className="btn-purple" value="+" onClick={inputOperator}>
          <img className='my-0 mx-auto' src={Plus} alt="" />
        </button>
        <button className="btn-black" id="ml">
          <img className='my-0 mx-auto' src={PlusMinus} alt="" />
        </button>
        <button className="btn-black" value={0} onClick={inputNum}>0</button>
        <button className="btn-black text-4xl" value="," onClick={inputNum}>,</button>
        <button className="btn-equal" value="+" onClick={inputEqual}>
          <img className='my-0 mx-auto' src={Equal} alt="" />
        </button>
      </div>
  )
}

export default Buttons