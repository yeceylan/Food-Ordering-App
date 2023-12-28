import Cart from "./components/Cart.jsx";
import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./store/CardContext";
import {  UserprogressContextProvider } from "./store/UserProgressContext.jsx";

function App() {
  return (
    <UserprogressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart/>
      </CartContextProvider>
    </UserprogressContextProvider>
  );
}

export default App;
