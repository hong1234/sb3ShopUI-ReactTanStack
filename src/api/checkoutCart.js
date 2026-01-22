import axios from "axios";

const cartUrl = "http://localhost:8000/api/v1/carts/";
const customerId = "e80d3c15-4b7b-4fed-9e24-3d219d882e50";

export const checkoutCart = async () => {
  // export const checkoutCart = async (customerId) => {
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

  const res = await axios.get(`${cartUrl}${customerId}` + "/checkout", options);
  return res.data;
};
