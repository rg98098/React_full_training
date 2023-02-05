import { useSelector } from "react-redux";

const Cart = () => {
  // cart is subscribing to items only, not whole store - To avoid re-rendering 
  // Always subscribe to specific portion of your app
  const cartItems = useSelector(store=> store.cart.items)
  console.log("cartItems",cartItems);
  return (
    <div>
      Cart
    </div>
  )
}

export default Cart;