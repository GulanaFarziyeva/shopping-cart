import { useSelector, useDispatch } from "react-redux";

import CartItem from "./CartItem";
import { openModal } from "../modal/modalSlice";

const CartContainer = () => {
  const { amount, total, cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (amount < 1) {
    return (
      <section className="cart mt-14">
        <header className="flex  flex-col gap-5 items-center">
          <h2 className=" text-2xl tracking-widest ">Your Bag</h2>
          <h4 className="text-slate-500 tracking-widest">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart mt-10 flex w-2/3 flex-col m-auto">
      <header>
        <h2 className="font-medium text-center text-2xl tracking-widest mb-10">
          Your Bag
        </h2>
      </header>
      <div>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <footer className="flex flex-col gap-10">
        <div className="flex justify-between">
          <h4 className="font-medium text-l">Total</h4>
          <span className="font-medium text-l">${total}</span>
        </div>
        <button
          className="
            border border-red-900 px-12 py-2 mb-10 
            uppercase text-sm font-semibold rounded  
            m-auto text-red-900
            hover:bg-red-900 hover:text-white
          "
          onClick={() => dispatch(openModal())}
        >
          Clear Cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
