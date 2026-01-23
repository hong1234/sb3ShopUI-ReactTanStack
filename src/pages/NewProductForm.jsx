import { useState } from "react";
import {
  // useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { saveProduct } from "../api/saveProduct";
import ProductList from "./ProductList";

function NewProductForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [titleInput, setTitleInput] = useState("");
  const [contentInput, setContentInput] = useState("");

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: saveProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
      clearForm();
    },
    onError: (err) => {
      console.error(err);
    },
  });

  const handleTitleChange = (e) => {
    setTitleInput(e.currentTarget.value);
  };

  const handleContentChange = (e) => {
    setContentInput(e.currentTarget.value);
  };

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const clearForm = () => {
    setTitleInput("");
    setContentInput("");
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (titleInput.trim() !== "" && contentInput.trim() !== "") {
      const newProduct = {
        title: titleInput,
        description: contentInput,
        supplier: "Hong Co",
        searchkeys: titleInput.toLowerCase(),
        image: "/images/ThinkingIn.jpg",
        unitPrice: "29.99",
        categoryId: "9d927bff-8d5b-4929-8c26-a9be00173adc",
      };

      mutate(newProduct);
      // clearForm();
    }
  };

  console.log("product-form rendering ..");
  return (
    <div>
      <h4 className="bg-primary text-white text-center p-2">Admin</h4>
      {isOpen ? (
        <form className="" onSubmit={handleSubmit}>
          <div className="col-12 col-sm-12 col-md-6">
            <label className="form-label">Title:</label>
            <input
              type="text"
              name="title"
              value={titleInput}
              onChange={handleTitleChange}
              className="form-control"
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6">
            <label className="form-label">Description:</label>
            <input
              type="text"
              name="content"
              value={contentInput}
              onChange={handleContentChange}
              className="form-control"
            />
          </div>
          <div className="">
            <button type="submit" className="btn btn-primary">
              Add Product
            </button>
          </div>
        </form>
      ) : (
        <div className="">
          <button
            type="button"
            onClick={handleClickOpen}
            className="btn btn-primary"
          >
            New Product
          </button>
        </div>
      )}
    </div>
  );
}

export default NewProductForm;
