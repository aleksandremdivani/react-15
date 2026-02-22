import { createContext, useEffect, useState } from "react";

const CartContext = createContext();
const savedCart = localStorage.getItem("cart");

const CardProvider = ({ children }) => {
  const [cart, setCart] = useState(JSON.parse(savedCart) || []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const addToCart = (product) => {
    setCart((prevCart) => {
      const exists = prevCart.find((item) => item.id === product.id);

      if (exists) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };
  const decreaseQuantity = (product) => {
    setCart((prevCart) => {
     const currentItem = prevCart.find((item) => item.id === product.id);
      if (currentItem.quantity === 1) {
        return prevCart.filter((item) => item.id !== product.id);
      }
      return prevCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      );
    });
  };
  
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <CartContext.Provider
      value={{ cart, setCart, addToCart, decreaseQuantity, totalQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CardProvider, CartContext };
