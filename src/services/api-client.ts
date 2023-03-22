import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c8d90311625f40bc888d0349e9ff7487",
  },
});
