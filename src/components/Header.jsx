import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const Header = () => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const { cart, totalQuantity, addToCart, decreaseQuantity } =
    useContext(CartContext);

  return (
    <header className="flex justify-between w-full p-4">
      <h1>Logo</h1>
      <div>
        <div className="flex items-center">
          <p className="border rounded-full w-5 ps-1">{totalQuantity}</p>
          <img
            className="w-20 h-15"
            src="/assets/cart-icon.svg"
            alt="cart"
            onClick={() => setCartIsShown((prev) => !prev)}
          />
        </div>
        {cartIsShown && totalQuantity > 0 && (
          <ul>
            {cart.map((item) => (
              <li>
                <h3>{item.name}</h3>
                <button onClick={() => addToCart(item)}>+</button>
                <p>{item.quantity}</p>
                <button onClick={() => decreaseQuantity(item)}>-</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
