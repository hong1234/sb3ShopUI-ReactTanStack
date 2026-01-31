import { useState, useEffect } from "react";
// import { memo } from "react";
import { searchProducts } from "../api/searchProducts";
import {
  useQuery,
  // useQueryClient
} from "@tanstack/react-query";

const SearchForm = ({ setProducts }) => {
  // const queryClient = useQueryClient();
  const [filterText, setFilterText] = useState("java");

  const {
    // isLoading,
    isSuccess,
    data: products,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => searchProducts(filterText),
    enabled: false,
  });

  const submitHandle = (e) => {
    e.preventDefault();
    if (filterText.length > 0) {
      refetch();
    }
  };

  useEffect(() => {
    if (isSuccess) {
      // queryClient.invalidateQueries(["products"]);
      // queryClient.removeQueries(["products"]);
      // queryClient.resetQueries(["products"]);
      // queryClient.clear();
      setProducts(products);
    }
  });

  // if (isLoading || products === undefined) {
  //   return <div className="w-96 mx-auto mt-6">Loading ...</div>;
  // }

  console.log("form rendering ..");
  return (
    <form onSubmit={submitHandle} className="input-group mb-3">
      <input
        type="text"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        className="form-control"
      />
      <button type="submit" className="btn btn-secondary">
        Search
      </button>
    </form>
  );

  //   const { data, isLoading, refetch } = useQuery({
  //   queryKey: ["users"],
  //   queryFn: fetchUsers,
  //   enabled: false,
  // });

  // return (
  //   <div>
  //     <Link to={"/"}>home</Link>
  //     <h1>Users</h1>

  //     <button onClick={refetch}>fetch data</button>
  //     <hr />

  //     {isLoading && <h1>loading...</h1>}
  //     {data?.data.map((user) => (
  //       <p key={user.id}>{user.name}</p>
  //     ))}
  //   </div>
  // );
};

export default SearchForm;
// export default memo(SearchForm);
