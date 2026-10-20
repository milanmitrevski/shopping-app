import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggle } from "../store/ui-slice";

function Navigation() {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  function toggleShowProducts() {
    dispatch(toggle());
  }

  return (
    <div>
      <nav className="navi">
        <Link to={"/"}>
          <h1>Shopping cart</h1>
        </Link>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/cart"} className="cart-num">
          <li>Cart</li>
          <span>{cartQuantity}</span>
        </Link>
        <button onClick={toggleShowProducts}>Show products</button>
      </nav>
    </div>
  );
}

export default Navigation;
