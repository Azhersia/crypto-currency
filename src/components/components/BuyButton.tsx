"use client"

import { addTranscation } from "@/utils/handleDatabase"

function buy(symbol: string, props: any) {
  let count = prompt(`How many ${symbol}?`)
  addTranscation(Number(count), symbol)
}

export default function BuyButton(props: { symbol: string; price: string }) {
  return (
    <div className=" bg-[#ede1e1ba] flex justify-center items-center p-2 rounded cursor-pointer">
      < button onClick={() => buy(props.symbol, props.price)
      }> Buy</button >
    </div >
  )
}