import { Outlet, Link } from "react-router-dom";
import ProductList from "./ProductList";
import SearchForm from "./SearchForm";
import CartSummary from "./CartSummary";

import { useState } from "react";

function Shop() {
  const [products, setProducts] = useState([]);
  return (
    <div>
      <h4 className="bg-primary text-white text-center p-2 col-12 col-sm-12 col-md-6">
        Shop
      </h4>
      <div>
        <p>
          <CartSummary />
          <Link to="/shop/cart" className="">
            <button type="button" className="btn btn-primary">
              Go to Cart
            </button>
          </Link>
        </p>
      </div>

      {/* <div className="row"> */}
      <div class="callout clearfix">
        <div className="col-12 col-sm-12 col-md-6 float-left">
          <SearchForm setProducts={setProducts} />
          {/* <SearchForm setSearchText={setSearchText} /> */}
        </div>
        <div className="col-12 col-sm-12 col-md-6 float-left">
          {/* <SearchForm setProducts={setProducts} /> */}
          <ProductList products={products} />
        </div>
        <div className="col-12 col-sm-12 col-md-6 float-left">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Shop;
