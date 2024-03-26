import BuyButton from '@/components/BuyButton';
import SlideshowComponent from '@/components/SlideshowComponent'
import Transactions from '@/components/TransactionsComponent';
import React from 'react'

type crypto = {
  id: string,
  symbol: string,
  name: string,
  priceUsd: string,
  changePercent24Hr: string,
}


export default async function page() {

  const res = await fetch('https://api.coincap.io/v2/assets');
  const data = await res.json();

  return (
    <div >

      <SlideshowComponent>
        {data.data.map((crypto: crypto) => (
          <div key={crypto.id} className='bg-gradient-to-tr from-[#dbd6c3] to-[#9cc18e] py-2 px-4 rounded-xl flex flex-col  '>
            <h1>NAME: <b>{crypto.name}</b></h1>
            <span>SYMBOL: <b>{crypto.symbol}</b></span>
            <span>
              Price: <b>{Number(crypto.priceUsd).toLocaleString("fi-FI", {
                style: "currency",
                currency: "USD",
              })}
              </b>
            </span>
            <span> Price Change: <b>{Number(crypto.changePercent24Hr).toFixed(2)}%</b></span>
            <BuyButton symbol={crypto.symbol} price={crypto.priceUsd} />
          </div>
        ))}
      </SlideshowComponent>

      <div className='flex flex-col justify-center items-center mt-10'>
        <div className='flex flex-col'>

          <Transactions api={data.data} />

        </div>
      </div>

    </div>
  )
}
