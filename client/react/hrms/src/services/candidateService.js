import axios from "axios";

export default class CandidateService {
  getAll() {
    return axios.get("http://localhost:8080/api/candidates/getall");
  }

  getById(id) {
    return axios.get("http://localhost:8080/api/candidates/getbyid?id=" + id);
  }

  save(candidate) {
    return axios.post("http://localhost:8080/api/candidates/save", candidate);
  }
}
