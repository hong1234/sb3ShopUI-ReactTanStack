import { useContext } from "react";
// import { useNavigate } from "react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AppContext } from "../AppContext";
import { removeItem } from "../api/removeItem";
// import { isLogin } from './Auth';

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

    // if (e && e.stopPropagation) e.stopPropagation();
    // e.cancelBubble = true;
    mutate(productId);
  };

  //   const handleClick = (productId, e) => {
  //     if(e && e.stopPropagation) e.stopPropagation();
  //     mutate(productId)
  //   }

  return (
    <>
      <button className="" type="button" onClick={remove}>
        remove one
      </button>
    </>
  );
}

// memo(AddButton);
