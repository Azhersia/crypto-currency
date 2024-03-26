"use client"

import { addTranscation } from "@/utils/handleDatabase"

function buy(symbol: string, price: any) {
  let count = prompt(`How many ${symbol}?`)
  if (Number(count) === 0) {
    alert("Enter a valid number")
  } else {

    addTranscation(Number(count), symbol, price)
  }

}

export default function BuyButton(props: { symbol: string; price: string }) {
  console.log
  return (
    <div className=" bg-[#ede1e1ba] flex justify-center items-center p-2 rounded cursor-pointer"
      onClick={() => buy(props.symbol, props.price)}>
      < button> Buy</button >
    </div >
  )
}