import { useDispatch } from "react-redux";
import { addItemToCart } from "../store/cart-slice";

function ProductItem({ item }) {
  const dispatch = useDispatch();
  const { title, id, price } = item;

  function handleAddToCart() {
    dispatch(addItemToCart({ title, id, price }));
  }

  return (
    <li>
      <div className="product">
        <img src={item.image} alt={item.title} />
        <h3>{item.title}</h3>
        <p>${item.price}</p>
        <button onClick={handleAddToCart}>Add to cart</button>
      </div>
    </li>
  );
}

export default ProductItem;
