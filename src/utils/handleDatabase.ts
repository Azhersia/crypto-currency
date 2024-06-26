'use server'
import { db } from './db'

export async function getData() {
  const data = await db.query('SELECT * FROM projects')
  return data.rows
}

export async function addTranscation(count: number, symbol: string, price: any) {
  console.log("buying", count, "of", symbol);
  console.log(price)
  try {
    await db.query("INSERT INTO transactions (units, symbol, purchaseprice) VALUES ($1, $2, $3)", [count, symbol, Number.parseFloat(price)])
    return 'Saved Successfully'
  } catch (error) {
    console.log(error);
    return 'Didnt save'
  }
}

export async function getTransactions() {
  const res = await db.query('SELECT * FROM transactions')
  return res.rows
}