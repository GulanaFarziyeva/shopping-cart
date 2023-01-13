import { ChevronUp, ChevronDown } from "../../assets/style/icons/icons";
import { useDispatch } from "react-redux";

import { removeItem, increase, descrease } from "./cartSlice";

const CartItem = ({ id, title, price, img, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className="flex gap-10 mb-3 items-center ">
      <img className="lg:w-1/12 md:w-1/6 w-1/5" src={img} alt={title} />
      <div>
        <h5 className="font-semibold text-base">{title}</h5>
        <p className="text-sm text-zinc-500 font-medium">${price}</p>
        <button
          className="text-gray-500 text-sm font-medium tracking-widest"
          onClick={() => dispatch(removeItem(id))}
        >
          remove
        </button>
      </div>
      <div className="ml-auto flex flex-col justify-center items-center">
        <button onClick={() => dispatch(increase({ id }))}>
          <ChevronUp />
        </button>

        <p>{amount}</p>

        <button
          onClick={() => {
            if (amount === 1) {
              return dispatch(removeItem(id));
            }
            dispatch(descrease({ id }));
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
