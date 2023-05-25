import Cart from "../pages/Cart"
import Home from "../pages/Home"

export const  PATHS ={
    HOME:"/",
    CART:"/cart"
}

export const router = [
    { index : true , element : <Home /> },
    { path : PATHS.CART , element : <Cart /> },
]