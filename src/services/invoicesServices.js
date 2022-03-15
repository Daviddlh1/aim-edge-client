import axios from "axios";

export const getAllInvoices = async () => {
  try {
    const response = (await axios.get("http://localhost:3001/invoice")).data;
    return response;
  } catch (err) {
    console.log("Error in getAllInvoices:", err);
  }
};

export const getInvoiceById = async (id) => {
  try {
    const response = (await axios.get(`http://localhost:3001/invoice/${id}`))
      .data;
    return response;
  } catch (err) {
    console.log("Error in getInvoiceById:", err);
  }
};

export const createInvoice = async (invoiceData) => {
  try {
    await axios.post("http://localhost:3001/invoice", invoiceData);
    return console.log("invoice created");
  } catch (err) {
    console.log("Error in createInvoice:", err);
  }
};

export const getClientsAllInvoices = async (id) => {
  try {
    const response = (
      await axios.get(`http://localhost:3001/invoice/cloient/${id}`)
    ).data;
    return response;
  } catch (err) {
    console.log("Error in getClientsAllInvoices", err);
  }
};
