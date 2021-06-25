import axios from "axios";

export default class CandidateEducationService {
  getAll() {
    return axios.get("http://localhost:8080/api/candidateeducations/getall");
  }

  getAllByCandidateIdAndOrderByDate(candidateId) {
    return axios.get(
      "http://localhost:8080/api/candidateeducations/getallbycandidateidorderbygraduationyear?candidateId=" +
        candidateId
    );
  }

  save(candidateLink) {
    return axios.post(
      "http://localhost:8080/api/candidateeducations/save",
      candidateLink
    );
  }

  delete(candidateLink) {
    return axios.post(
      "http://localhost:8080/api/candidateeducations/delete",
      candidateLink
    );
  }
}
