import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCart } from "../api/getCart";
import RemoveButton from "./RemoveButton";
import { useNavigate } from "react-router";
// import CartSummary from "./CartSummary";

function Cart() {
  const navigate = useNavigate();

  const { isLoading, data: cart } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
    // queryKey: ["cart", customerId],
    // queryFn: () => getCart(customerId),
  });

  const checkout = (e) => {
    e.preventDefault();
    navigate("/shop/cart/" + cart.cartId + "/checkout");
  };

  if (isLoading || cart === undefined) {
    return <div className="w-96 mx-auto mt-6">Loading ...</div>;
  }

  return (
    <>
      {cart.items.length > 0 ? (
        <>
          {/* <h5 className="bg-primary text-white text-center p-2">Cart</h5> */}
          <button
            type="button"
            className="btn btn-secondary"
            onClick={checkout}
          >
            Checkout
          </button>
          <div className="">
            <ul className="list-group">
              {cart.items.map((item) => (
                <li key={item.productId} className="list-group-item">
                  <p className="fw-bold">{item.title}</p>
                  <p className="">productID: {item.productId}</p>
                  <p className="">unitPrice: {item.unitPrice} $</p>
                  <p className="">Quantity: {item.qty}</p>
                  <RemoveButton productId={item.productId} />
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <div />
      )}
    </>
  );
}

export default Cart;
