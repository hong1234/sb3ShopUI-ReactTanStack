import axios from "axios";

const addUrl = "http://localhost:8000/api/v1/products";

export async function saveProduct(product) {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    auth: {
      username: "admin",
      password: "admin",
    },
  };

  const res = await axios.post(`${addUrl}`, product, options);
  return res.data;
}
