import { useDispatch } from "react-redux";

import { clearCartItems } from "../cart/cartSlice";
import { closeModal } from "./modalSlice";

const Modal = () => {
  const dispatch = useDispatch();

  return (
    <aside
      className="
          bg-white absolute top-[50%] left-[50%] 
            translate-y-[-50%] translate-x-[-50%]
            p-10"
    >
      <div>
        <h4 className="font-semibold mb-10 tracking-widest text-center">
          Remove all items from your shopping cart?
        </h4>
        <div className="text-center">
          <button
            type="button"
            className="  
              border border-cyan-600 text-cyan-600 
              px-5 py-1 rounded uppercase text-sm 
              font-medium tracking-wider mr-10
              hover:bg-cyan-600 hover:text-white"
            onClick={() => {
              dispatch(clearCartItems());
              dispatch(closeModal());
            }}
          >
            Confirm
          </button>
          <button
            className="
              border border-rose-700 text-rose-700 
              px-5 py-1 rounded uppercase text-sm 
              font-medium tracking-wider
              hover:bg-rose-700 hover:text-white"
            onClick={() => dispatch(closeModal())}
          >
            Cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
