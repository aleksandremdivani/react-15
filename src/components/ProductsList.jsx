import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductsList = ({ products }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <ul className="border flex w-full h-200 flex-wrap items-center justify-center gap-3">
      {products.map((item) => (
        <li key={item.id} className="p-4 flex border w-47/100 flex-col h-60 justify-between">
          <div>
            <h2>{item.name}</h2>
            <p>Category: {item.category}</p>
            <p>{item.price}$</p>
            <p>{item.instock ? "instock" : "out of stock"}</p>
          </div>
          <button className="bg-green-500 rounded-md" onClick={() => addToCart(item)}>
            Add to cart
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ProductsList;
