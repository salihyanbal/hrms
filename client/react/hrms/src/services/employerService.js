import axios from "axios";

export default class EmployerService {
  getAll() {
    return axios.get("http://localhost:8080/api/employers/getall");
  }
  getById(id) {
    return axios.get("http://localhost:8080/api/employers/getbyid?id=" + id);
  }
  update(employer) {
    return axios.post("http://localhost:8080/api/employers/update", employer);
  }
}
