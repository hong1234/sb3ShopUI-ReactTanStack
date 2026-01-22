import { Outlet, Link } from "react-router-dom";
import ProductList from "./ProductList";
import CartSummary from "./CartSummary";
import { getProducts } from "../api/getProducts";
import {
  useQuery,
  // useMutation,
  // useQueryClient
} from "@tanstack/react-query";

function Shop() {
  const { isLoading, data: products } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading || products === undefined) {
    return <div className="w-96 mx-auto mt-6">Loading ...</div>;
  }

  // console.log("shop rendering ..");
  return (
    <div>
      <h4 className="bg-primary text-white text-center p-2">Shop</h4>
      <CartSummary />
      <div>
        <Link to="/shop/cart" className="">
          <button type="button" className="btn btn-primary">
            Go to Cart
          </button>
        </Link>
      </div>

      <div className="row">
        <div className="col-12 col-sm-12 col-md-6">
          <ProductList products={products} />
        </div>
        <div className="col-12 col-sm-12 col-md-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Shop;
