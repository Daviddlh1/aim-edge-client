import axios from "axios";

export const getAllInvoices = async () => {
  try {
    const response = (await axios.get("http://localhost:3001/invoice")).data;
    return response;
  } catch (err) {
    console.log("Error in get AllInvoices:", err);
  }
};
