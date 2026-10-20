import { useLoaderData } from "react-router-dom";
import ProductItem from "../components/ProductItem";
import { useSelector } from "react-redux";

function Home() {
  const { items } = useLoaderData();
  const showProducts = useSelector((state) => state.ui.productsAreVisible);

  return (
    <>
      {showProducts && (
        <ul className="products">
          {items.map((item) => (
            <ProductItem key={item.id} item={item} />
          ))}
        </ul>
      )}
    </>
  );
}

export default Home;

async function loadItems() {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) throw Error("Failed getting products");
  const data = await response.json();
  return data;
}

export async function loader() {
  return {
    items: await loadItems(),
  };
}
