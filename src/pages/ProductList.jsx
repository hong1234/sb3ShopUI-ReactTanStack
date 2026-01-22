import { Link } from "react-router-dom";

function ProductList({ products }) {
  // console.log('products-page rendering ..');

  if (!Array.isArray(products)) {
    return <> </>;
  }

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
