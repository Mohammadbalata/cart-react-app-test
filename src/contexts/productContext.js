import { createContext, useContext } from "react";
import {productes } from "../mocks/productes"
import useCart from "../hooks/useProductsReduser";

export const productContext = createContext(null)


const ProductProvider = ({children}) => {
    const cart = useCart()
 return <productContext.Provider value={cart}>
    {children}
</productContext.Provider> }

export default ProductProvider


export const useProductContext = () => {
    return useContext(productContext)
}