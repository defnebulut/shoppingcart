import {ReactNode, createContext,useContext,useState} from "react"
import { ShoppingCart } from "../components/ShoppingCart"
import { useLocal } from "../hooks/useLocal"

type ShoppingCartProviderProps={
    children: ReactNode
}

type CartItem={
    id:number
    quantity:number
}
type shopcartcontext={
    openCart:()=>void
    closeCart:()=>void
    getItemQuantity:(id:number)=> number
    increaseQuantity:(id:number) => void
    decreaseQuantity:(id:number) => void
    removeFromCart:(id:number) => void
    cartQuantity:number
    cartItems:CartItem[]
}
const shopcartcontext = createContext({} as shopcartcontext)
export function useShoppingCart(){
    return useContext(shopcartcontext)

}

export function ShoppingCartProvider({children}:
    ShoppingCartProviderProps){
        const[isOpen,setIsOpen]=useState(false)
        const[cartItems,setCartItems]=useLocal<CartItem[]>("shopping-cart",[])
        const cartQuantity=cartItems.reduce(
            (quantity,item)=> item.quantity+ quantity,0
        )
        const openCart=()=>setIsOpen(true)
        const closeCart=() => setIsOpen(false)
        function getItemQuantity(id:number){
            return cartItems.find(item=>item.id===id)?.quantity || 0
        }
        function increaseQuantity(id:number){
            setCartItems(currItems=>{
                if(currItems.find(item=> item.id ===id) ==null){
                    return [...currItems,{id,quantity:1}]
                }else {
                    return currItems.map(item=>{
                        if(item.id ===id){
                            return{...item,quantity:item.quantity+1}
                        }else {
                            return item
                        }
                    })
                }
            })
        } function decreaseQuantity(id: number) {
            setCartItems(currItems => {
              if (currItems.find(item => item.id === id)?.quantity === 1) {
                return currItems.filter(item => item.id !== id)
              } else {
                return currItems.map(item => {
                  if (item.id === id) {
                    return { ...item, quantity: item.quantity - 1 }
                  } else {
                    return item
                  }
                })
              }
            })
          }
          function removeFromCart(id: number) {
            setCartItems(currItems => {
              return currItems.filter(item => item.id !== id)
            })
          }
        
     return <shopcartcontext.Provider value={{getItemQuantity,increaseQuantity,decreaseQuantity,removeFromCart,openCart,closeCart,cartItems,cartQuantity}}>
        {children}
        <ShoppingCart isOpen={isOpen} />
    </shopcartcontext.Provider>
}