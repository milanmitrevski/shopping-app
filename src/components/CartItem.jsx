import { useDispatch } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../store/cart-slice";
 
function CartItem({ item }) {
  const dispatch = useDispatch();
  const { title, quantity, total, price, id } = item;

  function handleAdd() {
    dispatch(addItemToCart({ title, id, price }));
  }

  function handleRemove() {
    dispatch(removeItemFromCart(id));
  }

  return (
    <li className="cart-item">
      <header className="cart-head">
        <h3>{title}</h3>
        <div>
          {total.toFixed(2)} <span>$({price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className="cart-el">
        <span>x {quantity}</span>
        <div className="cart-buttons">
          <button onClick={handleRemove}>-</button>
          <button onClick={handleAdd}>+</button>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
