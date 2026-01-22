import { useContext } from "react";
import { AppContext } from "../AppContext";

function CartSummary() {
  const { state } = useContext(AppContext);
  return (
    <>
      <button type="button" className="btn btn-secondary">
        Items in Cart: {state.count}
      </button>
    </>
  );
}

export default CartSummary;
