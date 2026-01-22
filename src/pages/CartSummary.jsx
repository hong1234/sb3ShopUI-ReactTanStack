import { useContext } from "react";
import { AppContext } from "../AppContext";

// function CartSummary({ state }) {
function CartSummary() {
  const { state } = useContext(AppContext);
  return (
    <div className="">
      <h5>Items in Cart: {state.count}</h5>
    </div>
  );
}

export default CartSummary;
