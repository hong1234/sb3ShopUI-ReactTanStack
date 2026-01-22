import axios from "axios";

const productUrl = "http://localhost:8000/api/v1/products/";

export const getProduct = async (productId) => {
  const options = {
    headers: {
      // 'Content-Type': 'application/json'
      Accept: "application/json",
    },
    auth: {
      username: "admin",
      password: "admin",
    },
  };

  const res = await axios.get(`${productUrl}${productId}`, options);
  return res.data;
};
