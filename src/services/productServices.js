import axios from "axios";

export const getAllProducts =  async () => {
  const products = (await axios.get("http://localhost:3001/product")).data;
  return products;
};
