import axios from "axios";

export default class EmploymentTypeService {
  getAll() {
    return axios.get("http://localhost:8080/api/employmenttypes/getall");
  }
}
