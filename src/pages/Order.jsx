import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getOrder } from "../api/getOrder";

const Order = () => {
  const { orderId } = useParams();
  const { isLoading, data: order } = useQuery({
    queryKey: ["orders", orderId],
    queryFn: () => getOrder(orderId),
  });

  if (isLoading || order === undefined) {
    return <div className="w-96 mx-auto mt-6">Loading ...</div>;
  }

  // console.log("detail rendering ..");
  return (
    <div>
      <h4 className="bg-primary text-white text-center p-2">Order</h4>
      <div className="">
        <h5 className="fw-bold">OrderID: {order.orderId}</h5>
        <p className="fw-bold">Customer-Address: {order.customerAddress}</p>
        <p className="">Shipment-Price: {order.shipmentPrice} $</p>
        <p className="fw-bold">Total-Price: {order.totalPrice} $</p>
      </div>
      <div className="col-12 col-sm-12 col-md-6">
        <ul className="list-group">
          {order.items.map((item) => (
            <li key={item.productId} className="list-group-item">
              <p className="fw-bold">{item.title}</p>
              <p className="">productID: {item.productId}</p>
              <p className="">unitPrice: {item.unitPrice} $</p>
              <p className="">Quantity: {item.qty}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Order;
