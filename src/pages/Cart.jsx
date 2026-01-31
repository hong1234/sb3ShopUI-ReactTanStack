import { useQuery } from "@tanstack/react-query";
import { getCart } from "../api/getCart";
import RemoveButton from "./RemoveButton";
import CheckoutButton from "./CheckoutButton";

function Cart() {
  const { isLoading, data: cart } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
    // queryKey: ["cart", customerId],
    // queryFn: () => getCart(customerId),
  });

  if (isLoading || cart === undefined) {
    return <div className="w-96 mx-auto mt-6">Loading ...</div>;
  }

  return (
    <>
      {cart.items.length > 0 ? (
        <>
          {/* <CheckoutButton cartId={cart.cartId} /> */}
          <CheckoutButton />
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
      ) : // <div />
      null}
    </>
  );
}

export default Cart;
