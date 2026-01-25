import { useContext } from "react";
import { AppContext } from "../AppContext";

function CartSummary() {
  const { state } = useContext(AppContext);
  return (
    <>
      <button type="button" className="btn btn-primary">
        Items in Cart: {state.count}
      </button>
    </>
  );
}

export default CartSummary;
