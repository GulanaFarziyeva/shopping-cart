import { useSelector } from "react-redux";

import { ShoppingCard } from "../../assets/style/icons/icons";

const AppHeader = () => {
  const { amount } = useSelector((state) => state.cart);

  return (
    <div className="bg-slate-50 lg:px-80 md:px-52 sm:px-24 px-10 py-3 flex items-center justify-between">
      <h1 className="text-l font-medium uppercase">Your Cart</h1>
      <div className="relative">
        <ShoppingCard className="text-2xl font-medium" />
        <p className="absolute left-5 bottom-2.5 text-base font-bold ">
          {amount}
        </p>
      </div>
    </div>
  );
};

export default AppHeader;
