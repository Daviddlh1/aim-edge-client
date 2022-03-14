import axios from "axios";

export const getAllClients = async () => {
  try {
    const clients = (await axios.get("http://localhost:3001/client")).data;
    return clients;
  } catch (err) {
    console.log("Error in get all clients", err);
  }
};
