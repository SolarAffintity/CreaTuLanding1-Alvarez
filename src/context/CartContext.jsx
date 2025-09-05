import { createContext, useContext, useEffect, useState } from 'react'
const CartCtx = createContext()
export const useCart = () => useContext(CartCtx)

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try { return JSON.parse(localStorage.getItem('cart') || '[]') } catch { return [] }
  })
  useEffect(()=>{ localStorage.setItem('cart', JSON.stringify(items)) },[items])

  const addItem = (item) => {
    setItems(prev => {
      const i = prev.findIndex(p => p.id === item.id)
      if (i >= 0) { const copy=[...prev]; copy[i]={...copy[i], qty:(copy[i].qty||1)+(item.qty||1)}; return copy }
      return [...prev, {...item, qty:item.qty||1}]
    })
  }
  const removeItem = id => setItems(prev => prev.filter(p => p.id !== id))
  const clear = () => setItems([])
  const total = items.reduce((a,i)=>a+i.price*i.qty,0)
  const count = items.reduce((a,i)=>a+i.qty,0)

  return <CartCtx.Provider value={{ items, addItem, removeItem, clear, total, count }}>{children}</CartCtx.Provider>
}
