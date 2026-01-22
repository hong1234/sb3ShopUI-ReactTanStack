import { useContext } from "react";
// import { useNavigate } from "react-router";
import { AppContext } from "../AppContext";
// import { isLogin } from './Auth';
import { removeItem } from "../api/removeItem";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function RemoveButton({ productId }) {
  // const navigate = useNavigate();
  const queryClient = useQueryClient();
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
    mutationFn: removeItem,
    onSuccess: () => {
      queryClient.invalidateQueries(["cart"]);
      dispatch({ type: "delete" });
      //   navigate("/shop/products");
    },
    onError: (err) => {
      console.error(err);
      // setMsg(res && typeof res === 'string' ? res : res.error.message);
    },
  });

  const remove = (e) => {
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
      <button className="" type="button" onClick={remove}>
        remove one
      </button>
    </>
  );
}
