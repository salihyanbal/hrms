import axios from "axios";

export default class JobPostingService {
  getAll() {
    return axios.get("http://localhost:8080/api/jobpostings/getall");
  }

  getAllApprovedStatus() {
    return axios.get(
      "http://localhost:8080/api/jobpostings/getallapprovedstatus"
    );
  }

  getById(id) {
    return axios.get("http://localhost:8080/api/jobpostings/getbyid?id=" + id);
  }

  getAllByEmployerId(employerId) {
    return axios.get(
      "http://localhost:8080/api/jobpostings/getallbyemployerid?employerId=" +
        employerId
    );
  }

  add(jobPosting) {
    return axios.post("http://localhost:8080/api/jobpostings/add", jobPosting);
  }
}
