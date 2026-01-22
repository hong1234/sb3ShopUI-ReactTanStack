import axios from "axios";

const cartUrl = "http://localhost:8000/api/v1/carts/";
const customerId = "e80d3c15-4b7b-4fed-9e24-3d219d882e50";

export async function addItem(productId) {
  const itemDTO = {
    modus: "add",
    productId: productId,
  };

  const options = {
    headers: {
      "Content-Type": "application/json",
    },
    auth: {
      username: "admin",
      password: "admin",
    },
  };

  const res = await axios.put(
    `${cartUrl}${customerId}` + "/items",
    itemDTO,
    options,
  );

  return res.data;
}
