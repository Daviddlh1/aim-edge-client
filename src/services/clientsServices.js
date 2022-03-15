import axios from "axios";

export const getAllClients = async () => {
  try {
    const clients = (await axios.get("http://localhost:3001/client")).data;
    return clients;
  } catch (err) {
    console.log("Error in get all clients", err);
  }
};

export const getClientsInvoices = async (id) => {
  try {
    const response = (
      await axios.get(`http://localhost:3001/client/clientDetails/${id}`)
    ).data;
    return response;
  } catch (err) {
    console.log("Error in getClientsInvoices", err);
  }
};
