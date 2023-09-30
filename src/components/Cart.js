import { useSelector } from "react-redux"
import ItemList from "./ItemList"
import { useDispatch } from "react-redux"
import { deleteItem } from "../utils/cartSlice"
const Cart = () =>{
    const dispatch = useDispatch()
    const handleClearCart =() =>{
        dispatch(deleteItem())
    }
    const cartItems = useSelector((store)=> store.cart.items)
    return (
        <div className="w-6/12 m-auto">
        <div className="text-center font-bold text-xl m-5">Cart</div>
        <ItemList categoryData={cartItems}/>
        {cartItems.length ==0?<h1 className="text-lg shadow-md text-center">Add Items to cart</h1>: <button className="text-white bg-red-600 rounded-md p-2 my-10" onClick={handleClearCart}>Clear Cart</button>}
        </div>
    )
}

export default Cart