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

  getAllApprovedStatusByPageNumber(pageNumber) {
    return axios.get(
      "http://localhost:8080/api/jobpostings/getallapprovedstatusbypagenumber?pageNumber=" +
        pageNumber
    );
  }

  getById(id) {
    return axios.get("http://localhost:8080/api/jobpostings/getbyid?id=" + id);
  }

  getAllByEmployerIdAndDeletedFalse(employerId) {
    return axios.get(
      "http://localhost:8080/api/jobpostings/getallbyemployeridanddeletedfalse?employerId=" +
        employerId
    );
  }

  add(jobPosting) {
    return axios.post("http://localhost:8080/api/jobpostings/add", jobPosting);
  }
}
