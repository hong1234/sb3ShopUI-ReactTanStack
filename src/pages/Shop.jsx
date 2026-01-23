import { Outlet, Link } from "react-router-dom";
import ProductList from "./ProductList";
import SearchForm from "./SearchForm";
import CartSummary from "./CartSummary";

import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../AppContext";

function Shop() {
  const { state } = useContext(AppContext);
  const [products, setProducts] = useState([]);
  return (
    <div>
      <h4 className="bg-primary text-white text-center p-2">Shop</h4>
      <div className="row">
        <div>
          <CartSummary />
          {state.count > 0 ? (
            <Link to="/shop/products/cart" className="">
              <button type="button" className="btn btn-primary">
                Show Cart
              </button>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6">
          <SearchForm setProducts={setProducts} />
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
