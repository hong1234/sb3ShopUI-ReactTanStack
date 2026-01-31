import { Link } from "react-router";

function ProductList({ products }) {
  if (!Array.isArray(products)) {
    return <> </>;
  }

  console.log("product list rendering ..");
  return (
    <div className="">
      <ul className="list-group">
        {products.map((product) => (
          <li key={product.id} className="list-group-item">
            <Link to={`${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
