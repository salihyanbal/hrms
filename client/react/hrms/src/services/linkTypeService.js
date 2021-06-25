import axios from "axios";

export default class LinkTypeService {
  getAll() {
    return axios.get("http://localhost:8080/api/linktypes/getall");
  }
}
