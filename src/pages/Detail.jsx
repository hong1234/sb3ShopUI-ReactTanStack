import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../api/getProduct";
import AddButton from "./AddButton";

const Detail = () => {
  const { productId } = useParams();

  const { isLoading, data: product } = useQuery({
    queryKey: ["products", productId],
    queryFn: () => getProduct(productId),
  });

  if (isLoading || product === undefined) {
    return <div className="w-96 mx-auto mt-6">Loading ...</div>;
  }

  // console.log("detail rendering ..");
  return product == null ? null : (
    <div>
      <div className="card text-white bg-success mb-3">
        <div className="card-header">Detail</div>
        <div className="card-body">
          <p className="card-title fw-bold">{product.title}</p>
          <p className="card-text">{product.description}</p>
          <p className="card-text">{product.unitPrice} $</p>
          {/* <button onClick={handleAddItem}>add to cart</button> */}
          {/* <button onClick={() => mutate(productId)}>add to cart</button> */}
          <AddButton productId={productId} />
        </div>
      </div>
    </div>
  );
};

export default Detail;
