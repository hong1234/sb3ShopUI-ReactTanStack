import { useState, useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { searchProducts } from "../api/searchProducts";

const SearchForm = ({ setProducts }) => {
  // const SearchForm = ({ setSearchText }) => {
  const queryClient = useQueryClient();
  const [filterText, setFilterText] = useState("java");
  const submitHandle = (e) => {
    e.preventDefault();
    // setSearchText(filterText);
    queryClient.invalidateQueries(["products"]);
    // const cached = queryClient.getQueryData(["products"]);
    // setProducts(products);
  };

  const {
    isLoading,
    isSuccess,
    data: products,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => searchProducts(filterText),
  });

  useEffect(
    () => {
      if (isSuccess) {
        setProducts(products);
      }
    },
    // , [isSuccess]
  );

  if (isLoading || products === undefined) {
    return <div className="w-96 mx-auto mt-6">Loading ...</div>;
  }

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
