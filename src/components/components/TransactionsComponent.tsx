import { getTransactions } from "@/utils/handleDatabase";

function calcResult(oldPrice: number, newPrice: number) {
  return ((newPrice - oldPrice) / oldPrice) * 100;
}

export default async function Transactions(props: any) {
  const data = await getTransactions();

  return (
    <div className="w-full">
      <h1>Transactions</h1>
      <ul>
        {data.map((transaction: any) => (
          <li key={transaction.id} className="space-x-12">
            <span>{transaction.symbol}</span>
            <span>{transaction.units}</span>
            <span>
              {Number(transaction.purchaseprice).toLocaleString("fi-FI", {
                style: "currency",
                currency: "USD",
              })}
            </span>
            <span>
              {calcResult(
                transaction.purchaseprice,
                props.api.filter(
                  (crypto: any) => crypto.symbol === transaction.symbol,
                )[0].priceUsd,
              ).toFixed(2)}
              %
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}