import { useContext } from "react";
import { useEffect } from "react";
import { checkoutCart } from "../api/checkoutCart";
import { AppContext } from "../AppContext";
import { useNavigate } from "react-router";
import {
  useQuery,
  // useQueryClient
} from "@tanstack/react-query";
import { useParams } from "react-router-dom";

function Checkout() {
  // const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { cartId } = useParams();
  const { dispatch } = useContext(AppContext);

  const {
    isLoading,
    isSuccess,
    data: order,
  } = useQuery({
    queryKey: ["order", cartId],
    queryFn: checkoutCart,
    // queryFn: () => checkoutCart(customerId),
  });

  useEffect(() => {
    if (isSuccess) {
      // queryClient.invalidateQueries(["order"]);
      dispatch({ type: "reset" });
      navigate("/shop/orders/" + order.orderId);
    }
  }, [isSuccess]);

  if (isLoading || order === undefined) {
    return <div className="w-96 mx-auto mt-6">Loading ...</div>;
  }

  return (
    <></>
    // <div>
    //   <h4 className="bg-primary text-white text-center p-2">Order</h4>
    //   <div className="">
    //     <h5 className="fw-bold">OrderID: {order.orderId}</h5>
    //     <p className="fw-bold">Customer-Address: {order.customerAddress}</p>
    //     <p className="">Shipment-Price: {order.shipmentPrice}</p>
    //     <p className="fw-bold">Total-Price: {order.totalPrice}</p>
    //   </div>
    //   <div className="">
    //     <ul className="list-group">
    //       {order.items.map((item) => (
    //         <li key={item.productId} className="list-group-item">
    //           <p className="fw-bold">{item.title}</p>
    //           <p className="">productID: {item.productId}</p>
    //           <p className="">unitPrice: {item.unitPrice}</p>
    //           <p className="">Quantity: {item.qty}</p>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </div>
  );
}

export default Checkout;
