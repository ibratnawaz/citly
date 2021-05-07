import axios from "axios";

const list = () => axios.get("/links");

const create = payload => axios.post("/links/", payload);

const update = slug => axios.put(`/links/${slug}`);

const linksApi = {
  list,
  create,
  update,
};

export default linksApi;
