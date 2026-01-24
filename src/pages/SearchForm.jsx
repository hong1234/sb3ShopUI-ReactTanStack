import { useState, useEffect } from "react";
import { searchProducts } from "../api/searchProducts";
import {
  useQuery,
  // useQueryClient
} from "@tanstack/react-query";

const SearchForm = ({ setProducts }) => {
  // const SearchForm = ({ setSearchText }) => {
  // const queryClient = useQueryClient();
  const [filterText, setFilterText] = useState("java");
  const [ready, setReady] = useState(false);

  const submitHandle = (e) => {
    e.preventDefault();
    if (filterText.length > 0) {
      setReady(true);
    }

    // setSearchText(filterText);
    // queryClient.invalidateQueries(["products"]);
    // const cached = queryClient.getQueryData(["products"]);
    // setProducts(products);
  };

  const {
    // isLoading,
    isSuccess,
    data: products,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => searchProducts(filterText),
    enabled: ready,
  });

  useEffect(
    () => {
      if (isSuccess) {
        setReady(false);
        setProducts(products);
      }
    },
    //  [isSuccess]
  );

  // if (isPending || products === undefined) {
  //   return <div className="w-96 mx-auto mt-6">Loading ...</div>;
  // }

  return (
    <form onSubmit={submitHandle} className="input-group mb-3">
      <input
        type="text"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        className="form-control"
      />
      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
