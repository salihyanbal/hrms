import axios from "axios";

export default class EmployerStatusService {
  add(employerStatus) {
    return axios.post(
      "http://localhost:8080/api/employerstatuses/add",
      employerStatus
    );
  }

  getAll() {
    return axios.get("http://localhost:8080/api/employerstatuses/getall");
  }

  getLastByEmployerId(employerId) {
    return axios.get(
      "http://localhost:8080/api/employerstatuses/getlastbyemployerid?employerId=" +
        employerId
    );
  }
}
