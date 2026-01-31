import { useContext } from "react";
import { useEffect } from "react";
import { checkoutCart } from "../api/checkoutCart";
import { AppContext } from "../AppContext";
import { useNavigate } from "react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";

// function CheckoutButton({ cartId }) {
function CheckoutButton() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { dispatch } = useContext(AppContext);
  const {
    // isLoading,
    isSuccess,
    data: order,
    refetch,
  } = useQuery({
    // queryKey: ["order", cartId],
    queryKey: ["order"],
    queryFn: checkoutCart,
    // queryFn: () => checkoutCart(customerId),
    enabled: false,
  });

  const checkout = (e) => {
    e.preventDefault();
    refetch();
  };

  useEffect(
    () => {
      if (isSuccess) {
        dispatch({ type: "reset" });

        queryClient.removeQueries(["products"]);
        queryClient.removeQueries(["cart"]);
        queryClient.removeQueries(["order"]);
        // queryClient.resetQueries(
        //   // ["order"],
        //   ["order", cartId],
        // );
        // queryClient.clear();

        navigate("/shop/orders/" + order.orderId);
      }
    },
    // , [isSuccess]
  );

  // if (isLoading || order === undefined) {
  //   return <div className="w-96 mx-auto mt-6">Loading ...</div>;
  // }

  console.log(isSuccess);
  console.log("checkout button rendering ..");
  return (
    <>
      <button type="button" className="btn btn-secondary" onClick={checkout}>
        Checkout
      </button>
    </>
  );
}

export default CheckoutButton;
