import { useContext } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AppContext } from "../AppContext";
import { addItem } from "../api/addItem";
// import { isLogin } from './Auth';

export default function AddButton({ productId }) {
  // const queryClient = useQueryClient();
  const { dispatch } = useContext(AppContext);

  //   const findQty = (cartItems, id) => {
  //     const idx = cartItems.findIndex((i) => i.id === id);
  //     if (~idx) {
  //       return cartItems[idx].quantity;
  //     }
  //     return 0;
  //   };

  //   const getQty = () => {
  //     let qty = 0;
  //     const cached = queryClient.getQueryData(['items']);
  //     if (cached !== null) {
  //       qty = findQty(cached.data.items, product.id);
  //     }
  //     return qty;
  //   };

  const { mutate } = useMutation({
    mutationFn: addItem,
    onSuccess: () => {
      // queryClient.invalidateQueries(["cart"]);
      dispatch({ type: "add" });
    },
    onError: (err) => {
      console.error(err);
    },
  });

  const add = (e) => {
    e.preventDefault();
    // if (mutate.isLoading) return; // Prevent double submission
    //   if (isLogin()) {
    //     const qty = getQty();
    //     mutate({
    //       id: product.id,
    //       quantity: qty + 1,
    //       unitPrice: product.price,
    //     });
    //   } else {
    //     navigate("/login");
    //   }
    mutate(productId);
  };

  return (
    <>
      <button className="" type="button" onClick={add}>
        add to cart
      </button>
    </>
  );
}
