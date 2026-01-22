import axios from "axios";

const orderUrl = "http://localhost:8000/api/v1/orders/";

export const getOrder = async (orderId) => {
  const options = {
    headers: {
      Accept: "application/json",
    },
    auth: {
      username: "admin",
      password: "admin",
    },
  };

  const res = await axios.get(`${orderUrl}${orderId}`, options);
  return res.data;
};
