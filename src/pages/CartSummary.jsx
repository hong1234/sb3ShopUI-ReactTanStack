import { useContext } from "react";
import { AppContext } from "../AppContext";

function CartSummary() {
  const { state } = useContext(AppContext);
  return (
    <>
      <h5>Items in Cart: {state.count}</h5>
    </>
  );
}

export default CartSummary;
