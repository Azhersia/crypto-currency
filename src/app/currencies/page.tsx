import React from 'react'

export default async function currencies() {
  const res = await fetch('https://api.coincap.io/v2/assets');
  const data = await res.json();
  console.log(data.data)
  return (
    <div>

      {data.data.map((currency: any) => (
        <div key={currency.id}>
          <h1>Currency: {currency.symbol}</h1>
          <h1>Currency: {currency.symbol}</h1>
          <h1>Currency: {currency.symbol}</h1>
        </div>
      ))}
    </div>
  )
}
