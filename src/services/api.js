import { create } from "axios";

const api = create({
  baseURL: "https://api.github.com/users/",
});

export default api;
