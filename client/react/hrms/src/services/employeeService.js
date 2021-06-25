import axios from "axios";

export default class EmployeeService {
  getAll() {
    return axios.get("http://localhost:8080/api/employees/getall");
  }
  getById(id) {
    return axios.get("http://localhost:8080/api/employees/getbyid?id=" + id);
  }
  save(employer) {
    return axios.post("http://localhost:8080/api/employees/save", employer);
  }
}
