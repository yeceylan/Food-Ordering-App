import Cart from "./components/Cart.jsx";
import Checkout from "./components/Checkout.jsx";
import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./store/CardContext";
import {  UserprogressContextProvider } from "./store/UserProgressContext";

function App() {
  return (
    <UserprogressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart/>
        <Checkout/>
      </CartContextProvider>
    </UserprogressContextProvider>
  );
}

export default App;
