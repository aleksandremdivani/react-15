import Header from "./components/Header";
import ProductsList from "./components/ProductsList";

const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    price: 19.99,
    category: "Electronics",
    inStock: true,
  },
  {
    id: 2,
    name: "Bluetooth Headphones",
    price: 49.99,
    category: "Electronics",
    inStock: true,
  },
  {
    id: 3,
    name: "Notebook",
    price: 5.99,
    category: "Stationery",
    inStock: false,
  },
  {
    id: 4,
    name: "Phone Case",
    price: 12.5,
    category: "Accessories",
    inStock: true,
  },
  {
    id: 5,
    name: "Desk Lamp",
    price: 29.99,
    category: "Home",
    inStock: true,
  },
];
function App() {
  return <>
  <Header/>
  <ProductsList products={products}/>
  </>;
}

export default App;
