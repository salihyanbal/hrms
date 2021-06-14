import axios from "axios";

export default class JobPostingStatusService {
  add(jobPostingStatus) {
    console.log(jobPostingStatus);
    return axios.post(
      "http://localhost:8080/api/jobpostingstatuses/add",
      jobPostingStatus
    );
  }

  getAll() {
    return axios.get("http://localhost:8080/api/jobpostingstatuses/getall");
  }

  getLastByJobPostingId(jobPostingId) {
    return axios.get(
      "http://localhost:8080/api/jobpostingstatuses/getlastbyjobpostingid?jobPostingId=" +
        jobPostingId
    );
  }
}
