import { useParams } from "react-router";
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

  return product == null ? null : (
    <div className="row">
      <img
        className="col-12 col-sm-4 col-md-4"
        src={product.image}
        alt="photo"
      />
      <div className="col-12 col-sm-8 col-md-8">
        {/* <div className="bg-primary text-white text-center p-1" /> */}
        <p className="card-title fw-bold">{product.title}</p>
        <p className="card-text">{product.description}</p>
        <p className="card-text">{product.unitPrice} $</p>
        {/* <button onClick={handleAddItem}>add to cart</button> */}
        {/* <button onClick={() => mutate(productId)}>add to cart</button> */}
        <AddButton productId={productId} />
      </div>
    </div>
  );
};

export default Detail;
