import "./App.css";
import Header from "./components/header";
import Categories from "./components/categories";
import Products from "./components/products";
import Footer from "./components/footer";
import Cart from "./components/cart";
function App() {
  return (
    <>
      <Header />
      <Cart />
      <Categories />
      <Products />
      <Footer />
    </>
  );
}

export default App;
