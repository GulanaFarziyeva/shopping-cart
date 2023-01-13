import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import "./assets/style/index.css";
import AppHeader from "./components/layout/AppHeader";
import CartContainer from "./features/cart/CartContainer";
import { calculateTotals } from "./features/cart/cartSlice";
import Modal from "./features/modal/Modal";

const App = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <main className="bg-gray-100 min-h-screen overflow-x-hidden">
      {isOpen && <Modal />}

      <AppHeader />
      <CartContainer />
    </main>
  );
};

export default App;
