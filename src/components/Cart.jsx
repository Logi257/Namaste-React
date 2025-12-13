import { useDispatch, useSelector } from "react-redux";
import CartItemList from "./CartItemList";
import { clearCart } from "../../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  //Subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <div className="flex gap-6 justify-center">
        <h1 className="text-2xl font-bold">Cart Items</h1>
        <button
          className="p-2 m-2 bg-black text-white rounded-lg cursor-pointer"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
      <div className="w-6/12 m-auto mt-5">
        {cartItems.length === 0 ? (
          <Link to="/">
            <button className="p-3 mt-3 bg-green-400 text-white rounded-lg cursor-pointer">
              Add items to your cart
            </button>
          </Link>
        ) : (
          <CartItemList items={cartItems} />
        )}
      </div>
    </div>
  );
};
export default Cart;
