import axios from "axios";

export default class jobPostingConfirmationService {
  getAll() {
    return axios.get(
      "http://localhost:8080/api/jobpostingconfirmations/getall"
    );
  }

  add(jobPostingConfirmation) {
    console.log(jobPostingConfirmation);
    return axios.post(
      "http://localhost:8080/api/jobpostingconfirmations/add",
      jobPostingConfirmation
    );
  }
}
