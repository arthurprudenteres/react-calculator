import React from 'react'

function Screen({ num , result, operator, buffer }) {
  return (
    <div className="flex justify-between px-[22px] h-[86px] max-w-[288px]">
      <span className="self-end text-3xl font-thin text-[#6B6B6B]" id="screen-operator"> = </span>
      <div className="self-end">
        <p className="text-[#6B6B6B] text-xl text-right" id="screen-last">{(result) || (buffer+operator)}</p>
        <p className="mt-2 text-4xl text-right" id="screen-actual">{num}</p>
      </div>
    </div>
  )
}

export default Screen