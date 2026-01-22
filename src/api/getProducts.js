import axios from "axios";

const searchUrl = "http://localhost:8000/api/v1/products/search?title=";

export async function getProducts() {
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

  const res = await axios.get(`${searchUrl}`, options);
  return res.data;
}
