import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = useSelector((state) => state.cart.totalQuantity);

  return (
    <>
      {totalItems > 0 && (
        <div className="cart">
          <h2>Your shopping cart</h2>
          <ul>
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={{
                  id: item.id,
                  title: item.name,
                  quantity: item.quantity,
                  total: item.totalPrice,
                  price: item.price,
                }}
              />
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Cart;
